import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import moment from 'moment';
import InvoiceProgressChart from '../Charts/InvoiceProgressChart';

const useStyles = makeStyles(theme => ({
  root: {
    width: ' 97.5%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  },
  table: {
    minWidth: 650,
  },
  tableName: {
    padding: '20px 0px 20px 10px',
    color: 'black',
    fontWeight: 500,
  }
}));

function createData(id, paymentType, company, date, progress, total) {
  return { id, paymentType, company, date, progress, total };
}

const rows = [
  createData('#203', 'Paypal', 'Curabitur Libero Corp', moment('2019-12-16T12:42:07.684Z').format('MMM DD, HH:mm'), <InvoiceProgressChart progress={30} />, '$5430'),
  createData('#202', 'American Express', 'Integer Mattis Ltd', moment('2019-11-29T08:26:07.684Z').format('MMM DD, HH:mm'), <InvoiceProgressChart progress={65} />, '$1400'),
  createData('#200', 'Discover', 'Pellentesque Inc', moment('2019-11-17T13:44:07.684Z').format('MMM DD, HH:mm'), <InvoiceProgressChart progress={30} />, '$1250'),
  createData('#199', 'Mastercard', 'Curabitur Libero Corp', moment('2019-10-21T06:46:07.684Z').format('MMM DD, HH:mm'), <InvoiceProgressChart progress={65}/>, '$1349'),
  createData('#198', 'Amex', 'Integer Mattis Ltd', moment('2019-10-14T17:13:07.684Z').format('MMM DD, HH:mm'), <InvoiceProgressChart progress={60} />, '$980'),
  createData('#197', 'Paypal', 'Pellentesque Inc', moment('2019-09-29T05:03:07.684Z').format('MMM DD, HH:mm'), <InvoiceProgressChart progress={30} />, '$679'),
];

export default function SimpleTable() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <div className={classes.tableName}>Invoices</div>
      <Table className={classes.table}>
        <TableHead>
          <TableRow className="tableHeading">
            <TableCell align="left">ID</TableCell>
            <TableCell align="left">Payment Type</TableCell>
            <TableCell align="left">Company</TableCell>
            <TableCell align="left">Date</TableCell>
            <TableCell align="left">Progress</TableCell>
            <TableCell align="left">Total</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="left">{row.paymentType}</TableCell>
              <TableCell align="left">{row.company}</TableCell>
              <TableCell align="left">{row.date}</TableCell>
              <TableCell align="left">{row.progress}</TableCell>
              <TableCell align="left">{row.total}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}
