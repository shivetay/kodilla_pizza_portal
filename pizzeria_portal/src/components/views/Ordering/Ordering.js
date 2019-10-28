import React from 'react';
// import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import styles from './Ordering.scss';

const Ordering = () => (
  <div className={styles.component}>
    <h2>Ordering viev</h2>
    <Link to='/ordering/order/:id'>Booking</Link>
  </div>
);

export default Ordering;