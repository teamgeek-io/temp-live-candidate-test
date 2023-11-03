const { createApp, ref, computed, watch } = Vue;

const caseShown = ref(null);
const customerShown = ref(null);
const policyShown = ref(null);
const caseNumberInput = ref('');
const showTestInstructionsFlag = ref(false);
const activeView = ref('dashboardView');
const allPoliciesRef = ref([]);
const allCustomersRef = ref([]);
const allCasesRef = ref([]);

const toastMessage = ref(null);

// Load initial data
const c1 = Customer.createCustomer('Lerato', 'Makoti');
const p1 = new Policy(c1.idNumber);
Case.createCase(Case.INCREASE_COVER_TYPE, p1);

const c2 = Customer.createCustomer('Piet', 'Van Skoenan');
const p2 = new Policy(c2.idNumber);
Case.createCase(Case.DECREASE_COVER_TYPE, p2);

const c3 = Customer.createCustomer('Sipho', 'Sithole');
const p3 = new Policy(c3.idNumber);
Case.createCase(Case.CANCEL_COVER_TYPE, p3);
// Load end

const lastCreatedPolicyName = computed(() => {
    return getLatestCreatedPolicyName();
});

const totalNumOfIncreaseCoverCases = computed(() => {
    return getTotalNumOfIncreaseCoverCases();
});

const totalNumOfDecreaseCoverCases = computed(() => {
    return getTotalNumOfDecreaseCoverCases();
});

const totalNumOfCancelCoverCases = computed(() => {
    return getTotalNumOfCancelCoverCases();
});

watch(activeView, async (currentView, previousView) => {
    if (previousView == 'customerView' && customerShown.value) {
        customerShown.value.unloadPolicies();
    }
});

let app = createApp({
    setup() {
        return {
            caseShown,
            customerShown,
            policyShown,
            showTestInstructionsFlag,
            toastMessage,
            showCase,
            showCases,
            showDashboard,
            showCustomers,
            showCustomer,
            showPolicy,
            showPolicies,
            createNewPolicy,
            toggleShowTestInstructions,
            createIncreaseCaseForPolicy,
            createDecreaseCaseForPolicy,
            createCancelCaseForPolicy,
            createNewPolicyForCustomer,
            showToastMessage,
            caseNumberInput,
            allCasesRef,
            allPoliciesRef,
            allCustomersRef,
            findAndShowCase,
            lastCreatedPolicyName,
            totalNumOfIncreaseCoverCases,
            totalNumOfDecreaseCoverCases,
            totalNumOfCancelCoverCases,
            activeView
        };
    }
}).mount('#app');
