import React, { Component } from 'react';
import PropTypes from 'prop-types'
import _ from 'lodash'
import { compose } from 'redux'
import connect from 'react-redux/es/connect/connect'
import Time from 'react-time-format'

import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Layout from '../components/Layout'
import Hidden from '@material-ui/core/Hidden'

import { getWeekName } from '../helper'
import { estimateAllList } from '../actions'

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

class Dashboard extends Component {
    componentDidMount() {
        this.props.estimateAllList()
    }

    emitationListShow() {
        const { classes } = this.props;

        return(
            _.map(this.props.events, event => (
                <Card className="list listDashboard" key={event.node.id}>
                    <CardContent class="flexibleBox">
                        <label size="small" class="label labelSecondary labelSmall">
                            未発注
                        </label>
                    </CardContent>
                    <CardContent>
                        <h4>{ event.node.title }</h4>
                        <p class="listLimit textBold">
                            有効期限：<Time value={ event.node && event.node.expiredAt } format="YYYY年MM月DD日HH時間mm分" /><Hidden mdUp><br /></Hidden>（{ event.node && getWeekName(event.node.expiredAt) }）
                        </p>
                    </CardContent>
                    <div class="actionArea">
                        { event.node && _.map(event.node.attaches, attach => (
                            <Button href={attach.attach.presindedUri} className={classes.button} class="viewDetail flexibleBox" target={"_blank"}>見積もりPDFを表示 →</Button>
                        )) }
                    </div>
                </Card>
            ))
        )
    }

    render() {

        return (
            <Layout>
                <h2>ダッシュボード</h2>
                <div>
                    <h3>未発注のお見積り</h3>
                    { this.emitationListShow() }
                </div>
                {/*<div>*/}
                    {/*<h3>最新のお知らせ</h3>*/}
                    {/*<Card className="list listDashboard">*/}
                        {/*<CardContent class="flexibleBox">*/}
                            {/*<label size="small" class="label labelSecondary labelSmall">*/}
                                {/*未読*/}
                            {/*</label>*/}
                        {/*</CardContent>*/}
                        {/*<CardContent>*/}
                            {/*<h4>*/}
                                {/*ビルトインガスコンロ 「Sシリーズ」工事費のお見積りが届きました*/}
                            {/*</h4>*/}
                        {/*</CardContent>*/}
                        {/*<div class="actionArea">*/}
                            {/*<Button href="#" className={classes.button} class="viewDetail flexibleBox">詳細を見る →</Button>*/}
                        {/*</div>*/}
                    {/*</Card>*/}
                    {/*<Card className="list listDashboard">*/}
                        {/*<CardContent class="flexibleBox">*/}
                            {/*<label size="small" class="label labelSecondary labelSmall">*/}
                                {/*未読*/}
                            {/*</label>*/}
                        {/*</CardContent>*/}
                        {/*<CardContent>*/}
                            {/*<h4>*/}
                                {/*ビルトインガスコンロ 「Sシリーズ」工事費のお見積りが届きました*/}
                            {/*</h4>*/}
                        {/*</CardContent>*/}
                        {/*<div class="actionArea">*/}
                            {/*<Button href="#" className={classes.button} class="viewDetail flexibleBox">詳細を見る →</Button>*/}
                        {/*</div>*/}
                    {/*</Card>*/}
                {/*</div>*/}
                {/*<div>*/}
                    {/*<h3>他の機能</h3>*/}
                    {/*<Card className="list listDashboard">*/}
                        {/*<CardContent class="flexibleBox">*/}
                            {/*<label size="small" class="label labelSecondary labelSmall">*/}
                                {/*未読*/}
                            {/*</label>*/}
                        {/*</CardContent>*/}
                        {/*<CardContent>*/}
                            {/*<h4>*/}
                                {/*他の機能です他の機能です他の機能です他の機能です*/}
                            {/*</h4>*/}
                        {/*</CardContent>*/}
                        {/*<div class="actionArea">*/}
                            {/*<Button href="#" className={classes.button} class="viewDetail flexibleBox">詳細を見る →</Button>*/}
                        {/*</div>*/}
                    {/*</Card>*/}
                    {/*<Card className="list listDashboard">*/}
                        {/*<CardContent class="flexibleBox">*/}
                            {/*<label size="small" class="label labelSecondary labelSmall">*/}
                                {/*未読*/}
                            {/*</label>*/}
                        {/*</CardContent>*/}
                        {/*<CardContent>*/}
                            {/*<h4>*/}
                                {/*他の機能です他の機能です他の機能です他の機能です*/}
                            {/*</h4>*/}
                        {/*</CardContent>*/}
                        {/*<div class="actionArea">*/}
                            {/*<Button href="#" className={classes.button} class="viewDetail flexibleBox">詳細を見る →</Button>*/}
                        {/*</div>*/}
                    {/*</Card>*/}
                {/*</div>*/}
            </Layout>
        );
    }
}

Dashboard.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateProps = state => ({ events: state.events })
const mapDispatchProps = ({ estimateAllList })

export default compose(
    withStyles(styles),
    connect(mapStateProps, mapDispatchProps),
)(Dashboard)
