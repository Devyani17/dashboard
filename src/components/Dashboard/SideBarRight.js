import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import { sideBarRightMsgList, sideBarRightEvents } from '../../data/data';
import StatsChart from '../Charts/StatsChart';


class SideBarRight extends Component {
    render() {
        return (
            <div className="sidebarRightContainer">
                <div className="newMessage">
                    <h5>NEW MESSAGES</h5>
                    <List className="sideBarRightList">
                        {sideBarRightMsgList.map((msg, i) => {
                            return (
                                <ListItem key={`${msg.name}-${i}`}>
                                    <ListItemAvatar>
                                        <Avatar alt={msg.pic} src={msg.pic} />
                                    </ListItemAvatar>
                                    <ListItemText primary={msg.name} secondary={msg.lastUpdate} />
                                </ListItem>
                            )
                        })
                        }
                    </List>
                </div>
                <div className="events">
                    <h5>EVENTS</h5>
                    <List className="sideBarRightList">
                        {sideBarRightEvents.map((event, i) => {
                            return (
                                <div key={`${event.name}-${i}`}>
                                    <ListItem>
                                        <ListItemText primary={event.name} />
                                        {event.count > 0 &&
                                            <div>
                                                <Button className="eventCountBtn">{event.count}</Button>
                                            </div>}
                                    </ListItem>
                                    <Divider />
                                </div>
                            )
                        })}
                        <div style={{ color: '#a9a8a8', fontSize: 14, textAlign: 'end' }}>No more events scheduled</div>
                    </List>
                </div>
                <div className="stats">
                    <h5>STATS</h5>
                    <StatsChart />
                </div>

            </div>
        );
    }
}

export default SideBarRight;