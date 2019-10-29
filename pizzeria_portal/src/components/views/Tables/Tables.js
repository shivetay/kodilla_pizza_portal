import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import styles from './Tables.scss';

const Tables = (props) => {
  const {location} = props;
  return(
    <div className={styles.component}>
      <h2>Tables viev</h2>
      <Link to={`/tables/booking/${location.key}`}>Booking</Link>
      <Link to={`/tables/event/${location.key}`}>Event</Link>
    </div>
  );
};
  

Tables.propTypes = {
  location: PropTypes.string,
};

export default Tables;