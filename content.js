// === Simple Vim-like navigation ===

let mode = 'insert';
let speed = 100;

function updateMode(newMode) {
  chrome.runtime.sendMessage({ mode: newMode });
}


document.addEventListener('keydown', (e) => {
    if (mode === 'normal') {
        if (e.key === 'j') window.scrollBy({ top: speed, left: 0, behavior: "instant", });
        if (e.key === 'k') window.scrollBy({ top: -speed, left: 0, behavior: "instant", });
        if (e.key === 'h') window.scrollBy({ top: 0, left: -speed, behavior: "instant", });
        if (e.key === 'l') window.scrollBy({ top: 0, left: speed, behavior: "instant", });
        else if (e.key === 'i') {mode = 'insert'; updateMode("insert")};
        e.preventDefault();
    }
    else if (mode === 'insert') {
        if (e.key === 'Escape') {
            mode = 'normal';
            updateMode("normal");
            e.preventDefault();
        }
    }
})