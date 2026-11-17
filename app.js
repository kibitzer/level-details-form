// State management
let projects = [];

// DOM Elements
const form = document.getElementById('levelForm');
const projectsContainer = document.getElementById('projectsContainer');
const addProjectBtn = document.getElementById('addProjectBtn');
const successModal = document.getElementById('successModal');
const closeModalBtn = document.getElementById('closeModalBtn');
const copyClipboardBtn = document.getElementById('copyClipboardBtn');
const vpeMailtoBtn = document.getElementById('vpeMailtoBtn');
const historySection = document.getElementById('historySection');
const historyContent = document.getElementById('historyContent');
const historyToggleIcon = document.getElementById('historyToggleIcon');
const draftAlert = document.getElementById('draftAlert');
const draftAlertText = document.getElementById('draftAlertText');

// Initialise form & events
document.addEventListener('DOMContentLoaded', () => {
    if (form) {
        initForm();
        renderHistory();
        
        // Auto-save on form input (with 1 second debounce)
        form.addEventListener('input', debounce(saveDraft, 1000));
    }
});

function debounce(func, delay) {
    let timeout;
    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), delay);
    };
}

function createProjectState(name = '', speechTitle = '', date = '', club = 'Guiding Stars', evaluator = '') {
    return { name, speechTitle, date, club, evaluator };
}

function initForm() {
    const draftData = localStorage.getItem('pathways_form_draft');
    if (draftData) {
        try {
            const data = JSON.parse(draftData);
            const memberNameEl = document.getElementById('memberName');
            const nominatedClubEl = document.getElementById('nominatedClub');
            const vpeEmailEl = document.getElementById('vpeEmail');
            const pathSelectedEl = document.getElementById('pathSelected');
            
            if (memberNameEl) memberNameEl.value = data.memberName || '';
            if (nominatedClubEl) nominatedClubEl.value = data.nominatedClub || 'Guiding Stars';
            if (vpeEmailEl) vpeEmailEl.value = data.vpeEmail || 'guidingstarstoastmasters@gmail.com';
            if (pathSelectedEl) pathSelectedEl.value = data.pathSelected || 'Dynamic Leadership';
            
            if (data.levelSelected) {
                const radio = document.querySelector(`input[name="level"][value="${data.levelSelected}"]`);
                if (radio) radio.checked = true;
            }
            
            if (data.projects && data.projects.length > 0) {
                projects = data.projects;
            } else {
                projects = getDefaultProjects();
            }
            showDraftAlert(data.updatedAt);
        } catch (e) {
            console.error("Error loading draft", e);
            projects = getDefaultProjects();
        }
    } else {
        projects = getDefaultProjects();
    }
    renderProjects();
}

function getDefaultProjects() {
    return [
        createProjectState('Ice Breaker', '', '', 'Guiding Stars', ''),
        createProjectState('Writing a Speech with Feedback (Speech)', '', '', 'Guiding Stars', ''),
        createProjectState('Writing a Speech with Feedback (Evaluation)', '', '', 'Guiding Stars', '')
    ];
}

function showDraftAlert(updatedAt) {
    if (!draftAlert) return;
    const dateStr = new Date(updatedAt).toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });
    draftAlertText.textContent = `Unsaved draft auto-restored (saved at ${dateStr}).`;
    draftAlert.classList.remove('hidden');
}

function clearDraft() {
    localStorage.removeItem('pathways_form_draft');
    if (draftAlert) draftAlert.classList.add('hidden');
    if (form) form.reset();
    
    const nominatedClubEl = document.getElementById('nominatedClub');
    const vpeEmailEl = document.getElementById('vpeEmail');
    
    if (nominatedClubEl) nominatedClubEl.value = 'Guiding Stars';
    if (vpeEmailEl) vpeEmailEl.value = 'guidingstarstoastmasters@gmail.com';
    
    projects = getDefaultProjects();
    renderProjects();
}

