import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import EmailIcon from '@material-ui/icons/Email';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import { NavLink } from 'react-router-dom';
import logo from '../images/logo.svg';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import { connect } from 'react-redux';
import { userService } from '../services'
import { loginSuccess } from '../actions'
import { compose } from "redux";

const styles = theme => ({
    margin: {
        margin: theme.spacing.unit,
    },
    textCenter: {
        textAlign: 'center',
        margin: '0 auto',
    },
    width300px: {
        width: '300px',
    },
    button: {
        margin: theme.spacing.unit,
        backgroundColor: "#64B127 !important",
    },
    leftIcon: {
        marginRight: theme.spacing.unit,
    },
    rightIcon: {
        marginLeft: theme.spacing.unit,
    },
    iconSmall: {
        fontSize: 20,
    },
    mt10p: {
        marginTop: "10%",
    },
})

class Login extends React.Component {
    componentDidMount() {
        this.props.loginSuccess()
    }

    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: '',
            submitted: false,
            loading: false,
            error: ''
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e) {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    handleSubmit(e) {
        e.preventDefault()

        this.setState({ submitted: true })
        const { username, password } = this.state
        if (!(username && password)) {
            return
        }

        userService.login(username, password)
            .then(
                user => {
                    const { from } = this.props.location.state || { from: { pathname: "/Dashboard" } }
                    this.props.history.push(from)
                },
                error => this.setState({ error, loading: false })
            )
    }

    render() {
        const { username, password } = this.state

        return (
            <div className="loginContainer">
                <h1>
                    <object>
                        <img src={logo} alt="棟梁ドットコム" />
                    </object>
                </h1>
                <div className="loginBox">
                    <form autoComplete="off" onSubmit={this.handleSubmit}>
                        <h2>ログイン</h2>
                        <FormControl className="formControl">
                            <div>
                                <TextField name="username" id="input-with-icon-grid" label="ユーザー名"
                                           value={username}
                                           onChange={this.handleChange}
                                />
                            </div>
                            <div>
                                <TextField name="password" id="password-input" label="パスワード" type="password" autoComplete="current-password" margin="normal"
                                           value={password}
                                           onChange={this.handleChange}
                                />
                            </div>
                            <div className="submitArea">
                                <Button size="large" variant="contained" color="primary" type={'submit'}>
                                    ログイン
                                </Button>
                            </div>
                        </FormControl>
                    </form>
                    <a href="/forgot">パスワードをお忘れの方</a>
                </div>
                <footer>
                    <small>&copy;棟梁ドットコム All rights reserved.</small>
                </footer>
            </div>
        )
    }
}

const mapStateProps = state => ({})
const mapDispatchProps = ({ loginSuccess })

export default compose(
    withStyles(styles),
    connect(mapStateProps, mapDispatchProps)
)(Login)

