import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';
const styles = {
    root: {
        width: '100%',
    },
    footer: {
        color: 'rgba(0, 0, 0, 0.87)',
        fontSize: '0.7rem',
        fontWeight: '400',
        lineHeight: '1.5em',
        padding: '12px 24px',
    },
    footerLayout: {
        position: "absolute",
        bottom: "10px",
    }
};

class Footer extends React.Component {


    render() {
        return (
            <div class="footerContainer">
                <div class="footerBox linksContainer">
                    <p class="links">
                        <NavLink to={process.env.PUBLIC_URL + "/privacy"}>プリバシーポリシー</NavLink>&nbsp;/&nbsp;
                        <NavLink to={process.env.PUBLIC_URL + "/terms"}>利用規約</NavLink>
                    </p>
                </div>

                <footer class="footerBox">
                    &copy;〇〇 All rights reserved.
                </footer>
            </div>
        );
    }
}

Footer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);