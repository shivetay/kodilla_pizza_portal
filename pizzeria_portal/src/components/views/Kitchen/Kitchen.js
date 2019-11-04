import React from 'react';
// import PropTypes from 'prop-types';

import styles from './Kitchen.scss';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Checkbox from '../../common/Checkbox/Checkbox';

const demoKitchen = [
  {id: '1', table: '2', checkbox: <Checkbox />, status: 'served', order: 345667},
  {id: '2', table: '1', checkbox: <Checkbox />, status: 'in progress', order: 67890},
  {id: '3', table: '3', checkbox: <Checkbox />, status: 'in progress', order: 23453},
  {id: '4', table: '4', checkbox: <Checkbox />, status: 'served', order: 23426685},
  {id: '5', table: '2', checkbox: <Checkbox />, status: 'in progress', order: 345345},
  {id: '6', table: '6', checkbox: <Checkbox />, status: 'served', order: 455676},
  {id: '7', table: '3', checkbox: <Checkbox />, status: 'served', order: 4510146},
  {id: '8', table: '4', checkbox: <Checkbox />, status: 'canceled', order: 978663},
  {id: '9', table: '7', checkbox: <Checkbox />, status: 'served', order: 234566},
];

const Kitchen = () => (
  <div className={styles.component}>
    <h2>Kitchen</h2>
    <Paper>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="center" colSpan={5}>
              Order List
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell></TableCell>
            <TableCell>Id</TableCell>
            <TableCell>Table</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Order Nnumber</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {demoKitchen.map(row => (
            <TableRow key={row.id}>
              <TableCell scope ="row" align="center">
                {row.checkbox}
              </TableCell>
              <TableCell scope ="row" align="left">
                {row.id}
              </TableCell>
              <TableCell scope ="row">
                {row.table}
              </TableCell>
              <TableCell scope ="row" >
                {row.status}
              </TableCell>
              <TableCell scope ="row" >
                {row.order && (
                  <Button to={`${process.env.PUBLIC_URL}/kitchen/order/${row.order}`}>
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

export default Kitchen;