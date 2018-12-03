import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { compose } from 'redux'
import _ from 'lodash'
import connect from 'react-redux/es/connect/connect'
import { withStyles } from '@material-ui/core/styles'
import FormControl from '@material-ui/core/FormControl'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Layout from '../components/Layout'
import { Mutation } from 'react-apollo'
import { userInfoData } from '../actions/';
import { USER_GET_POFILE, USER_UPDATE_PROFILE } from '../helper/query'
import TextField from '@material-ui/core/TextField';
import { Query } from 'react-apollo';
import { Redirect } from 'react-router-dom';

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
        this.sei = React.createRef();
        this.mei = React.createRef();
        this.seiKana = React.createRef();
        this.meiKana = React.createRef();
        this.phoneNumber = React.createRef();
    }

    componentDidMount() {
        this.props.userInfoData()
    }

    handleChange = name => event => {
        this.setState({ [name]: event.target.value })
    };

    setProfile() {
        return(
            <Query query={USER_GET_POFILE}>
                {({ data, loading }) => {
                    if (loading) {
                        return "Now Loading...";
                    }
                    return(
                        <React.Fragment>
                            <table class="table userEdit">
                                <tr>
                                    <th>氏名(姓)</th>
                                    <td><input name="sei" label="sei" class="textField" type="text" defaultValue={data.show.sei} ref={this.sei} /></td>
                                </tr>
                                <tr>
                                    <th>氏名(名)</th>
                                    <td><input name="mei" label="mei" class="textField" type="text" defaultValue={ data.show.mei } ref={this.mei} /></td>
                                </tr>
                                <tr>
                                    <th>フリガナ(姓)</th>
                                    <td><input name="seiKana" label="seiKana" class="textField" type="text" defaultValue={ data.show.seiKana } ref={this.seiKana} /></td>
                                </tr>
                                <tr>
                                    <th>フリガナ(名)</th>
                                    <td><input name="meiKana" label="meiKana" class="textField" type="text" defaultValue={ data.show.meiKana } ref={this.meiKana} /></td>                
                                </tr>
                                <tr>
                                    <th>電話番号</th>
                                    <td><input name="phoneNumber" label="phoneNumber" class="textField" type="text" defaultValue={ data.show.phoneNumber } ref={this.phoneNumber} /></td>                
                                </tr>
                            </table>
                        </React.Fragment>
                    )
                }}
            </Query>
            
        )
    }

    render() {
        const { classes } = this.props;

        return (
            <Mutation mutation={USER_UPDATE_PROFILE}>
                {(update) => (
                    <Layout>
                        <h2>お客様情報</h2>   
                        <form className={classes.textCenter} action="/account/thanks"　onSubmit={e => {
                                e.preventDefault();
                                update({ variables: { 
                                    sei: this.sei.current.value,
                                    mei: this.mei.current.value,
                                    seiKana: this.seiKana.current.value,
                                    meiKana: this.meiKana.current.value,
                                    phoneNumber: this.phoneNumber.current.value
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