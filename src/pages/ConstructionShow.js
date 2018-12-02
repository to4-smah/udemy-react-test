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
import PhoneIcon from '@material-ui/icons/Phone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import Hidden from '@material-ui/core/Hidden';

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

class ConstructionShow extends React.Component {
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
                <h2>工事詳細</h2>
                <form autoComplete="off">
                </form>
                <Card className="show showConstruction">
                    <CardContent>
                        <h3 variant="headline" class="listTitle">
                            ビルトインガスコンロ 「Sシリーズ」工事
                        </h3>
                        <div>
                            <label size="small" class="label labelSecondary">
                                工事日調整中
                            </label>
                        </div>
                        <p class="listInfo">
                            <small class="displayBlock">設置商品：Metal Top（メタルトップ）</small>
                            <small class="displayBlock">伝票番号：M0006006</small>
                        </p>
                        <p class="listLimit textBold">
                            工事予定日：未定
                        </p>
                        <h4 class="contentHead">工事内容</h4>
                        <div class="content">
                            <div class="border1 textSmaller">
                                <p class="textBold">
                                    【本体料金】ノーリツ(fami)※都市ガス 型番:N3WQ6RWTSKSI<br />
                                    【工事費】ビルトインガスコンロ標準工事費
                                </p>
                                <small class="totalPrice">合計金額：71,780円（税込）</small>
                            </div>
                        </div>
                        <p>
                            <a href="" class="colorSecondary textSmaller">お見積書を確認する&nbsp;→</a>
                        </p>
                    </CardContent>
                </Card>

                <div class="mainFooter textCenter">
                    <h4 class="">工事のお問い合わせ</h4>
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

ConstructionShow.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ConstructionShow);