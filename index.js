// script.ts
// Toggle the visibility of the Skills section
var toggleSkillButton = document.getElementById('toggle-skill');
var skillsection = document.getElementById('skillsection');
toggleSkillButton.addEventListener('click', function () {
    if (skillsection.style.display === 'none') {
        skillsection.style.display = 'block';
    }
    else {
        skillsection.style.display = 'none';
    }
});
