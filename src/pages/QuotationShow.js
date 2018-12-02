import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Layout from '../components/Layout';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import LocalPrintshopIcon from '@material-ui/icons/LocalPrintshop';
import Hidden from '@material-ui/core/Hidden';
import PhoneIcon from '@material-ui/icons/Phone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import { mainFooter } from '../components/mainFooter';

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

class QuotationShow extends React.Component {
    state = {
        status: 1,
    };

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    render() {
        const { classes } = this.props;

        return (
            <Layout>
                <h2>お見積り詳細</h2>
                <form autoComplete="off">
                </form>
                <Card className="show showQuotation">
                    <CardContent>
                        <h3 variant="headline" class="listTitle">
                            ビルトインガスコンロ 「Sシリーズ」工事費
                        </h3>
                        <div>
                            <label size="small" class="label labelSecondary">
                                未発注
                            </label>
                        </div>
                        <p class="listInfo">
                            伝票番号：M0006006<Hidden smDown>｜</Hidden><Hidden mdUp><br /></Hidden>発行日：2018年4月30日（月）
                        </p>
                        <p class="listLimit textBold">
                            有効期限：2018年5月30日23時50分<Hidden mdUp><br /></Hidden>（残り10日と1時間30分）
                        </p>
                        <table class="priceTotal">
                            <tr>
                                <th>合計金額</th>
                                <td class="price textRight">71,780</td>
                            </tr>
                        </table>
                        <p class="output">
                            <a href="" class="colorSecondary textSmaller"><LocalPrintshopIcon />&nbsp;お見積書を出力する</a>
                        </p>
                        <table class="priceContent">
                            <tr>
                                <th>内訳</th>
                                <th>単価</th>
                                <th>数量</th>
                                <th>金額</th>
                            </tr>
                            <tr class="qList">
                                <td class="">【本体料金】ノーリツ(fami)※都市ガス 型番:N3WQ6RWTSKSI</td>
                                <td class="textRight">47,963</td>
                                <td class="textRight">1</td>
                                <td class="textRight">47,963</td>
                            </tr>
                            <tr class="qList">
                                <td class="">【工事費】ビルトインガスコンロ標準工事費</td>
                                <td class="textRight">18,500</td>
                                <td class="textRight">1</td>
                                <td class="textRight">18,500</td>
                            </tr>
                            <tr>
                                <td colspan="2" rowspan="5" class="note verticalBaseline">
                                    <h4 class="textBold">備考</h4>
                                    <p>
                                        コンロ単体工事の場合、平日工事割は適用外となります。
                                    </p>
                                </td>
                                <td class="textRight">小計</td>
                                <td class="textRight">66,463</td>
                            </tr>
                            <tr>
                                <td class="textRight">消費税</td>
                                <td class="textRight">5,317</td>
                            </tr>
                            <tr>
                                <th class="textRight">合計</th>
                                <td class="textRight">71,780</td>
                            </tr>
                            <tr>
                                <td class="textRight" colspan="2">予定作業人数 1人</td>
                            </tr>
                            <tr>
                                <td class="textRight" colspan="2">予定作業時間 1.5H</td>
                            </tr>
                        </table>
                    </CardContent>
                </Card>
                <div class="blankArea textCenter">
                    <Button href="#" className={classes.button} class="label labelSuccess">情報を編集する</Button>
                    <Button href="#" className={classes.button} class="label labelSecondary">見積もりをキャンセルする</Button>
                </div>

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

QuotationShow.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(QuotationShow);