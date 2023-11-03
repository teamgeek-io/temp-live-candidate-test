function findAndShowCase() {
    caseShown.value = null;
    let caseFound = null;
    let allCases = allCasesRef.value;
    let searchCaseNumber = caseNumberInput.value;

    //code here


    if (caseFound) {
        //clear case number input after finding case
        caseNumberInput.value = '';
    }

    showCase(caseFound);
}
