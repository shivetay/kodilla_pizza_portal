import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import styles from './Tables.scss';

import Button from '@material-ui/core/Button';
import DateAndTimePickers from '../../common/DatePicker/DatePicker';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';


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
        thgd
      </Paper>
    </div>
  );
};
  
Tables.propTypes = {
  location: PropTypes.object,
};

export default Tables;
