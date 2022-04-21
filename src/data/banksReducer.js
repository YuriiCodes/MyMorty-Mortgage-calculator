import {bankAPI} from '../api/api';

const GET_BANKS = 'GET_BANKS';
const DELETE_BANK = 'DELETE_BANK';
const UPDATE_NEW_BANK_NAME = 'UPDATE_NEW_BANK_NAME';
const UPDATE_NEW_BANK_INTEREST_RATE = 'UPDATE_NEW_BANK_INTEREST_RATE';
const UPDATE_NEW_BANK_MAX_LOAN = 'UPDATE_NEW_BANK_MAX_LOAN';
const UPDATE_NEW_BANK_MIN_DOWN_PAYMENT = 'UPDATE_NEW_BANK_MIN_DOWN_PAYMENT';
const UPDATE_NEW_BANK_LOAN_TERM = 'UPDATE_NEW_BANK_LOAN_TERM';
const ADD_BANK = 'ADD_BANK';
const EDIT_EXISTING_BANK = 'EDIT_EXISTING_BANK';

const SET_BANKS = 'SET_BANKS';
const UPDATE_BANK = 'UPDATE_BANK';


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
        {
            id: 0,
            name: "LLoyd's bank",
            interestRate: 0.5,
            maxLoan: 1000000,
            minDownPayment: 100,
            loanTerm: 12,
        },
        // {
        //     id: 1,
        //     name: "JPMorgan Chase",
        //     interestRate: 0.4,
        //     maxLoan: 700000,
        //     minDownPayment: 40000,
        //     loanTerm: 12,
        // },
        // {
        //     id: 2,
        //     name: "Citigroup",
        //     interestRate: 0.6,
        //     maxLoan: 2000000,
        //     minDownPayment: 80000,
        //     loanTerm: 23,
        // }
    ],
    newBank: {
        id: null,
        name: "",
        interestRate: 0,
        maxLoan: 0,
        minDownPayment: 0,
        loanTerm: 0,
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
            state.newBank._id = state.banks.length;
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
export const deleteBank = (bankId) => {
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
export const addBank = () => {
    return {
        type: ADD_BANK
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

export const getBanksThunkCreator = () => {
    return  (dispatch) => {
        bankAPI.getAll().then(data => {
            dispatch(setBanks(data))
        })
    }
};

export const createBankThunkCreator = (newBank) => {
    return (dispatch, newBank) => {
        bankAPI.create(newBank).then(data => {
            dispatch(addBank());
        })
    }
};