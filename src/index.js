import { startTimer, pauseTimer, resetTimer, applySettings,toBreak,toWork } from './timer.js';
import './styles.css'; 

document.addEventListener('DOMContentLoaded', () => {
document.getElementById('start').addEventListener('click', startTimer);
document.getElementById('pause').addEventListener('click', pauseTimer);
document.getElementById('reset').addEventListener('click', resetTimer);
document.getElementById('apply-settings').addEventListener('click', applySettings);
document.getElementById('work-button').addEventListener('click',toWork); 
document.getElementById('break-button').addEventListener('click', toBreak);
});