function renderProjects() {
    if (!projectsContainer) return;
    projectsContainer.innerHTML = '';
    
    projects.forEach((proj, idx) => {
        const isFirst = idx === 0;
        const countStr = String(idx + 1).padStart(2, '0');
        
        const card = document.createElement('div');
        card.className = 'project-card bg-surface-container-lowest p-md rounded-xl card-shadow border border-outline-variant relative transition-all duration-200';
        card.dataset.index = idx;
        
        card.innerHTML = `
            <div class="flex justify-between items-center mb-md border-l-4 border-primary pl-sm">
                <div class="flex items-center gap-base">
                    <span class="project-badge bg-primary text-on-primary w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">${countStr}</span>
                    <h3 class="font-headline-md text-headline-md text-primary">${isFirst ? 'Primary Project Details' : 'Additional Project Details'}</h3>
                </div>
                <div class="flex items-center gap-md">
                    ${isFirst ? '<span class="text-primary font-bold text-label-md uppercase tracking-wider print:hidden">Required</span>' : ''}
                    ${!isFirst ? `
                        <button type="button" onclick="removeProject(${idx})" class="remove-project-btn text-error hover:text-red-700 font-label-md flex items-center gap-xs print:hidden transition-all duration-200">
                            <span class="material-symbols-outlined text-[20px]">delete</span>
                            Delete
                        </button>
                    ` : ''}
                </div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-x-lg gap-y-md">
                <div class="space-y-xs">
                    <label class="font-label-md text-label-md text-on-surface-variant block">Project Name</label>
                    <input type="text" required class="project-name form-input" placeholder="e.g. Evaluation and Feedback" value="${escapeHtml(proj.name)}">
                </div>
                <div class="space-y-xs">
                    <label class="font-label-md text-label-md text-on-surface-variant block">Speech Title</label>
                    <input type="text" required class="project-speech-title form-input" placeholder="e.g. My Journey into Tech" value="${escapeHtml(proj.speechTitle)}">
                </div>
                <div class="space-y-xs">
                    <label class="font-label-md text-label-md text-on-surface-variant block">Date Given</label>
                    <input type="date" required class="project-date form-input" value="${proj.date}">
                </div>
                <div class="grid grid-cols-2 gap-md">
                    <div class="space-y-xs">
                        <label class="font-label-md text-label-md text-on-surface-variant block">Club</label>
                        <input type="text" required class="project-club form-input" value="${escapeHtml(proj.club)}">
                    </div>
                    <div class="space-y-xs">
                        <label class="font-label-md text-label-md text-on-surface-variant block">Evaluator Name</label>
                        <input type="text" required class="project-evaluator form-input" placeholder="Evaluator Name" value="${escapeHtml(proj.evaluator)}">
                    </div>
                </div>
            </div>
        `;
        
        // Listen for internal input changes to keep state synchronized
        card.querySelectorAll('input').forEach(input => {
            input.addEventListener('input', () => {
                saveDraft();
            });
        });
        
        projectsContainer.appendChild(card);
    });
}

function updateProjectStateFromDOM() {
    if (!projectsContainer) return;
    const cards = projectsContainer.querySelectorAll('.project-card');
    projects = Array.from(cards).map(card => {
        return {
            name: card.querySelector('.project-name').value,
            speechTitle: card.querySelector('.project-speech-title').value,
            date: card.querySelector('.project-date').value,
            club: card.querySelector('.project-club').value,
            evaluator: card.querySelector('.project-evaluator').value
        };
    });
}

// Ensure the level option radios also trigger autosave
document.querySelectorAll('input[name="level"]').forEach(radio => {
    radio.addEventListener('change', () => {
        saveDraft();
    });
});
const pathSelectedEl = document.getElementById('pathSelected');
if (pathSelectedEl) {
    pathSelectedEl.addEventListener('change', () => {
        saveDraft();
    });
}

function addProject() {
    updateProjectStateFromDOM();
    projects.push(createProjectState('', '', '', 'Guiding Stars', ''));
    renderProjects();
    saveDraft();
}

function removeProject(index) {
    updateProjectStateFromDOM();
    projects.splice(index, 1);
    renderProjects();
    saveDraft();
}

