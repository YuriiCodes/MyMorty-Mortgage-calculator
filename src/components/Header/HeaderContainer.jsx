import {connect} from "react-redux";
import Header from "./Header";
import React from "react";

import {
    getBanksThunkCreator
} from "../../data/banksReducer";

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.getBanks();
    }

    render() {
        return <Header />
    }
}

let mapStateToProps = () => {
    return {}
};


export default connect(mapStateToProps, {
    getBanks: getBanksThunkCreator
})(HeaderContainer);