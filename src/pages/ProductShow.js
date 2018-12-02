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

class ProductShow extends React.Component {
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
                <h2>商品詳細</h2>
                <form autoComplete="off">
                </form>
                <Card className="show showProduct">
                    <CardContent>
                        <h3 variant="headline" class="listTitle">
                            Metal Top（メタルトップ）
                        </h3>
                        <p class="listInfo">
                            <small class="displayBlock">ノーリツ</small>
                            <small class="displayBlock">商品型番：N3GN2RSQ1L</small>
                            <small class="displayBlock category">ビルトインガスコンロ／商品カテゴリ名</small>
                        </p>
                        <p class="listLimit textBold">
                            商品設置日：2018年5月30日（水）
                        </p>
                        <p class="listWarranty textBold">
                            保証期間：2020年5月30日（水）まで
                        </p>
                        <div class="content">
                            <h4>保証内容</h4>
                            <p class="textSmaller">

                                保証内容が入ります。保証内容が入ります。保証内容が入ります。保証内容が入ります。保証内容が入ります。保証内容が入ります。保証内容が入ります。保証内容が入ります。保証内容が入ります。保証内容が入ります。保証内容が入ります。保証内容が入ります。保証内容が入ります。保証内容が入ります。保証内容が入ります。保証内容が入ります。保証内容が入ります。保証内容が入ります。保証内容が入ります。保証内容が入ります。保証内容が入ります。保証内容が入ります。
                            </p>
                        </div>
                    </CardContent>
                </Card>
                <div class="blankArea textCenter">
                    <Button href="#" className={classes.button} class="label labelSuccess">修理サポート依頼</Button>
                </div>
            </Layout>
        );
    }
}

ProductShow.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductShow);