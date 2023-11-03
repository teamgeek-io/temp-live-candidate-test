class Case {
    static caseNumberSequence = 160000;
    static INCREASE_COVER_TYPE = 'Increase Cover';
    static DECREASE_COVER_TYPE = 'Decrease Cover';
    static CANCEL_COVER_TYPE = 'Cancel Cover';

    constructor(caseNumber, type, policy = null) {
        this.caseNumber = caseNumber;
        this.type = type;
        this.policy = policy;
        this.status = 'open';

        allCasesRef.value.push(this);
    }

    /**
     * Creates a case instance
     * @param {string} type
     * @param {Policy} policy
     * @returns
     */
    static createCase(type, policy) {
        ++Case.caseNumberSequence;
        return new Case(Case.caseNumberSequence, type, policy);
    }

    /**
     * Sets policy on case instance
     * @param {Policy} policy
     */
    setPolicy(policy) {
        this.policy = policy;
    }

    /**
     * Closes a case
     * @returns void
     */
    close() {
        this.status = 'closed';
    }

    /**
     * Opens a case
     * @returns void
     */
    open() {
        this.status = 'open';
    }
}
