import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import { NavLink } from 'react-router-dom';

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
    }
});
function Forgot(props) {
    const { classes } = props;

    return (
        <div class="loginContainer">
            <h1>
                <object>
                    <img src={logo} alt="棟梁ドットコム" />
                </object>
            </h1>
            <div class="loginBox">
                <form className={classes.textCenter} autoComplete="off" action={"/quotation"} method="get">
                    <h2>パスワードをお忘れの方</h2>
                    <FormControl class="formControl">
                        <div className={classes.margin}>
                             <TextField className={classes.width300px} id="input-with-icon-grid" label="メールアドレス" />
                        </div>
                        <div class="submitArea">
                            <Button size="large" variant="contained" color="primary" className={classes.button} component={NavLink} to={process.env.PUBLIC_URL + "/dashboard"}>
                                再発行する
                            </Button>
                        </div>
                    </FormControl>
                </form>
            </div>
            <footer>
                <small>&copy;棟梁ドットコム All rights reserved.</small>
            </footer>
        </div>
    );
}

Forgot.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Forgot);