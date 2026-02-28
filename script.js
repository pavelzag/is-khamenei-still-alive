// --- CONFIGURATION ---
const CONFIG = {
    isDead: true,
    birthDate: "1939-04-19", // Format: YYYY-MM-DD
    deathDate: "2026-02-28" // Format: YYYY-MM-DD
};
// ---------------------

document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const currentStateText = document.getElementById('current-state-text');
    const deathDateSpan = document.getElementById('death-date');
    const birthDateSpan = document.getElementById('birth-date');
    const deathDateDisplay = document.getElementById('death-date-display');

    function formatDate(dateStr) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const dateObj = new Date(dateStr);
        if (isNaN(dateObj)) return dateStr;
        const localDate = new Date(dateObj.getTime() + Math.abs(dateObj.getTimezoneOffset() * 60000));
        return localDate.toLocaleDateString(undefined, options);
    }

    function updateUI() {
        if (CONFIG.isDead) {
            body.classList.add('is-dead');
            currentStateText.textContent = "He has passed away.";
            deathDateSpan.textContent = formatDate(CONFIG.deathDate);
            birthDateSpan.textContent = formatDate(CONFIG.birthDate);
            deathDateDisplay.textContent = formatDate(CONFIG.deathDate);
        } else {
            body.classList.remove('is-dead');
            currentStateText.textContent = "He is currently ALIVE.";
            deathDateSpan.textContent = "";
            birthDateSpan.textContent = "";
            deathDateDisplay.textContent = "";
        }
    }

    // Run initial UI update
    updateUI();
});
