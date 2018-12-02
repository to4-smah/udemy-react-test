import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Hidden from '@material-ui/core/Hidden';
import Divider from '@material-ui/core/Divider';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Footer from './Footer.js';
import { menuItems } from './tileData';

const drawerWidth = 240;


const styles = theme => ({
    root: {
        flexGrow: 1,
        // height: 430,
        zIndex: 1,
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
        [theme.breakpoints.down('sm')]: {
            flexWrap: 'wrap',
        },
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    navIconHide: {
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
        [theme.breakpoints.up('md')]: {
            position: 'relative',
        },
    },
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing.unit * 3,
    },
    flex: {
        flex: 1,
    },
    menuButton: {
        position: "absolute",
        right: "1rem",
    },
});


export class Layout extends React.Component {

    handleDrawerToggle = () => {
        this.setState({ mobileOpen: !this.state.mobileOpen });
    };
    state = {
        mobileOpen: false,
        auth: true,
        anchorEl: null,
    };

    handleChange = (event, checked) => {
        this.setState({ auth: checked });
    };

    handleMenu = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
        this.setState({ anchorEl: null });
    };
    render() {
        const { classes, theme } = this.props;
        const { auth, anchorEl } = this.state;
        const open = Boolean(anchorEl);
        const drawerPc = (
            <div>
                <div className={classes.toolbar} />
                <Divider />
                <List>{menuItems}</List>
                <Footer />
            </div>
        );

        const drawerSp = (
            <div>
                <div class="userArea" >
                    <AccountCircle />
                    <span>山田 太郎</span>
                </div>
                <Divider />
                <List>{menuItems}</List>
            </div>
        );

        return (
            <div>

                <div className={classes.root}>
                    <AppBar className={classes.appBar}>
                        <Toolbar>
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                onClick={this.handleDrawerToggle}
                                className={classes.navIconHide}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Typography variant="title" color="inherit" noWrap>
                                <h1>〇〇</h1>
                            </Typography>
                            <div style={{position: "absolute", right: "1rem",}}>
                                <Hidden smDown>
                                    <div class="userArea" >
                                        <AccountCircle />
                                        <span>山田 太郎</span>
                                    </div>
                                </Hidden>
                            </div>
                        </Toolbar>
                    </AppBar>
                    <Hidden mdUp>
                        <Drawer className="menuContainer"
                            variant="temporary"
                            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                            open={this.state.mobileOpen}
                            onClose={this.handleDrawerToggle}
                            classes={{
                                paper: classes.drawerPaper,
                            }}
                            ModalProps={{
                                keepMounted: true, // Better open performance on mobile.
                            }}
                        >
                            {drawerSp}
                        </Drawer>
                    </Hidden>
                    <Hidden smDown implementation="css">
                        <Drawer className="menuContainer"
                            variant="permanent"
                            open
                            classes={{
                                paper: classes.drawerPaper,
                            }}
                        >
                            {drawerPc}
                        </Drawer>
                    </Hidden>
                    <main className={classes.content}>
                        <div className={classes.toolbar} />
                        {this.props.children}
                    </main>
                    <Hidden mdUp>
                        <Footer />
                    </Hidden>
                </div>
            </div>
        );
    }
}

Layout.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Layout);