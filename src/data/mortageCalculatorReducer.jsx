const UPDATE_SELECTED_BANK_ID = 'UPDATE_SELECTED_BANK_ID';
const TOGGLE_IS_MONTHLY_PAYMENT_AVAILABLE = 'TOGGLE_IS_MONTHLY_PAYMENT_AVAILABLE';
const UPDATE_MONTHLY_PAYMENT = 'UPDATE_MONTHLY_PAYMENT';
let initialState = {
    selectedBankId: 0,
    isMonthlyPaymentAvaliable: false,
    monthlyPayment:0,
};

const mortageCalculatorReducer = (state = initialState, action) => {
    switch (action.type) {

        case UPDATE_SELECTED_BANK_ID:
            return {
                ...state,
                selectedBankId: action.selectedBankId
            };
            case TOGGLE_IS_MONTHLY_PAYMENT_AVAILABLE:
                return {
                    ...state,
                    isMonthlyPaymentAvaliable: action.isMonthlyPaymentAvaliable
                };
                case UPDATE_MONTHLY_PAYMENT:
                    return {
                        ...state,
                        monthlyPayment: action.monthlyPayment
                    };
        default:
            return state;
    }
};

export const updateSelectedBankId = (selectedBankId) => ({
    type: UPDATE_SELECTED_BANK_ID,
    selectedBankId
});
export const toggleIsMonthlyPaymentAvaliable = (isMonthlyPaymentAvaliable) => ({
    type: TOGGLE_IS_MONTHLY_PAYMENT_AVAILABLE,
    isMonthlyPaymentAvaliable
});
export  const updateMonthlyPayment = (monthlyPayment) => ({
    type: UPDATE_MONTHLY_PAYMENT,
    monthlyPayment
});

export default mortageCalculatorReducer;