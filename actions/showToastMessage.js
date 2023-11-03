let timeoutInstance = null;
function showToastMessage(message) {
    toastMessage.value = message;

    if (timeoutInstance) {
        clearTimeout(timeoutInstance);
    }

    timeoutInstance = setTimeout(function () {
        toastMessage.value = null;
    }, 2000);
}