function saveDraft() {
    updateProjectStateFromDOM();
    const memberNameEl = document.getElementById('memberName');
    const nominatedClubEl = document.getElementById('nominatedClub');
    const vpeEmailEl = document.getElementById('vpeEmail');
    const pathSelectedEl = document.getElementById('pathSelected');
    const levelSelectedRadio = document.querySelector('input[name="level"]:checked');
    
    const data = {
        memberName: memberNameEl ? memberNameEl.value : '',
        nominatedClub: nominatedClubEl ? nominatedClubEl.value : 'Guiding Stars',
        vpeEmail: vpeEmailEl ? vpeEmailEl.value : 'guidingstarstoastmasters@gmail.com',
        pathSelected: pathSelectedEl ? pathSelectedEl.value : 'Dynamic Leadership',
        levelSelected: levelSelectedRadio ? levelSelectedRadio.value : '1',
        projects: projects,
        updatedAt: new Date().toISOString()
    };
    localStorage.setItem('pathways_form_draft', JSON.stringify(data));
}

function saveDraftManual() {
    saveDraft();
    alert("Draft saved successfully to your browser's local storage!");
}

// Form Submission
if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        updateProjectStateFromDOM();
        
        const levelSelected = document.querySelector('input[name="level"]:checked')?.value;
        const memberName = document.getElementById('memberName').value;
        const nominatedClub = document.getElementById('nominatedClub').value;
        const vpeEmail = document.getElementById('vpeEmail').value;
        const pathSelected = document.getElementById('pathSelected').value;
        
        const record = {
            id: 'sub_' + Date.now(),
            memberName,
            nominatedClub,
            vpeEmail,
            pathSelected,
            levelSelected,
            projects,
            submittedAt: new Date().toISOString()
        };
        
        // Save to Local Submission History
        const history = getHistory();
        history.unshift(record);
        localStorage.setItem('pathways_submissions_history', JSON.stringify(history));
        
        // Clean up draft
        localStorage.removeItem('pathways_form_draft');
        if (draftAlert) draftAlert.classList.add('hidden');
        
        renderHistory();
        showSuccessModal(record);
    });
}

