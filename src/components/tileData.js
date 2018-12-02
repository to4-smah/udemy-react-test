// This file is shared across the demos.

import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import NoteIcon from '@material-ui/icons/Note';
import EjectIcon from '@material-ui/icons/Eject';
import PersonIcon from '@material-ui/icons/Person';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import HelpIcon from '@material-ui/icons/Help';
import { NavLink } from 'react-router-dom';
import { userService } from '../services';

const styles = {
    active: {
        textDecoration: 'none',
        backgroundColor: 'rgba(0, 0, 0, 0.08)',
        content: '・',
    },
};

const handleLogout = () => {
    userService.logout()
}

function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
}

export const menuItems = (
    <div>
        <ListItemLink href="/dashboard">
            <ListItemIcon>
                <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="ダッシュボード" />
        </ListItemLink>
        <ListItemLink href="/quotation">
            <ListItemIcon>
                <NoteIcon />
            </ListItemIcon>
            <ListItemText primary="お見積り一覧" />
        </ListItemLink>
        <ListItemLink href="/account">
            <ListItemIcon>
                <PersonIcon />
            </ListItemIcon>
            <ListItemText primary="お客様情報" />
        </ListItemLink>
        {/*<ListItem component={NavLink} activeStyle={styles.active} activeClass="active" to={process.env.PUBLIC_URL + "/dashboard"} button>*/}
            {/*<ListItemIcon>*/}
                {/*<DashboardIcon />*/}
            {/*</ListItemIcon>*/}
            {/*<ListItemText primary="ダッシュボード" />*/}
        {/*</ListItem>*/}
        {/*<ListItem component={NavLink} activeStyle={styles.active} to={process.env.PUBLIC_URL + "/news"} button>*/}
            {/*<ListItemIcon>*/}
                {/*<InfoIcon />*/}
            {/*</ListItemIcon>*/}
            {/*<ListItemText primary="お知らせ一覧" />*/}
        {/*</ListItem>*/}
        {/*<ListItem component={NavLink} activeStyle={styles.active}  to={process.env.PUBLIC_URL + "/quotation"} button>*/}
            {/*<ListItemIcon>*/}
                {/*<NoteIcon />*/}
            {/*</ListItemIcon>*/}
            {/*<ListItemText primary="お見積り一覧" />*/}
        {/*</ListItem>*/}
        {/*<ListItem component={NavLink} activeStyle={styles.active}  to={process.env.PUBLIC_URL + "/construction"} button>*/}
            {/*<ListItemIcon>*/}
                {/*<BuildIcon />*/}
            {/*</ListItemIcon>*/}
            {/*<ListItemText primary="工事一覧" />*/}
        {/*</ListItem>*/}
        {/*<ListItem component={NavLink} activeStyle={styles.active}  to={process.env.PUBLIC_URL + "/product"} button>*/}
            {/*<ListItemIcon>*/}
                {/*<WorkIcon />*/}
            {/*</ListItemIcon>*/}
            {/*<ListItemText primary="商品一覧" />*/}
        {/*</ListItem>*/}
        {/*<ListItem component={NavLink} activeStyle={styles.active}  to={process.env.PUBLIC_URL + "/account"} button>*/}
            {/*<ListItemIcon>*/}
                {/*<PersonIcon />*/}
            {/*</ListItemIcon>*/}
            {/*<ListItemText primary="お客様情報" />*/}
        {/*</ListItem>*/}
        <ListItem component={NavLink} activeStyle={styles.active}  to={process.env.PUBLIC_URL + "/logout"} button onClick={handleLogout}>
            <ListItemIcon>
                <EjectIcon />
            </ListItemIcon>
            <ListItemText primary="ログアウト" />
        </ListItem>
    </div>
);
export const loginItems = (
    <div>
        <ListItem component={NavLink} activeStyle={styles.active}  to={process.env.PUBLIC_URL + "/logout"} button>
            <ListItemIcon>
                <EjectIcon />
            </ListItemIcon>
            <ListItemText primary="ログアウト" />
        </ListItem>
    </div>
);
export const logoutItems = (
    <div>
        <ListItem component={NavLink} activeStyle={styles.active}  to={process.env.PUBLIC_URL + "/login"} button>
            <ListItemIcon>
                <PersonIcon />
            </ListItemIcon>
            <ListItemText primary="ログイン" />
        </ListItem>
        <ListItem component={NavLink} activeStyle={styles.active}  to={process.env.PUBLIC_URL + "/create"} button>
            <ListItemIcon>
                <PersonAddIcon />
            </ListItemIcon>
            <ListItemText primary="新規登録" />
        </ListItem>
        <ListItem component={NavLink} activeStyle={styles.active}  to={process.env.PUBLIC_URL + "/forgot"} button>
            <ListItemIcon>
                <HelpIcon />
            </ListItemIcon>
            <ListItemText primary="パスワード忘れた方" />
        </ListItem>
    </div>
);
