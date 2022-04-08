
const UPDATE_SELECTED_BANK_ID = 'UPDATE_SELECTED_BANK_ID';
let initialState = {
    selectedBankId: 0
};

const mortageCalculatorReducer = (state = initialState, action) => {
    switch (action.type) {

        case UPDATE_SELECTED_BANK_ID:
            return {
                ...state,
                selectedBankId: action.selectedBankId
            };
        default:
            return state;
    }
};

export const updateSelectedBankId = (selectedBankId) => ({
    type: UPDATE_SELECTED_BANK_ID,
    selectedBankId
});


export default mortageCalculatorReducer;