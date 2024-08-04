document.addEventListener('DOMContentLoaded', () => {
    const settings = [
        'currencies', 'googleLogin', 'servicesSearch', 'paymentHistory',
        'transactionHistory', 'ticketsButton', 'apiVersion', 'affiliateSystem',
        'assignment', 'freeBalance', 'signupDiscount', 'automaticDiscountSet',
        'automaticCashback', 'massOrders', 'childPanelsSelling', 'autoLoginAfterSignup',
        'updates', 'averageTime', 'pendingOrdersDisplay'
    ];

    settings.forEach(setting => {
        const checkbox = document.getElementById(setting);
        checkbox.addEventListener('change', () => {
            console.log(`${setting} is now ${checkbox.checked ? 'enabled' : 'disabled'}`);
        });
    });
});
