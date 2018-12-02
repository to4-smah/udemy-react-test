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
import { estimateAllList } from '../actions'
import { 
    ESTIMATE_REQUEST_STATUS, 
    ESTIMATE_CANCEL_REQUEST_STATUS 
} from '../helper/query'

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

class Quotation extends Component {

    constructor(props) {
        super(props)
        this.state = { 
            status: 0,
        };

        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        this.props.estimateAllList()
    }

    handleChange = event => {
        this.setState({ status: event.target.value })
        this.props.estimateAllList(event.target.value)
    }

    emitationListShow() {
        return (
            _.map(this.props.events, event => (
                    <Card className="list listQuotation">
                        <CardContent>
                            <h3 variant="headline" class="listTitle">
                                { event.node.title }
                            </h3>
                            <div>
                                <label size="small" class="label labelSecondary">
                                    { this.state.status == 0 ? '未発注' : '' }
                                    { this.state.status == 1 ? '期限切れ' : '' }
                                    { this.state.status == 2 ? 'キャンセル' : '' }
                                    { this.state.status == 9 ? '発注済み' : '' }
                                </label>
                            </div>
                            <p class="listInfo">
                                伝票番号：{ event.node.key }<Hidden smDown>｜</Hidden><Hidden mdUp><br /></Hidden>発行日：<Time value={ event.node.issuedAt } format="YYYY年MM月DD日" />（{getWeekName(event.node.issuedAt)}）
                            </p>
                            <p class="listLimit textBold">
                                有効期限：<Time value={ event.node.expiredAt } format="YYYY年MM月DD日HH時間mm分" /><Hidden mdUp><br /></Hidden>{ limitTime(event.node.expiredAt) }
                            </p>
                            <div class="blankArea textCenter">
                                {
                                    this.state.status != 9 &&
                                    <Mutation mutation={ESTIMATE_REQUEST_STATUS}>
                                        {(setEstimationStatus, { data }) => (
                                            <form onSubmit={e => {
                                                e.preventDefault();
                                                setEstimationStatus({ variables: { key: event.node.key } });
                                                this.props.estimateAllList(this.state.status);
                                            }}>
                                                <Button type={'submit'} class="label labelSuccess">依頼する →</Button>
                                            </form>
                                        )}
                                    </Mutation>
                                }
                                {
                                    this.state.status != 2 &&
                                    <Mutation mutation={ESTIMATE_CANCEL_REQUEST_STATUS}>
                                        {(setEstimationStatus, { data }) => (
                                            <form onSubmit={e => {
                                                e.preventDefault();
                                                setEstimationStatus({ variables: { key: event.node.key } });
                                                this.props.estimateAllList(this.state.status);
                                            }}>
                                                <Button type={'submit'} class="label labelSecondary">キャンセルする</Button>
                                            </form>
                                        )}
                                    </Mutation>
                                }
                                
                            </div>
                        </CardContent>

                        <div class="actionArea">
                            { _.map(event.node.attaches, attach => (
                                <Button href={attach.attach.presindedUri} class="viewDetail flexibleBox" target={"_blank"}>見積もりPDFを表示 →</Button>
                            )) }
                        </div>
                    </Card> 
            ))
        )
    }

    render() {

        return (
            <Layout>
                <h2>お見積り一覧</h2>
                <form autoComplete="off">
                    <FormControl class="formArea">
                        <div class="selectArea">
                            <Grid container spacing={8} alignItems="flex-end">
                                <Grid item>
                                    <Select
                                        value={this.state.status}
                                        onChange={this.handleChange}
                                        input={<Input name="status" id="status-helper" />}
                                    >
                                        <MenuItem value={0}>未発注</MenuItem>
                                        <MenuItem value={1}>期限切れ</MenuItem>
                                        <MenuItem value={2}>キャンセル</MenuItem>
                                        <MenuItem value={9}>発注済み</MenuItem>
                                    </Select>
                                </Grid>
                            </Grid>
                        </div>
                    </FormControl>
                </form>
                { this.emitationListShow() }
                <div class="mainFooter textCenter">
                    <h4 class="">見積もりへのお問い合わせ</h4>
                    <div class="toTel">
                        <p>
                            <h3 class="displayBlock"><PhoneIcon />&nbsp;0120-484-666</h3>
                            <small class="displayBlock">受付時間：平日 9:00〜18:00</small>
                        </p>
                    </div>
                    <div class="toMail">
                        <p>
                            <h3 class="displayBlock"><MailOutlineIcon />&nbsp;info@touryo.com</h3>
                            <small class="displayBlock">件名に伝票番号を記入してください</small>
                        </p>
                    </div>
                </div>
            </Layout>
        );
    }
}

Quotation.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateProps = state => ({ 
    events: state.events,
    status: state.status
 })
const mapDispatchProps = ({
    estimateAllList
})

export default compose(
    withStyles(styles),
    connect(mapStateProps, mapDispatchProps)
)(Quotation)