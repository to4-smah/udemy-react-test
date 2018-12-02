import React from 'react';
import PropTypes from 'prop-types'
import { Field, reduxForm } from 'redux-form'
import { withStyles } from '@material-ui/core/styles'
import FormControl from '@material-ui/core/FormControl'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Layout from '../components/Layout'
import TextField from "@material-ui/core/TextField/TextField"
import { compose } from "redux";
import connect from "react-redux/es/connect/connect"
import { Mutation } from "react-apollo"
import { USER_UPDATE_PROFILE } from '../helper/query'
import ApolloClient from 'apollo-boost'

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
})

class AccountConfirm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            sei: '',
            mei: '',
            seiKana: '',
            meiKana: '',
            submitted: false,
            loading: false,
        }

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    renderField(field) {
        const { input, label, type } = field

        if(type == "hidden") {
            return ( <TextField type={type} {...input} /> )
        } else {
            return (
                <TextField
                    hintText={label}
                    floatingLabelText={label}
                    type={type}
                    {...input}
                    fullWidth={true}
                    disabled={true}
                />
            )
        }
    }

    handleSubmit(e) {
        e.preventDefault()

        this.setState({ submitted: true })
    }

    render() {
        const { previousPage, classes } = this.props;
        const { submitted, loading } = this.state

        return (
            <Layout>
                <h2>お客様情報確認</h2>
                <form className={classes.textCenter} onSubmit={this.handleSubmit}>
                    <FormControl class="formControl">
                        <Card className="list listAccount">
                            <CardContent>
                                <table class="table accountFrom">
                                    <tr>
                                        <th>氏名</th>
                                        <td>
                                            <Field label="sei" name="sei" type="text" component={this.renderField} />
                                            <Field label="mei" name="mei" type="text" component={this.renderField} />
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>フリガナ</th>
                                        <td>
                                            <Field label="seiKana" name="seiKana" type="text" component={this.renderField} />
                                            <Field label="meiKana" name="meiKana" type="text" component={this.renderField} />
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>メールアドレス</th>
                                        <td><Field label="email" name="email" type="text" component={this.renderField} /></td>
                                    </tr>
                                    <tr>
                                        <th>電話番号</th>
                                        <td><Field label="phoneNumber" name="phoneNumber" type="text" component={this.renderField} /></td>
                                    </tr>
                                    {/*<tr>*/}
                                    {/*<th>郵便番号</th>*/}
                                    {/*<td><Field label="zipCode" name="zipCode" type="text" component={this.renderField} /></td>*/}
                                    {/*</tr>*/}
                                    {/*<tr>*/}
                                    {/*<th>住所</th>*/}
                                    {/*<td>*/}
                                    {/*<Field label="todouhuken" name="todouhuken" type="text" component={this.renderField} />*/}
                                    {/*<Field label="sikuchouson" name="sikuchouson" type="text" component={this.renderField} />*/}
                                    {/*<Field label="tatemono" name="tatemono" type="text" component={this.renderField} />*/}
                                    {/*<Field label="tikubanchi" name="tikubanchi" type="text" component={this.renderField} />*/}
                                    {/*</td>*/}
                                    {/*</tr>*/}
                                    {/*<tr>*/}
                                    {/*<th>住居タイプ</th>*/}
                                    {/*<td><Field label="residenceType" name="residenceType" type="text" component={this.renderField} /></td>*/}
                                    {/*</tr>*/}
                                    {/*<tr>*/}
                                    {/*<th>駐車場</th>*/}
                                    {/*<td><Field label="parkingType" name="parkingType" type="text" component={this.renderField} /></td>*/}
                                    {/*</tr>*/}
                                </table>
                                
                                <Field name="zipCode" type="hidden" component={this.renderField} />
                                <Field name="todouhuken" type="hidden" component={this.renderField} />
                                <Field name="sikuchouson" type="hidden" component={this.renderField} />
                                <Field name="tatemono" type="hidden" component={this.renderField} />
                                <Field name="tikubanchi" type="hidden" component={this.renderField} />
                                <Field name="residenceType" type="hidden" component={this.renderField} />
                                <Field name="parkingType" type="hidden" component={this.renderField} />
                            </CardContent>
                        </Card>
                    </FormControl>
                </form>

                <Mutation mutation={USER_UPDATE_PROFILE}>
                    <form className={classes.textCenter}>
                        <Field name="sei" type="hidden" component={this.renderField} />
                        <Field name="mei" type="hidden" component={this.renderField} />
                        <Field name="seiKana" type="hidden" component={this.renderField} />
                        <Field name="meiKana" type="hidden" component={this.renderField} />
                        <Field name="email" type="hidden" component={this.renderField} />
                        <Field name="phoneNumber" type="hidden" component={this.renderField} />
                        <div class="blankArea textCenter flexibleBoxAround">
                            <Button type="button" className={classes.button} class="label labelSecondary" onClick={previousPage}>入力をやり直す</Button>
                            <Button type={'submit'} className={classes.button} class="label labelSuccess">送信する</Button>
                        </div>
                    </form>
                </Mutation>
            </Layout>
        );
    }
}

AccountConfirm.propTypes = {
    classes: PropTypes.object.isRequired,
}

const mapDispatchToProps = ({})

export default compose(
        withStyles(styles),
        connect(null, mapDispatchToProps
    ))(
        reduxForm({
            form: 'userUpdateForm',
            enableReinitialize: true,
            destroyOnUnmount: false,
            keepDirtyOnReinitialize: true
        })
    (AccountConfirm)
)