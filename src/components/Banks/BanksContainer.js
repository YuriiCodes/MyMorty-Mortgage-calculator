import {connect} from "react-redux";
import Banks from "./Banks";
import {
    addBank,
    deleteBank,
    getBanks,
    updateNewBankDescription,
    updateNewBankInterestRate, updateNewBankLoanTerm, updateNewBankMaxLoan, updateNewBankMinDownPayment,
    updateNewBankName
} from "../../data/banksReducer";


const BanksContainer = (props) => {


    return (
        <Banks banks={props.banks} deleteBank={props.deleteBank}
               updateNewBankName={props.updateNewBankName} updateNewBankDescription={props.updateNewBankDescription}
               updateNewBankInterestRate={props.updateNewBankInterestRate}
               updateNewBankMaxLoan={props.updateNewBankMaxLoan}
               updateNewBankMinDownPayment={props.updateNewBankMinDownPayment}
               updateNewBankLoanTerm={props.updateNewBankLoanTerm}
               addBank={props.addBank}
               newBankName={props.newBankName}

        />
    )
}
let mapStateToProps = (state) => {
    return {
        banks: state.banksInfo.banks,
        latestBankId: state.banksInfo.banks[state.banksInfo.banks.length - 1].id,
        newBankName: state.banksInfo.newBankName,
    }
}

export default connect(mapStateToProps, {
    getBanks,
    deleteBank,
    updateNewBankName,
    updateNewBankInterestRate,
    updateNewBankMaxLoan,
    updateNewBankMinDownPayment,
    updateNewBankLoanTerm,
    addBank
})(BanksContainer);