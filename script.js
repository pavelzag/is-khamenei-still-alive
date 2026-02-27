// --- CONFIGURATION ---
// When the day comes, simply change `isDead` to true, and update `deathDate`.
const CONFIG = {
    isDead: false,
    deathDate: "2026-02-27" // Format: YYYY-MM-DD
};
// ---------------------

document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const currentStateText = document.getElementById('current-state-text');
    const deathDateSpan = document.getElementById('death-date');

    function updateUI() {
        if (CONFIG.isDead) {
            body.classList.add('is-dead');
            currentStateText.textContent = "He has passed away.";

            // Format the date nicely
            const dateVal = CONFIG.deathDate;
            const options = { year: 'numeric', month: 'long', day: 'numeric' };
            const dateObj = new Date(dateVal);
            if (!isNaN(dateObj)) {
                // To avoid timezone shift issues on pure dates
                const localDate = new Date(dateObj.getTime() + Math.abs(dateObj.getTimezoneOffset() * 60000));
                deathDateSpan.textContent = localDate.toLocaleDateString(undefined, options);
            } else {
                deathDateSpan.textContent = dateVal;
            }
        } else {
            body.classList.remove('is-dead');
            currentStateText.textContent = "He is currently ALIVE.";
            deathDateSpan.textContent = "";
        }
    }

    // Run initial UI update
    updateUI();
});
