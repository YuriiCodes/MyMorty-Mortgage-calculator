import {connect} from "react-redux";
import MortageCalculator from "./MortageCalculator";
import {
    toggleIsMonthlyPaymentAvaliable,
    updateMonthlyPayment,
    updateSelectedBankId
} from "../../data/mortageCalculatorReducer";

const MortageCalculatorContainer = (props) => {
    return (
        <MortageCalculator
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
export default connect(mapStateToProps, {updateSelectedBankId, toggleIsMonthlyPaymentAvaliable, updateMonthlyPayment})(MortageCalculatorContainer)