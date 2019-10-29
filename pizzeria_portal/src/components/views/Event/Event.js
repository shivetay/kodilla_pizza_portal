import React from 'react';
import PropTypes from 'prop-types';

import styles from './Event.scss';

const Event = (props) => {
  const {location} = props;
  return(
    <div className={styles.component}>
      <h2>Event view</h2>
      <p>{ location.pathname }</p>
    </div>
  );
};

Event.propTypes = {
  location: PropTypes.string,
};

export default Event;