import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import SalesChart from '../Charts/SalesCharts';
import PageviewChart from '../Charts/PageviewChart';
import ReportsChart from '../Charts/ReportsChart';
import Button from '@material-ui/core/Button';
import MoreIcon from '@material-ui/icons/MoreVert';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';


const useStyles = makeStyles(theme => ({
    card: {
        display: 'flex',
        marginRight: 20,
        width: 240,
        height: 135,
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
    },
    content: {
        flex: '1 0 auto',
    },
    cover: {
        width: 120,
    },
    controls: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: theme.spacing(1),
        paddingBottom: theme.spacing(1),
    },
    playIcon: {
        height: 38,
        width: 38,
    },
}));


function DashboardCard(props) {
    const classes = useStyles();
    const { card } = props;
    return (
        <div>
            <Card className={classes.card}>
                <div className={classes.details}>
                    <CardContent className={classes.content}>
                        <Typography component="h6" variant="h6" style={{ marginBottom: 20, textTransform: 'uppercase', fontSize: 14 }}>
                            {card.title}{card.title === 'Sales' && <Button className="salesGrossBtn">gross</Button>}
                            {card.title === 'Page Views' && <MoreIcon className="pageviewIcon"/>}
                        </Typography>
                        <Typography component="h6" variant="h6">
                            {card.value} <span style={{ fontSize: 10 }}>{card.period}</span>
                                {card.title === 'Reports' && <span className="reportTrends">8%<TrendingUpIcon/></span>}
                        </Typography>
                    </CardContent>
                    <div>
                        {card.title === 'Sales' && <SalesChart />}
                        {card.title === 'Page Views' && <PageviewChart />}
                        {card.title === 'Reports' && <ReportsChart />}
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default DashboardCard;