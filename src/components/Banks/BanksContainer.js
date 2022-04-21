import {connect} from "react-redux";
import Banks from "./BanksAPIComponent/BanksPresentationalComponent/Banks";
import {
    addBank,
    deleteBank, editExistingBank,
    updateNewBankInterestRate, updateNewBankLoanTerm, updateNewBankMaxLoan, updateNewBankMinDownPayment,
    updateNewBankName, getBanksThunkCreator, createBankThunkCreator, updateBankThunkCreator, deleteBankThunkCreator
} from "../../data/banksReducer";
import BanksAPIComponent from "./BanksAPIComponent/BanksAPIcomponent";


const BanksContainer = (props) => {

    return (
        <BanksAPIComponent banks={props.banks} deleteBank={props.deleteBank}
                           updateNewBankName={props.updateNewBankName}
                           updateNewBankDescription={props.updateNewBankDescription}
                           updateNewBankInterestRate={props.updateNewBankInterestRate}
                           updateNewBankMaxLoan={props.updateNewBankMaxLoan}
                           updateNewBankMinDownPayment={props.updateNewBankMinDownPayment}
                           updateNewBankLoanTerm={props.updateNewBankLoanTerm}
                           addBank={props.addBank}

                           newBank={props.newBank}
                           editExistingBank={props.editExistingBank}

                           getBanks={props.getBanks}
                           createBank={props.createBank}
                           updateBank={props.updateBank}

        />
    )
}
let mapStateToProps = (state) => {
    return {
        banks: state.banksInfo.banks,
        latestBankId: state.banksInfo.banks[state.banksInfo.banks.length - 1]._id,
        newBank: state.banksInfo.newBank,
    }
}

export default connect(mapStateToProps, {
    // deleteBank,
    updateNewBankName,
    updateNewBankInterestRate,
    updateNewBankMaxLoan,
    updateNewBankMinDownPayment,
    updateNewBankLoanTerm,
    addBank,
    editExistingBank,

    getBanks: getBanksThunkCreator,
    createBank: createBankThunkCreator,
    updateBank: updateBankThunkCreator,
    deleteBank: deleteBankThunkCreator
})(BanksContainer);