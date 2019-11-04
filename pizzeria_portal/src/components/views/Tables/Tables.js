import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import styles from './Tables.scss';

import Button from '@material-ui/core/Button';
import DateAndTimePickers from '../../common/DatePicker/DatePicker';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';

const demoTables = [
  {id: '1', time: '12:00', status: 'free', order: null},
  {id: '2', time: '12:30', status: 'thinking', order: null},
  {id: '3', time: '13:00', status: 'ordered', order: 123},
  {id: '4', time: '13:30', status: 'prepared', order: 234},
  {id: '5', time: '14:00', status: 'delivered', order: 345},
  {id: '6', time: '14:30', status: 'paid', order: 456},
];


const Tables = (props) => {
  const {location} = props;
  return(
    <div className={styles.component}>
      <h2>Tables</h2>
      <div>
        <Button component={Link} to={`/tables/booking/${location.key}`}>Booking</Button>
        <Button component={Link} to={`/tables/event/${location.key}`}>event</Button>
      </div>
      <DateAndTimePickers />
      <Toolbar />
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center" colSpan={7}>
                Table number
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Time</TableCell>
              <TableCell>Table 1</TableCell>
              <TableCell>Table 2</TableCell>
              <TableCell>Table 3</TableCell>
              <TableCell>Table 4</TableCell>
              <TableCell>Table 5</TableCell>
              <TableCell>Table 6</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {demoTables.map(row => (
              <TableRow key={row.id} >
                <TableCell scope="row" colSpan={7}>
                  {row.time}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
};
  
Tables.propTypes = {
  location: PropTypes.object,
};

export default Tables;
