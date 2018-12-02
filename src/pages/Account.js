import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Layout from '../components/Layout';
import { userInfoData } from '../actions';

const styles = theme => ({
    margin: {
        margin: theme.spacing.unit,
    },
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing.unit * 2,
    },
    card: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        marginBottom: 16,
        fontSize: 24,
        marginTop: 10,
    },
    marginTop12: {
        marginTop: 12,
    },
    limit: {
        fontWeight: 'bold',
    },

});

class Account extends React.Component {
    componentDidMount() {
        this.props.userInfoData()
    }

    userInfoResult() {
        const { events } = this.props;

        return (
            <table class="table">
                <tr><th>氏名</th><td>{ events.sei && events.sei } { events.mei && events.mei }</td></tr>
                <tr><th>フリガナ</th><td>{ events.seiKana && events.seiKana } { events.meiKana && events.meiKana }</td></tr>
                <tr><th>メールアドレス</th><td>{ events.email && events.email }</td></tr>
                <tr><th>電話番号</th><td>{ events.phoneNumber && events.phoneNumber }</td></tr>
                <tr><th>郵便番号</th><td>{ events.zipCode && events.zipCode }</td></tr>
                <tr>
                    <th>住所</th>
                    <td>
                        { events.todouhuken && events.todouhuken }
                        { events.sikuchouson && events.sikuchouson }
                        { events.tatemono && events.tatemono }
                        { events.tikubanchi && events.tikubanchi }
                    </td>
                </tr>
                <tr><th>住居タイプ</th><td>{ events.residenceType && events.residenceType }</td></tr>
                <tr><th>駐車場</th><td>{ events.parkingType && events.parkingType }</td></tr>
            </table>
        )
    }

    render() {
        const { classes } = this.props;

        return (
            <Layout>
                <h2>お客様情報</h2>
                <form autoComplete="off">
                </form>
                <Card className="list listAccount">
                    <CardContent>
                        { this.userInfoResult() }
                    </CardContent>
                </Card>
                <div class="blankArea textCenter">
                    <Button href={"/account/edit"} className={classes.button} class="label labelSuccess">情報を編集する</Button>
                </div>
            </Layout>
        );
    }
}

const mapStateProps = (state) => {
    const addresses = state.events.addresses ? state.events.addresses[0] : '';
    const events = {
        sei:           state.events.sei,
        mei:           state.events.mei,
        seiKana:       state.events.seiKana,
        meiKana:       state.events.meiKana,
        email:         state.events.email,
        phoneNumber:   state.events.phoneNumber,
        zipCode:       addresses ? state.events.addresses[0].zipCode : '',
        todouhuken:    addresses ? state.events.addresses[0].todouhuken : '',
        sikuchouson:   addresses ? state.events.addresses[0].sikuchouson : '',
        tatemono:      addresses ? state.events.addresses[0].tatemono : '',
        tikubanchi:    addresses ? state.events.addresses[0].tikubanchi : '',
        residenceType: addresses ? state.events.addresses[0].residenceType.name : '',
        parkingType:   addresses ? state.events.addresses[0].parkingType.name : '',
    }

    return { events: events }
};

const mapDispatchProps = ({ userInfoData });

export default compose(
    withStyles(styles),
    connect(mapStateProps, mapDispatchProps)
)(Account);