import male from '../assets/male.png';
import female from '../assets/female.png';

export const SideBarLeftList = [
    {
        name: 'Dashboard',
        path: '/'
    },
    {
        name: 'Projects',
        path: '/projects'
    },
    {
        name: 'Platform',
        path: '/platform'
    },
    {
        name: 'Sales',
        path: '/sales'
    },
    {
        name: 'Reports',
        path: '/reports'
    },
    {
        name: 'Statements',
        path: '/statements'
    },
    {
        name: 'Analytics',
        path: '/analytics'
    },
    {
        name: 'Expenses',
        path: '/expenses'
    },
    {
        name: 'Users',
        path: '/users'
    }
];

export const DashboardCards = [{
    title: 'Sales',
    value: '$48,190',
    period: 'This week',
    showRightButton: true
},{
    title: 'Page Views',
    value: '83,710',
    period: 'This month',
    showRightButton: false

},{
    title: 'Reports',
    value: '23,230',
    period: 'Last week',
    showRightButton: false

}]

export const sideBarRightMsgList = [{
    name: 'Ned Flander',
    pic: male,
    lastUpdate: '3 hours ago',
},{
    name: 'Peter Griffin',
    pic: male,
    lastUpdate: '4 hours ago',
},{
    name: 'Lisa Simpson',
    pic: female,
    lastUpdate: '5 hours ago',
},]

export const sideBarRightEvents = [{
    name: 'Team Scrum',
    count: 12,
},{
    name: 'Google I/O',
    count: 0,
},]
