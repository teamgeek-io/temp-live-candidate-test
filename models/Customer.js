class Customer {
    static customerIdNumberSequence = 900799;
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.idNumber = ++Customer.customerIdNumberSequence;
        this.policies = [];

        allCustomersRef.value.push(this);
    }

    /**
     * Creates a customer instance
     * @param {string} firstName
     * @param {string} lastName
     * @param {array} policies
     * @returns {Customer}
     */
    static createCustomer(firstName, lastName, policies) {
        return new Customer(firstName, lastName, policies);
    }

    /**
     * Assigns a policy to the customer
     * @param {Policy} policy
     * @returns void
     */
    assignPolicy(policy) {
        policy.assignCustomer(this);
    }

    /**
     * Loads all the policies that belongs to the customer into the policies property
     * @returns void
     */
    loadPolicies() {
        let allPolicies = allPoliciesRef.value;
        this.policies = [];

        //code here
    }

    /**
     * Unloads all the policies
     */
    unloadPolicies() {
        this.policies = [];
    }
}
