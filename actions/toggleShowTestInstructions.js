function toggleShowTestInstructions() {
    showTestInstructionsFlag.value = !showTestInstructionsFlag.value;
    if (showTestInstructionsFlag.value) {
        setTimeout(function () {
            hljs.highlightAll();
        }, 10);
    }
}
