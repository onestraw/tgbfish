document.addEventListener('DOMContentLoaded', () => {
  const enableToggle = document.getElementById('enableToggle');

  // 从存储读取状态
  chrome.storage.sync.get(['isEnabled'], (result) => {
    enableToggle.checked = result.isEnabled !== false;
  });

  // 处理切换事件
  enableToggle.addEventListener('change', (e) => {
    const isEnabled = e.target.checked;
    chrome.storage.sync.set({ isEnabled });

    // 通知 content script
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, {
        type: 'TOGGLE_EXTENSION',
        enabled: isEnabled
      }).catch(() => {
        // 标签页可能不支持 messaging
      });
    });
  });
});
