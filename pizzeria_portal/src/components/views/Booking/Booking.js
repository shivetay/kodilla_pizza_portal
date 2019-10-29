import React from 'react';
import PropTypes from 'prop-types';

import styles from './Booking.scss';

const Booking = (props) => {
  const {location} = props;
  return(
    <div className={styles.component}>
      <h2>Booking view</h2>
      <p>{ location.pathname }</p>
    </div>
  );
};

Booking.propTypes = {
  location: PropTypes.string,
};

export default Booking;