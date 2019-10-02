import React, { Component } from 'react';
import DashboardCard from './DashboardCard';
import InvoiceTable from './InvoiceTable';
import SideBarRight from './SideBarRight';

import './Dashboard.css'

import { DashboardCards } from '../../data/data';

class Dashboard extends Component {
    render() {
        return (
            <div>
                <div className="dashboardContainer">
                    <div>
                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                            {DashboardCards.map((card, i) => {
                                console.log('card==', card)
                                return <DashboardCard card={card} key={i}/>
                            })
                            }
                        </div>
                        <InvoiceTable />
                    </div>
                    <div>
                        <SideBarRight />
                    </div>
                </div>
            </div>
        );
    }
}


export default Dashboard;