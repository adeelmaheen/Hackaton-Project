"use strict";
document.addEventListener('DOMContentLoaded', function () {
    var toggleSkillsButton = document.getElementById('toggle-skills');
    var skillsList = document.getElementById('skills-list');
    toggleSkillsButton === null || toggleSkillsButton === void 0 ? void 0 : toggleSkillsButton.addEventListener('click', function () {
        if (skillsList) {
            if (skillsList.style.display === 'none' || skillsList.style.display === '') {
                skillsList.style.display = 'block';
            }
            else {
                skillsList.style.display = 'none';
            }
        }
        else {
            console.error('Skills list not found');
        }
    });
});
