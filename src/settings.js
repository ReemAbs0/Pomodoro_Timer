export function getSettings() {
    return {
        workDuration: localStorage.getItem('workDuration') ? parseInt(localStorage.getItem('workDuration'), 10) : 25,
        breakDuration: localStorage.getItem('breakDuration') ? parseInt(localStorage.getItem('breakDuration'), 10) : 5,
    };
}

export function saveSettings(workDuration, breakDuration) {
    localStorage.setItem('workDuration', workDuration);
    localStorage.setItem('breakDuration', breakDuration);
}