function showSuccessModal(record) {
    if (successModal) successModal.classList.remove('hidden');
    
    // Prepare dynamic ExCo mail details
    const emailSubject = `[Pathways Level Completion] ${record.memberName} - ${record.pathSelected} Level ${record.levelSelected}`;
    
    let projectsText = '';
    record.projects.forEach((p, index) => {
        projectsText += `Project ${String(index + 1).padStart(2, '0')}:
- Project Name: ${p.name || '(N/A)'}
- Speech Title: ${p.speechTitle || '(N/A)'}
- Date Given: ${p.date || '(N/A)'}
- Club: ${p.club || '(N/A)'}
- Evaluator: ${p.evaluator || '(N/A)'}

`;
    });
    
    const emailBody = `Hi Guiding Stars ExCo,

Please find below my completed Toastmasters Pathways level details for my level approval in Guiding Stars.

MEMBER IDENTIFICATION:
------------------------------------------
Member Name: ${record.memberName}
Path Selected: ${record.pathSelected}
Level Completed: Level ${record.levelSelected}
Nominated Club for Award Credit: ${record.nominatedClub}
Submission Date: ${new Date(record.submittedAt).toLocaleDateString('en-GB')}

COMPLETED PROJECTS EVIDENCE TRAIL:
------------------------------------------
${projectsText}
This evidence trail has been generated and filed via the Guiding Stars Level Completion Form.

Best regards,
${record.memberName}`;

    if (vpeMailtoBtn) vpeMailtoBtn.href = `mailto:${record.vpeEmail}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    
    // Clipboard Action
    if (copyClipboardBtn) {
        copyClipboardBtn.onclick = () => {
            navigator.clipboard.writeText(emailBody)
                .then(() => {
                    alert("Submission details copied to clipboard! You can now paste this directly into an email client or messaging app.");
                })
                .catch(err => {
                    console.error("Could not copy text", err);
                });
        };
    }
}

function printFromModal() {
    if (successModal) successModal.classList.add('hidden');
    window.print();
}

if (closeModalBtn) {
    closeModalBtn.onclick = () => {
        if (successModal) successModal.classList.add('hidden');
        clearDraft();
    };
}

function getHistory() {
    const historyData = localStorage.getItem('pathways_submissions_history');
    if (historyData) {
        try {
            return JSON.parse(historyData) || [];
        } catch (e) {
            console.error("Error parsing submissions history", e);
        }
    }
    return [];
}

// History Section Management
function renderHistory() {
    const history = getHistory();
    
    if (history.length === 0) {
        if (historySection) historySection.classList.add('hidden');
        return;
    }
    
    if (historySection) historySection.classList.remove('hidden');
    if (historyContent) {
        historyContent.innerHTML = '';
        
        history.forEach(item => {
            const itemDate = new Date(item.submittedAt).toLocaleDateString('en-GB', {
                day: '2-digit',
                month: 'short',
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            });
            
            const div = document.createElement('div');
            div.className = 'bg-surface-container-lowest p-sm rounded-lg border border-outline-variant flex flex-col md:flex-row md:items-center justify-between gap-sm transition-all duration-200 hover:border-primary';
            div.innerHTML = `
                <div>
                    <h4 class="font-label-md text-label-md text-primary">${escapeHtml(item.memberName)} — ${escapeHtml(item.pathSelected)} (Level ${item.levelSelected})</h4>
                    <p class="font-caption text-caption text-secondary">Club Credit: <strong>${escapeHtml(item.nominatedClub)}</strong> • Submitted: ${itemDate}</p>
                </div>
                <div class="flex items-center gap-sm flex-wrap">
                    <button type="button" onclick="viewSubmission('${item.id}')" class="px-sm py-xs border border-primary text-primary hover:bg-primary hover:text-white font-bold rounded-lg text-xs transition-all duration-200 flex items-center gap-xs">
                        <span class="material-symbols-outlined text-[16px]">visibility</span> View/Edit
                    </button>
                    <button type="button" onclick="printSubmissionDirectly('${item.id}')" class="px-sm py-xs border border-secondary text-secondary hover:bg-secondary hover:text-white font-bold rounded-lg text-xs transition-all duration-200 flex items-center gap-xs">
                        <span class="material-symbols-outlined text-[16px]">print</span> Print PDF
                    </button>
                    <button type="button" onclick="deleteHistory('${item.id}')" class="p-xs text-error hover:text-red-700 transition-all duration-200" title="Delete record">
                        <span class="material-symbols-outlined text-[20px]">delete</span>
                    </button>
                </div>
            `;
            historyContent.appendChild(div);
        });
    }
}

function viewSubmission(id) {
    const history = getHistory();
    const item = history.find(x => x.id === id);
    if (!item) return;
    
    const memberNameEl = document.getElementById('memberName');
    const nominatedClubEl = document.getElementById('nominatedClub');
    const vpeEmailEl = document.getElementById('vpeEmail');
    const pathSelectedEl = document.getElementById('pathSelected');
    
    if (memberNameEl) memberNameEl.value = item.memberName;
    if (nominatedClubEl) nominatedClubEl.value = item.nominatedClub;
    if (vpeEmailEl) vpeEmailEl.value = item.vpeEmail;
    if (pathSelectedEl) pathSelectedEl.value = item.pathSelected;
    
    const radio = document.querySelector(`input[name="level"][value="${item.levelSelected}"]`);
    if (radio) radio.checked = true;
    
    projects = item.projects;
    renderProjects();
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function printSubmissionDirectly(id) {
    viewSubmission(id);
    setTimeout(() => {
        window.print();
    }, 400);
}

function deleteHistory(id) {
    if (!confirm("Are you sure you want to delete this submission record from your local browser history? This action cannot be undone.")) {
        return;
    }
    const history = getHistory().filter(x => x.id !== id);
    localStorage.setItem('pathways_submissions_history', JSON.stringify(history));
    renderHistory();
}

let historyOpen = false;
function toggleHistory() {
    historyOpen = !historyOpen;
    if (historyOpen) {
        if (historyContent) historyContent.classList.remove('hidden');
        if (historyToggleIcon) historyToggleIcon.classList.add('rotate-180');
    } else {
        if (historyContent) historyContent.classList.add('hidden');
        if (historyToggleIcon) historyToggleIcon.classList.remove('rotate-180');
    }
}

function escapeHtml(str) {
    if (!str) return '';
    return str
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}
