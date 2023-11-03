class Policy {
    static policyNameSequence = 299999;

    constructor(customerIdNumber = null) {
        ++Policy.policyNameSequence;
        this.policyName = 'LIFINSURE' + Policy.policyNameSequence;
        this.policySequence = Policy.policyNameSequence;
        //code here

        allPoliciesRef.value.push(this);
    }

    /**
     * Creates a policy instance
     * @returns {Policy}
     */
    static createPolicy() {
        return new Policy();
    }

    /**
     * Assigns policy to customer
     * @param {Customer} customer
     * @returns void
     */
    assignCustomer(customer) {
        //code here
    }
}
