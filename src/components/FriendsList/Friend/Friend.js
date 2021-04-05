import React from 'react';
import PropTypes from 'prop-types';
import styles from './Friend.module.css';

import defaultImage from '../../logo192.png';

const Friend = ({ id, avatar, name, isOnline }) => {
  return (
    <li className={styles.item}>
      <span className={styles[isOnline]}></span>
      <img className={styles.avatar} src={avatar} alt="" width="48" />
      <p className={styles.name}>{name}</p>
    </li>
  );
};

Friend.defaultProps = {
  avatar: defaultImage,
};

Friend.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default Friend;
