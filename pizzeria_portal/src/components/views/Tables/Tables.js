import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import styles from './Tables.scss';

const Tables = (id) => (
  <div className={styles.component}>
    <h2>Tables viev</h2>
    <Link to={`/tables/booking/${id}`}>Booking</Link>
    <Link to={`/tables/event/${id}`}>Event</Link>
  </div>
);

Tables.propTypes = {
  id: PropTypes.string,
};

export default Tables;