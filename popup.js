document.addEventListener('DOMContentLoaded', function() {
  const toggleSwitch = document.getElementById('toggleSwitch');
  const statusDiv = document.getElementById('status');
  const statusText = document.getElementById('statusText');

  function checkClasscardPage() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      const currentTab = tabs[0];
      
      if (!currentTab.url.includes('classcard.net')) {
        statusText.textContent = 'Only works on Classcard website';
        statusDiv.className = 'status disabled';
        return;
      }
      
      chrome.tabs.sendMessage(currentTab.id, {action: 'getDarkModeStatus'}, function(response) {
        if (chrome.runtime.lastError) {
          statusText.textContent = 'Please refresh the page';
          statusDiv.className = 'status disabled';
          return;
        }
        
        updateUI(response.darkModeEnabled);
      });
    });
  }

  function updateUI(isDarkMode) {
    if (isDarkMode) {
      toggleSwitch.classList.add('active');
      statusDiv.className = 'status enabled';
      statusText.textContent = 'Dark Mode ON (Auto)';
    } else {
      toggleSwitch.classList.remove('active');
      statusDiv.className = 'status disabled';
      statusText.textContent = 'Light Mode ON (Manual)';
    }
  }

  toggleSwitch.addEventListener('click', function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {action: 'toggleDarkMode'}, function(response) {
        if (chrome.runtime.lastError) {
          statusText.textContent = 'Please refresh the page';
          return;
        }
        
        updateUI(response.darkModeEnabled);
      });
    });
  });

  checkClasscardPage();
});
