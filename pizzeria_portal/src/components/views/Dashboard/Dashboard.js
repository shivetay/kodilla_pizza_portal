import React from 'react';
// import PropTypes from 'prop-types';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
import Toolbar from '@material-ui/core/Toolbar';

import styles from './Dashboard.scss';

const demoOrders = [
  {id: '1', status: 'free', order: null},
  {id: '2', status: 'thinking', order: null},
  {id: '3', status: 'ordered', order: 123},
  {id: '4', status: 'prepared', order: 234},
  {id: '5', status: 'delivered', order: 345},
  {id: '6', status: 'paid', order: 456},
];
const demoBooking = [
  {id: '1', status: 'pending',type: 'booking' , order: null},
  {id: '2', status: 'paid',type: 'event' , order: null},
  {id: '3', status: 'paid',type: 'booking' , order: 123},
  {id: '4', status: 'paid',type: 'booking' , order: 234},
  {id: '5', status: 'pending',type: 'event' , order: 345},
  {id: '6', status: 'paid',type: 'event' , order: 456},
];

const Dashboard = () => (
  <div className={styles.component}>
    <h2>Main Dashboard</h2>
    <Paper>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="center" colSpan={4}>
              Order Statistic
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Table</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Order Number</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {demoOrders.map(row => (
            <TableRow key={row.id}>
              <TableCell scope="row">
                {row.id}
              </TableCell>
              <TableCell>
                {row.status}
              </TableCell>
              <TableCell>
                {row.order && (
                  <Button component={Link} to={`/ordering/order/${row.order}`}>{row.order}</Button>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
    <Toolbar />
    <Paper>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="center" colSpan={4}>
              Events and Bookings
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Table</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Number</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {demoBooking.map(row => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell>
                {row.status}
              </TableCell>
              <TableCell>
                {row.type}
              </TableCell>
              <TableCell>
                {row.order && (
                  <Button to={`${process.env.PUBLIC_URL}/waiter/order/${row.order}`}>
                    {row.order}
                  </Button>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  </div>
);

export default Dashboard;