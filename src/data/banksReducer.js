import {bankAPI} from '../api/api';

const DELETE_BANK = 'DELETE_BANK';
const UPDATE_NEW_BANK_NAME = 'UPDATE_NEW_BANK_NAME';
const UPDATE_NEW_BANK_INTEREST_RATE = 'UPDATE_NEW_BANK_INTEREST_RATE';
const UPDATE_NEW_BANK_MAX_LOAN = 'UPDATE_NEW_BANK_MAX_LOAN';
const UPDATE_NEW_BANK_MIN_DOWN_PAYMENT = 'UPDATE_NEW_BANK_MIN_DOWN_PAYMENT';
const UPDATE_NEW_BANK_LOAN_TERM = 'UPDATE_NEW_BANK_LOAN_TERM';
const ADD_BANK = 'ADD_BANK';
const EDIT_EXISTING_BANK = 'EDIT_EXISTING_BANK';

const SET_BANKS = 'SET_BANKS';


/*
* interestRate: 0.8
loanTerm: 12
maxLoan: 8000000
minDownPayment: 5100
name: "Mono"
__v: 0
_id: "625ef320d4cfc629825cec5b"
* */
let initialState = {
    banks: [
        // Default bank that user can't delete.
        {
            id: "625ef01d6e187a99202d531b",
            name: "LLoyd's bank",
            interestRate: 0.5,
            maxLoan: 1000000,
            minDownPayment: 100,
            loanTerm: 12,
        },
    ],
    newBank: {
        id: null,
        name: "",
        interestRate: "",
        maxLoan: "",
        minDownPayment: "",
        loanTerm: "",
    }
};

const banksReducer = (state = initialState, action) => {
    switch (action.type) {
        case DELETE_BANK:
            return {
                ...state, banks: state.banks.filter(bank => bank._id !== action.bankId)
            };
        case UPDATE_NEW_BANK_NAME:
            return {
                ...state, newBank: {
                    ...state.newBank,
                    name: action.name
                }
            };
        case UPDATE_NEW_BANK_INTEREST_RATE:
            return {
                ...state, newBank: {
                    ...state.newBank,
                    interestRate: action.interestRate
                }
            }
        case UPDATE_NEW_BANK_MAX_LOAN:
            return {
                ...state, newBank: {
                    ...state.newBank,
                    maxLoan: action.maxLoan
                }
            }
        case UPDATE_NEW_BANK_MIN_DOWN_PAYMENT:
            return {
                ...state, newBank: {
                    ...state.newBank,
                    minDownPayment: action.minDownPayment
                }
            }
        case UPDATE_NEW_BANK_LOAN_TERM:
            return {
                ...state, newBank: {
                    ...state.newBank,
                    loanTerm: action.loanTerm
                }
            }
        case ADD_BANK:
            state.newBank.id = action.bankId;
            return {
                ...state, banks: [...state.banks, state.newBank], newBank: {
                    _id: null,
                    name: "",
                    interestRate: "",
                    maxLoan: "",
                    minDownPayment: "",
                    loanTerm: "",
                    logo: ""
                }
            };
        case EDIT_EXISTING_BANK:
            return {
                ...state, banks: state.banks.map(bank => {
                    if (bank._id === action.bankId) {
                        return {
                            ...bank,
                            name: action.name,
                            interestRate: action.interestRate,
                            maxLoan: action.maxLoan,
                            minDownPayment: action.minDownPayment,
                            loanTerm: action.loanTerm
                        }
                    } else {
                        return bank;
                    }
                })
            };
        case SET_BANKS:
            //convert action.banks to array, change _id to id (to convert from mongo id to normal id)
            return {
                ...state, banks: action.banks.map(bank => {
                    return {
                        ...bank,
                        id: bank._id
                    }
                })
            };
        default:
            return state;
    }
};

export default banksReducer;


//action creators
export const deleteBank = (bankId) => {
    if (bankId === initialState.banks[0].id){
        alert("This bank is default and cannot be deleted");
        return;
    }
    return {
        type: DELETE_BANK,
        bankId
    };
};
export const updateNewBankName = (name) => {
    return {
        type: UPDATE_NEW_BANK_NAME,
        name
    };
};

export const updateNewBankInterestRate = (interestRate) => {
    return {
        type: UPDATE_NEW_BANK_INTEREST_RATE,
        interestRate
    }
}

export const updateNewBankMaxLoan = (maxLoan) => {
    return {
        type: UPDATE_NEW_BANK_MAX_LOAN,
        maxLoan
    }
}
export const updateNewBankMinDownPayment = (minDownPayment) => {
    return {
        type: UPDATE_NEW_BANK_MIN_DOWN_PAYMENT,
        minDownPayment
    }
}
export const updateNewBankLoanTerm = (loanTerm) => {
    return {
        type: UPDATE_NEW_BANK_LOAN_TERM,
        loanTerm
    }
}
export const addBank = (bankId) => {
    return {
        type: ADD_BANK,
        bankId
    };
};
export const editExistingBank = (bankId, name, interestRate, maxLoan, minDownPayment, loanTerm) => {
    return {
        type: EDIT_EXISTING_BANK,
        bankId,
        name,
        interestRate,
        maxLoan,
        minDownPayment,
        loanTerm
    };
};
export const setBanks = (banks) => {
    return {
        type: SET_BANKS,
        banks
    };
};








//thunks
export const getBanksThunkCreator = () => {
    return  (dispatch) => {
        bankAPI.getAll().then(data => {
            dispatch(setBanks(data))
        })
    }
};

export const createBankThunkCreator = (newBank) => {
    debugger;
    return (dispatch) => {
        bankAPI.create(newBank).then(data => {
            console.log(data)
            dispatch(addBank(data._id));
        })
    }
};

export const updateBankThunkCreator = (updatedBank) => {
    debugger;
    return (dispatch) => {
        bankAPI.update(updatedBank).then(data => {
            dispatch(editExistingBank(updatedBank._id, updatedBank.name, updatedBank.interestRate, updatedBank.maxLoan, updatedBank.minDownPayment, updatedBank.loanTerm));
        })
    }
};

export const deleteBankThunkCreator = (bankId) => {
    return (dispatch) => {
        bankAPI.delete(bankId).then(data => {
            dispatch(deleteBank(bankId));
        })
    }
}