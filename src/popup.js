document.getElementById('capture').addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.captureVisibleTab(tabs[0].windowId, {}, (image) => {
        document.getElementById('screenshot').src = image;
        console.log('Screenshot', image);
        chrome.storage.local.set({ screenshot: image }, () => {
          console.log('Screenshot saved.');

        //   chrome.runtime.sendMessage({ action: "screenshotCaptured" });
        });
      });
    });
  });
  