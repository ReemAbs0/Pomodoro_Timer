import { updateUI } from './ui.js';
import { playNotification } from './notifications.js';
import { getSettings, saveSettings } from './settings.js';

let timer;
let isRunning = false;
let isBreak = false;
let { workDuration, breakDuration } = getSettings(); 
let minutes = workDuration;
let seconds = 0;

export function startTimer() {
    if (isRunning) return;
    isRunning = true;
    timer = setInterval(() => {
        if (seconds === 0) {
            if (minutes === 0) {
                clearInterval(timer);
                isRunning = false;
                playNotification();
                return;
            }
            minutes--;
            seconds = 59;
        } else {
            seconds--;
        }
        updateUI(minutes, seconds);
    }, 1000);
}

export function pauseTimer() {
    clearInterval(timer);
    isRunning = false;
}

export function resetTimer() {
    clearInterval(timer);
    minutes = 25;
    seconds = 0;
    isRunning = false;
    updateUI(minutes, seconds);
}

export function applySettings() {
    const newWorkDuration = parseInt(document.getElementById('work-duration').value, 10);
    const newBreakDuration = parseInt(document.getElementById('break-duration').value, 10);

    if (newWorkDuration > 0 && newBreakDuration > 0) {
        saveSettings(newWorkDuration, newBreakDuration);
        workDuration = newWorkDuration;
        breakDuration = newBreakDuration;
        minutes = workDuration;
        updateUI(minutes, seconds);
    }
}

export function toWork() {
    isBreak = false;
    minutes = workDuration;  // تعيين الوقت لفترة العمل
    seconds = 0;
    document.body.style.backgroundImage = "linear-gradient(135deg, #be8284, rgb(153, 101, 86))";  
    document.getElementById('Wlabel').style.display='block';
    document.getElementById('Blabel').style.display='none';
    document.getElementById('work-button').style.background='white'; 
    document.getElementById('work-button').style.color='black'; 
    document.getElementById('break-button').style.background=''; 
    document.getElementById('break-button').style.color=''; 
    updateUI(minutes, seconds);
}

export function toBreak() {
    isBreak = true;
    minutes = breakDuration;  // تعيين الوقت لفترة البريك
    seconds = 0;
    document.body.style.backgroundImage = "linear-gradient(135deg, #4f81bd, #78a3d2)";
    document.getElementById('break-button').style.background='white'; 
    document.getElementById('break-button').style.color='black'; 
    document.getElementById('Wlabel').style.display='none';
    document.getElementById('Blabel').style.display='block';
    document.getElementById('work-button').style.background=''; 
    document.getElementById('work-button').style.color=''; 
    updateUI(minutes, seconds);
}
