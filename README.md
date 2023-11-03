# Candidate Test Javascript MVC

### Instructions

You work for a company that offers life insurance.

You are tasked with fixing some broken functionality on this customer relationship management (CRM) application that the company uses to manage cases, policies and customers.

1. The case search on the sidebar is not working. Your task is to implement the piece of code that's supposed to find the case matching the case number that's typed into the sidebar input.
```javascript
//FYI: The function is already being called when 'View' is clicked, you just need to get it to find the case being searched
// Location: ./actions/findAndShowCase.js
function findAndShowCase() {}
```

2. The dashboard has cards that are supposed to show a total number of cases by type. Your task is to implement pieces of code that return a total number of cases for each type of case
```javascript
//FYI: The functions are already being called, you just need to get then to return the correct numbers
// Location: ./general/stats.js
function getTotalNumOfIncreaseCoverCases() {}
function getTotalNumOfDecreaseCoverCases() {}
function getTotalNumOfCancelCoverCases() {}
```

3. The dashboard has another card that is supposed to show the name of the latest policy. Your task is to implement the piece of code that returns the name of the latest policy
```javascript
//FYI: The function is already being called, you just need to get it to return the correct policy name
// Location: ./general/stats.js
function getLatestCreatedPolicyName() {}
```

4. From the sidebar, you can navigate to the customer view screen by click \`View Customers\` > Select a customer. This shows customers information including a list of policies they own which are currently not linked to the customers and thus not showing.

    a. Your task is to find a way to create a relationship between the customer and their policies

    ```javascript
    //FYI: Check the file to see the full class
    // Location: ./models/Customer.js
    class Customer {
        static customerIdNumberSequence = 900799;

        constructor(firstName, lastName) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.idNumber = ++Customer.customerIdNumberSequence;
            this.policies = [];
    
            allCustomersRef.value.push(this);
        }
    }
    
    // Location: ./models/Policy.js
    class Policy {
        static policyNameSequence = 299999;

        constructor(customerIdNumber = null) {
            ++Policy.policyNameSequence;
            this.policyName = "LIFINSURE" + Policy.policyNameSequence;
            this.policySequence = Policy.policyNameSequence;
    
            allPoliciesRef.value.push(this);
        }
    }
    ```
    b. Using the relationship you've created. Implement the piece of code that creates a policy and links it to the customer. This specifically takes place when the Create Policy button on the customer view is clicked.

    ```javascript
    //FYI: The function is already called, you only need to implement the code that creates and assigns policy to customer
    // Location: ./actions/createNewPolicyForCustomer.js
    function createNewPolicyForCustomer() {}
    ```