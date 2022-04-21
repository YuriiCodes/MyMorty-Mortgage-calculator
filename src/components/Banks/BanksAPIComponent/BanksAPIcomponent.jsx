import React from "react";
import Banks from "./BanksPresentationalComponent/Banks";

class BanksAPIComponent extends React.Component {

    render() {

        return (
            <>
                {/*{this.props.isFetching ? <Preloader /> : null}*/}
                <Banks banks={this.props.banks} deleteBank={this.props.deleteBank}
                       updateNewBankName={this.props.updateNewBankName} updateNewBankDescription={this.props.updateNewBankDescription}
                       updateNewBankInterestRate={this.props.updateNewBankInterestRate}
                       updateNewBankMaxLoan={this.props.updateNewBankMaxLoan}
                       updateNewBankMinDownPayment={this.props.updateNewBankMinDownPayment}
                       updateNewBankLoanTerm={this.props.updateNewBankLoanTerm}
                       addBank={this.props.addBank}

                       newBank={this.props.newBank}
                       editExistingBank={this.props.editExistingBank}

                       createBank={this.props.createBank}
                       updateBank={this.props.updateBank}
                       deleteBank={this.props.deleteBank}
                />

            </>)
    }
}

export default BanksAPIComponent;
