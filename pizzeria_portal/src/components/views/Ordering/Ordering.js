import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import styles from './Ordering.scss';

const Ordering = (id) => (
  <div className={styles.component}>
    <h2>Ordering viev</h2>
    <Link to={`/ordering/order/${id}`}>Ordering</Link>
  </div>
);

Ordering.propTypes = {
  id: PropTypes.string,
};

export default Ordering;