import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import styles from './Ordering.scss';

import Button from '@material-ui/core/Button';

const Ordering = (props) => {
  const {location} = props;
  console.log(props);
  return(
    <div className={styles.component}>
      <h2>Ordering</h2>
      <Button component={Link} to={`/ordering/order/${location.key}`}>Order</Button>
      <Button component={Link} to={`/ordering/neworder/${location.key}`}>New Order</Button>
    </div>
  );
};

Ordering.propTypes = {
  location: PropTypes.object,
};

export default Ordering;