import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import styles from './Ordering.scss';

const Ordering = (props) => {
  const {location} = props;
  console.log(props);
  return(
    <div className={styles.component}>
      <h2>Ordering viev</h2>
      <Link to={`/ordering/order/${location.key}`}>Order</Link>
    </div>
  );
};

Ordering.propTypes = {
  location: PropTypes.string,
};

export default Ordering;