import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import styles from './Tables.scss';

import Button from '@material-ui/core/Button';

const Tables = (props) => {
  const {location} = props;
  return(
    <div className={styles.component}>
      <h2>Tables viev</h2>
      <Button component={Link} to={`/tables/booking/${location.key}`}>Booking</Button>
      <Button component={Link} to={`/tables/event/${location.key}`}>event</Button>
    </div>
  );
};
  
Tables.propTypes = {
  location: PropTypes.object,
};

export default Tables;