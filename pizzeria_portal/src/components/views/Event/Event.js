import React from 'react';
import PropTypes from 'prop-types';

import styles from './Event.scss';

const Event = (props) => (
  <div className={styles.component}>
    <h2>Event view</h2>
    {props.id}
  </div>
);

Event.propTypes = {
  id: PropTypes.string,
};

export default Event;