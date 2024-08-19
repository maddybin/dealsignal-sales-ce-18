console.log('Content script loaded!');

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message.title === "getWindowInfo") {
    chrome.runtime.sendMessage({
      title: 'setWindowInfo',
      screenWidth: `${window.screen.width}`,
      screenHeight: `${window.screen.height}`,
      tabId: `${message.tab.id}`,
      baseURL:  "https://stagingapp.dealsignal.com/api/v0",
      baseURLV1:  "https://stagingapp.dealsignal.com/api/v1"
    });
    sendResponse(true);
    return true;
  }
 
});
