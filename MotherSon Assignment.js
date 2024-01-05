let projectsPageEl = document.getElementById("projectPage");
let projectNavEl = document.getElementById("projectNav");
let contactsPageEl = document.getElementById("contactsPage")
let contactsNavEl = document.getElementById("contactNav")
let aboutPageEl = document.getElementById("aboutPage")
let aboutNavEl = document.getElementById("aboutNav")
let addProjectEl = document.getElementById("addProject")
let addButtonEl = document.getElementById("addButton")


projectNavEl.onclick = function() {
    projectsPageEl.classList.remove("projectPage")
    contactsPageEl.classList.add("contactsPage")
    aboutPageEl.classList.add("aboutPage")
}

contactsNavEl.onclick = function() {
    contactsPageEl.classList.remove("contactsPage")
    projectsPageEl.classList.add("projectPage")
    aboutPageEl.classList.add("aboutPage")
}

aboutNavEl.onclick = function() {
    aboutPageEl.classList.remove("aboutPage")
    projectsPageEl.classList.add("projectPage")
    contactsPageEl.classList.add("contactsPage")
}

document.getElementById('addButton').addEventListener('click', function(e) {
    e.preventDefault();

    const projectTitle = document.getElementById('project-name').value;
    const projectLink = document.getElementById('project-name').value;
    const description = document.getElementById('project-name').value;

    const newProject = `
        <div class="project-container">
            <h3 class="project-title">${projectTitle}</h3>
            <a href="${projectLink}" class="project-link">${projectLink}</a>
            <p class="project-description">${description}</p>
        </div>
    `;

    document.getElementById('projectPage').insertAdjacentHTML('beforeend', newProject);

    // Reset form fields
    document.getElementById('project-name').value = '';
    document.getElementById('project-name').value = '';
    document.getElementById('project-name').value = '';
});