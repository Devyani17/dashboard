import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import faceicon from '../../assets/faceicon.png';
import { NavLink } from 'react-router-dom';
import { SideBarLeftList } from '../../data/data';

//icons
import ProjectsIcon from '@material-ui/icons/Apps';
import UsersIcon from '@material-ui/icons/Mood';
import PlatformIcon from '@material-ui/icons/Code';
import SalesIcon from '@material-ui/icons/StarBorder';
import ReportsIcon from '@material-ui/icons/Tv';
import StatementsIcon from '@material-ui/icons/Create';
import AnalyticsIcon from '@material-ui/icons/TrendingUp';
import DashboardIcon from '@material-ui/icons/SettingsInputSvideo';
import ExpensesIcon from '@material-ui/icons/GpsFixed';


const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    drawer: {
        width: drawerWidth,
    },
    userDetailsBox: {
        flexShrink: 0,
        padding: '20px 30px',
        backgroundImage: 'linear-gradient(to right, #92cae0 , #6a9496)',
        fontSize: '0.9rem',
    },
    policyBox: {
        flexShrink: 0,
        padding: '20px 30px',
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolar,
        justifyContent: 'flex-end',
        backgroundImage: 'linear-gradient(to right, #92cae0 , #6a9496)',
    },
    userDetails: {
        marginBottom: '10px',
        marginLeft: '-10px',
    },
    linkText: {
        cursor: 'pointer',
        color: '#3f51b5',
    },
}));



export default function SideBarLeft(props) {
    const classes = useStyles();
    const theme = useTheme();
    const { open, setOpen } = props;

    const handleDrawerClose = () => {
        setOpen(false);

    }
    
    const getDrawerIcon = (type) => {

        switch(type){
            case 'Dashboard': 
                return <DashboardIcon />
            case 'Projects': 
                return <ProjectsIcon />
            case 'Platform': 
                return <PlatformIcon />
            case 'Sales': 
                return <SalesIcon />
            case 'Reports': 
                return <ReportsIcon />
            case 'Statements': 
                return <StatementsIcon />
            case 'Analytics': 
                return <AnalyticsIcon />
            case 'Expenses': 
                return <ExpensesIcon />
            case 'Users': 
                return <UsersIcon />
            default :
                return 

        }

    }

    return (
        <Drawer
            className={classes.drawer}
            variant="persistent"
            anchor="left"
            open={open}
            classes={{
                paper: classes.drawerPaper,
            }}>
            <div className={classes.drawerHeader}>
                <IconButton onClick={handleDrawerClose}>
                    {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                </IconButton>
            </div>
            <div className={classes.userDetailsBox}>
                <img src={faceicon} alt="FaceIcon" className={classes.userDetails} width='70px' />
                <div style={{fontWeight: 'bold'}}>Suhas U</div>
                <div>suhas@unikwan.com</div>
            </div>
            <List>
                {SideBarLeftList.map((item, index) => (
                    <ListItem button key={item.name} >
                        {console.log("item==",item)}
                        <ListItemIcon>{getDrawerIcon(item.name)}</ListItemIcon>
                        {index === 0 ? <NavLink exact to="/" activeStyle={{ color: '#3f51b5' }} className="nav-link-style">
                            <div style={{ display: 'flex' }}>{item.name}</div>
                        </NavLink> :
                            <NavLink exact to={item.path} activeStyle={{ color: '#3f51b5' }} className="nav-link-style" >
                                <div style={{ display: 'flex'}}>{item.name} {index !== 6 && <ChevronRightIcon />}</div>
                            </NavLink>
                        }
                    </ListItem>
                ))}
            </List >
            <Divider />
            <List className={classes.policyBox}>
                <ListItemText>Devyani &copy;</ListItemText>
                <ListItemText className={classes.linkText}>Privacy <span style={{color: '#000'}}>&</span> Terms</ListItemText>
            </List>
        </Drawer>
    )
}