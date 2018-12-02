import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { compose } from 'redux'
import _ from 'lodash'
import connect from 'react-redux/es/connect/connect'
import Time from 'react-time-format'
import { withStyles } from '@material-ui/core/styles'
import Input from '@material-ui/core/Input'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import PhoneIcon from '@material-ui/icons/Phone'
import MailOutlineIcon from '@material-ui/icons/MailOutline'
import Hidden from '@material-ui/core/Hidden'
import Layout from '../components/Layout'
import { Mutation } from 'react-apollo'
import { limitTime, getWeekName } from '../helper'
import { userInfoData } from '../actions/';
import { USER_UPDATE_PROFILE } from '../helper/query'
import TextField from '@material-ui/core/TextField';

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
    width300px: {
        width: '300px',
    },
});

class AccountEdit extends Component {

    constructor(props) {
        super(props)
        this.state = {
            sei: '',
            mei: '',
            seiKana: '',
            meiKana: '',
            email: '',
            phoneNumber: '',
            zipCode: '',
            todouhuken: '',
            sikuchouson: '',
            tatemono: '',
            tikubanchi: '',
            residenceType: '',
            parkingType: '',
        };
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        this.props.userInfoData()
    }

    handleChange = name => event => {
        this.setState({ [name]: event.target.value })
    };

    setProfile() {

        const { user } = this.props;
        return(
            <table class="table">
                <tr>
                    <th>氏名(姓)</th>
                    <td>
                        <TextField
                            name="sei"
                            label="sei"
                            class="textField"
                            type="text"
                            value={ this.state.sei ? this.state.sei : user.sei }
                            onChange={this.handleChange('sei')}
                        />
                    </td>
                </tr>
                <tr>
                    <th>氏名(名)</th>
                    <td>
                        <TextField
                            name="mei"
                            label="mei"
                            class="textField"
                            type="text"
                            value={ this.state.mei ? this.state.mei : user.mei }
                            onChange={this.handleChange('mei')}
                        />
                    </td>
                </tr>
                <tr>
                    <th>フリガナ(姓)</th>
                    <td>
                        <TextField
                            name="seiKana"
                            label="seiKana"
                            class="textField"
                            type="text"
                            value={ this.state.seiKana ? this.state.seiKana : user.seiKana }
                            onChange={this.handleChange('seiKana')}
                        />
                    </td>
                </tr>
                <tr>
                    <th>フリガナ(名)</th>
                    <td>
                        <TextField
                            name="meiKana"
                            label="meiKana"
                            class="textField"
                            type="text"
                            value={ this.state.meiKana ? this.state.meiKana : user.meiKana }
                            onChange={this.handleChange('meiKana')}
                        />
                    </td>                
                </tr>
            </table>
        )
    }


    render() {
        const { classes } = this.props;

        return (
            <Mutation mutation={USER_UPDATE_PROFILE}>
                {(update, { data }) => (
                    <Layout>
                        <h2>お客様情報</h2>   
                        <form className={classes.textCenter}　onSubmit={e => {
                                e.preventDefault();
                                update({ variables: { 
                                    sei: this.state.sei,
                                    mei: this.state.mei,
                                    seiKana: this.state.seiKana,
                                    meiKana: this.state.meiKana,
                                    phoneNumber: this.state.phoneNumber,
                                    email: this.state.email
                                 } });
                            }}>
                            <FormControl class="formControl">
                                <Card className="list listAccount">
                                    <CardContent>
                                        {this.setProfile()}
                                    </CardContent>
                                </Card>
                                <div class="blankArea textCenter">
                                    <Button type={'submit'} className={classes.button} class="label labelSuccess">確認する</Button>
                                </div>
                            </FormControl>
                        </form>
                    </Layout>
                )}
            </Mutation>
        )
    }
}

AccountEdit.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateProps = (state) => {
    const addresses = state.events.addresses ? state.events.addresses[0] : '';
    const user = {
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

    return { user: user }
 }

const mapDispatchProps = ({ userInfoData })

export default compose(
    withStyles(styles),
    connect(mapStateProps, mapDispatchProps)
)(AccountEdit)