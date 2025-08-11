const thisVersion = chrome.runtime.getManifest().version;

function clearInstallOrUpdate() {
    chrome.storage.sync.set({
        newInstall: false,
        newUpdate: false,
    }, function () {});
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('version').textContent = thisVersion;
    chrome.storage.sync.get({
        newInstall: false,
        newUpdate: false,
    }, function (config) {
        if (config.newInstall) {
            document.getElementById('welcome-message').classList.remove('d-none');
        } else if (config.newUpdate) {
            document.getElementById('update-message').classList.remove('d-none');
        }

        if (config.newInstall || config.newUpdate) {
            clearInstallOrUpdate();
        }
    });
});
