function createIncreaseCaseForPolicy(policy) {
    createCaseForPolicy(policy, Case.INCREASE_COVER_TYPE);
}

function createDecreaseCaseForPolicy(policy) {
    createCaseForPolicy(policy, Case.DECREASE_COVER_TYPE);
}

function createCancelCaseForPolicy(policy) {
    createCaseForPolicy(policy, Case.CANCEL_COVER_TYPE);
}

function createCaseForPolicy(policy, type) {
    let _case = Case.createCase(type, policy);
    showToastMessage(
        'Case created: ' + _case.caseNumber + '(' + type + '). Go to cases to see!'
    );
}
