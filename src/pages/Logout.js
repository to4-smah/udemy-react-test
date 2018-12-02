import React from 'react';
import { Redirect } from 'react-router-dom';
import { withStyles } from "@material-ui/core";
import { logoutSuccess } from "../actions";
import { compose } from "redux";
import connect from "react-redux/es/connect/connect";

const styles = theme => ({});

class Logout extends React.Component {
    componentDidMount() {
        this.props.logoutSuccess()
    }

    render() {
        return (
            <Redirect to={'/'} />
        )
    }
}

const mapStateProps = state => ({})
const mapDispatchProps = ({ logoutSuccess })
export default compose(
    withStyles(styles),
    connect(mapStateProps, mapDispatchProps),
)(Logout)