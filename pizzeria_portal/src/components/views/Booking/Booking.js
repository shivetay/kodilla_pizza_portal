import React from 'react';
import PropTypes from 'prop-types';

import styles from './Booking.scss';

const Booking = (props) => (
  <div className={styles.component}>
    <h2>Booking view</h2>
    { props.id }
  </div>
);

Booking.propTypes = {
  id: PropTypes.string,
};

export default Booking;