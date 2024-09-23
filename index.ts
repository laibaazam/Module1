// script.ts

// Toggle the visibility of the Skills section
const toggleSkillButton = document.getElementById('toggle-skill') as HTMLButtonElement;
const skillsection = document.getElementById('skillsection') as HTMLElement;

toggleSkillButton.addEventListener('click', () => {
    if (skillsection.style.display === 'none') {
        skillsection.style.display = 'block';
    } else {
        skillsection.style.display = 'none';
    }

});
