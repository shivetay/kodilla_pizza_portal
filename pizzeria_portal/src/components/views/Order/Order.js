import React from 'react';
import PropTypes from 'prop-types';

import styles from './Order.scss';

const Order = (props) => (
  <div className={styles.component}>
    <h2>Order viev</h2>
    {props.id}
  </div>
);

Order.propTypes = {
  id: PropTypes.string,
};

export default Order;