import notificationSound from './notificationSound.mp3';

export function playNotification() {
    const audio = new Audio(notificationSound); 
    audio.play().catch(error => console.error("Error playing audio:", error)); 
}
