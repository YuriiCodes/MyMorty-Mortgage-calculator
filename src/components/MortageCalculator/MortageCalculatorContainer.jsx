import {connect} from "react-redux";
import MortageCalculator from "./MortageCalculator";
import {updateSelectedBankId} from "../../data/mortageCalculatorReducer";

const MortageCalculatorContainer = (props) => {
    return (
        <MortageCalculator
            banks={props.banks}
            updateSelectedBankId={props.updateSelectedBankId}
            selectedBankId={props.selectedBankId}
        />
    )
}
const mapStateToProps = (state) => {
    return {
        banks: state.banksInfo.banks,
        selectedBankId: state.mortageCalculator.selectedBankId
    }
}
export default connect(mapStateToProps, {updateSelectedBankId})(MortageCalculatorContainer)