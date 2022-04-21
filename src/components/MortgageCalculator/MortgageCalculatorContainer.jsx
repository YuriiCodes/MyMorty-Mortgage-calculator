import {connect} from "react-redux";
import MortgageCalculator from "./MortgageCalculator";
import {
    toggleIsMonthlyPaymentAvaliable,
    updateMonthlyPayment,
    updateSelectedBankId
} from "../../data/mortgageCalculatorReducer";

const MortgageCalculatorContainer = (props) => {
    return (
        <MortgageCalculator
            banks={props.banks}
            updateSelectedBankId={props.updateSelectedBankId}
            selectedBankId={props.selectedBankId}
            isMonthlyPaymentAvaliable={props.isMonthlyPaymentAvaliable}
            updateMonthlyPayment={props.updateMonthlyPayment}
            toggleIsMonthlyPaymentAvaliable={props.toggleIsMonthlyPaymentAvaliable}
            monthlyPayment={props.monthlyPayment}
        />
    )
}
const mapStateToProps = (state) => {
    return {
        banks: state.banksInfo.banks,
        selectedBankId: state.mortageCalculator.selectedBankId,
        isMonthlyPaymentAvaliable: state.mortageCalculator.isMonthlyPaymentAvaliable,
        monthlyPayment: state.mortageCalculator.monthlyPayment
    }
}
export default connect(mapStateToProps, {updateSelectedBankId, toggleIsMonthlyPaymentAvaliable, updateMonthlyPayment})(MortgageCalculatorContainer)