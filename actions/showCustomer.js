function showCustomer(customer) {
    activeView.value = 'customerView';

    customer.loadPolicies();
    customerShown.value = customer;
}
