import React from 'react';
import PropTypes from 'prop-types';

import styles from './Order.scss';

const Order = (props) => {
  
  const {location} = props;
  return(
    <div className={styles.component}>
      <h2>Order view</h2>
      <p>{ location.pathname }</p>
    </div>
  );
};

Order.propTypes = {
  location: PropTypes.string,
};

export default Order;