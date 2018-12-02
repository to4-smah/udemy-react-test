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

class Construction extends React.Component {
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
                <h2>工事一覧</h2>
                <form autoComplete="off">
                </form>
                <Card className="list listConstruction">
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
                            設置商品：Metal Top（メタルトップ）
                        </p>
                        <p class="listLimit textBold">
                            工事予定日：未定
                        </p>
                    </CardContent>
                    <div class="actionArea">
                        <Button href="/construction/show/1" className={classes.button} class="viewDetail flexibleBox">詳細を見る →</Button>
                    </div>
                </Card>
                <Card className="list listQuotation">
                    <CardContent>
                        <h3 variant="headline" class="listTitle">
                            ビルトインガスコンロ 「Sシリーズ」工事
                        </h3>
                        <div>
                            <label size="small" class="label labelSuccess">
                                工事日確定
                            </label>
                        </div>
                        <p class="listInfo">
                            設置商品：Metal Top（メタルトップ）
                        </p>
                        <p class="listLimit textBold">
                            工事予定日：未定
                        </p>
                    </CardContent>
                    <div class="actionArea">
                        <Button href="/construction/show/2" className={classes.button} class="viewDetail flexibleBox">詳細を見る →</Button>
                    </div>
                </Card>
            </Layout>
        );
    }
}

Construction.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Construction);