document.addEventListener('DOMContentLoaded', () => {
    const toggleSkillsButton = document.getElementById('toggle-skills') as HTMLButtonElement;
    const skillsList = document.getElementById('skills-list') as HTMLElement | null;

    toggleSkillsButton?.addEventListener('click', () => {
        if (skillsList) {
            if (skillsList.style.display === 'none' || skillsList.style.display === '') {
                skillsList.style.display = 'block';
            } else {
                skillsList.style.display = 'none';
            }
        } else {
            console.error('Skills list not found');
        }
    });
});
