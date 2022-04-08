
const GET_BANKS = 'GET_BANKS';
const DELETE_BANK = 'DELETE_BANK';
const UPDATE_NEW_BANK_NAME = 'UPDATE_NEW_BANK_NAME';
const UPDATE_NEW_BANK_DESCRIPTION = 'UPDATE_NEW_BANK_DESCRIPTION';
const UPDATE_NEW_BANK_INTEREST_RATE = 'UPDATE_NEW_BANK_INTEREST_RATE';
const UPDATE_NEW_BANK_MAX_LOAN = 'UPDATE_NEW_BANK_MAX_LOAN';
const UPDATE_NEW_BANK_MIN_DOWN_PAYMENT = 'UPDATE_NEW_BANK_MIN_DOWN_PAYMENT';
const UPDATE_NEW_BANK_LOAN_TERM = 'UPDATE_NEW_BANK_LOAN_TERM';
const UPDATE_NEW_BANK_LOGO = 'UPDATE_NEW_BANK_LOGO';
const ADD_BANK = 'ADD_BANK';

let initialState = {
    banks: [
        {
            id: 0,
            name: "LLoyd's bank",
            logo: "https://is2-ssl.mzstatic.com/image/thumb/Purple126/v4/34/95/a4/3495a487-4330-1251-fcf5-7e9db1055baf/AppIcon-1x_U007emarketing-0-7-0-85-220.png/1200x630wa.png",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
            interestRate: "0.5",
            maxLoan: "1000000",
            minDownPayment: "100",
            loanTerm: "12",
        },
        {
            id: 1,
            name: "JPMorgan Chase",
            logo: "https://logos-world.net/wp-content/uploads/2021/02/JP-Morgan-Chase-Logo.png",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
            interestRate: "0.4",
            maxLoan: "700000",
            minDownPayment: "40000",
            loanTerm: "12",
        },
        {
            id: 2,
            name: "Citigroup",
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Citi.svg/1200px-Citi.svg.png",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
            interestRate: "0.6",
            maxLoan: "2000000",
            minDownPayment: "80000",
            loanTerm: "23",
        }
    ],
    newBank: {
        id: null,
        name: "",
        description: "",
        interestRate: "",
        maxLoan: "",
        minDownPayment: "",
        loanTerm: "",
        logo: ""
    }
};

const banksReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_BANKS:
            return {
                ...state
            };
        case DELETE_BANK:
            return {
                ...state, banks: state.banks.filter(bank => bank.id !== action.bankId)
            };
        case UPDATE_NEW_BANK_NAME:
            return {
                ...state, newBank: {
                    ...state.newBank,
                    name: action.name
                }
            };
            case UPDATE_NEW_BANK_DESCRIPTION:
            return {
                ...state, newBank: {
                    ...state.newBank,
                    description: action.description
                }
            };
        case UPDATE_NEW_BANK_INTEREST_RATE:
            return{
                ...state, newBank: {
                    ...state.newBank,
                    interestRate: action.interestRate
                }
            }
        case UPDATE_NEW_BANK_MAX_LOAN:
            return{
                ...state, newBank: {
                    ...state.newBank,
                    maxLoan: action.maxLoan
                }
            }
        case UPDATE_NEW_BANK_MIN_DOWN_PAYMENT:
            return{
                ...state, newBank: {
                    ...state.newBank,
                    minDownPayment: action.minDownPayment
                }
            }
        case UPDATE_NEW_BANK_LOAN_TERM:
            return{
                ...state, newBank: {
                    ...state.newBank,
                    loanTerm: action.loanTerm
                }
            }
        case ADD_BANK:
            state.newBank.id = state.banks.length;
            return {
                ...state, banks: [...state.banks, state.newBank], newBank: {
                    id: null,
                    name: "",
                    description: "",
                    interestRate: "",
                    maxLoan: "",
                    minDownPayment: "",
                    loanTerm: "",
                    logo: ""
                }
            };
        default:
            return state;
    }
};

export default banksReducer;
export const getBanks = () => {
    return {
        type: GET_BANKS
    };
};
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
export const updateNewBankDescription = (description) => {
    return {
        type: UPDATE_NEW_BANK_DESCRIPTION,
        description
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