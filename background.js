let currentMode = 'insert';

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.mode) {
    currentMode = message.mode;
    const iconPath = currentMode === 'insert' ? 'icon-insert.png' : 'icon-normal.png';
    chrome.action.setIcon({ path: iconPath, tabId: sender.tab.id });
  }
});
