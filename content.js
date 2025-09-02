// Classcard Auto Dark Mode Script - Safe Version
function isDarkModeEnabled() {
  return localStorage.getItem('classcard-darkmode') !== 'disabled';
}

function applyDarkMode() {
  document.documentElement.classList.add('dark-mode-enabled');
  localStorage.setItem('classcard-darkmode', 'enabled');
}

function removeDarkMode() {
  document.documentElement.classList.remove('dark-mode-enabled');
  localStorage.setItem('classcard-darkmode', 'disabled');
}

function toggleDarkMode() {
  if (isDarkModeEnabled()) {
    removeDarkMode();
  } else {
    applyDarkMode();
  }
}

function initializeDarkMode() {
  if (isDarkModeEnabled()) {
    applyDarkMode();
  }
}

// 즉시 적용 (깜빡임 방지)
if (localStorage.getItem('classcard-darkmode') !== 'disabled') {
  document.documentElement.classList.add('dark-mode-enabled');
}

// DOM 로드 완료 후
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeDarkMode);
} else {
  initializeDarkMode();
}

// 새로운 요소들 감지
const observer = new MutationObserver(function(mutations) {
  if (isDarkModeEnabled()) {
    document.documentElement.classList.add('dark-mode-enabled');
  }
});

observer.observe(document.body, {
  childList: true,
  subtree: true
});

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  if (message.action === 'toggleDarkMode') {
    toggleDarkMode();
    sendResponse({success: true, darkModeEnabled: isDarkModeEnabled()});
  } else if (message.action === 'getDarkModeStatus') {
    sendResponse({darkModeEnabled: isDarkModeEnabled()});
  }
});

document.addEventListener('keydown', function(e) {
  if (e.ctrlKey && e.key === 'd') {
    e.preventDefault();
    toggleDarkMode();
  }
});
