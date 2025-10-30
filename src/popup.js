// Display welcome page when first clicked after an install or update...
chrome.storage.sync.get({
    installedVersion: '',
    newInstall: false,
    newUpdate: false,
}, function (config) {
    if (config.newInstall || config.newUpdate) {
        chrome.tabs.create({ url: chrome.runtime.getURL('welcome.html') });
        window.close();
    } else {
        // Send click event to background.js for processing...
        chrome.runtime.sendMessage({
            type: "click_event"
        }, response => {
            if (response.message === 'success') {
                window.close();
            }
        });
    }
});
