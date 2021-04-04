import React from 'react';
import PropTypes from 'prop-types';
import styles from "./Friend.module.css"

import defaultImage from "../../logo192.png"

const Friend = ({ avatar, name, isOnline }) => {
  return (
    <>
      <span className = {styles[isOnline]}></span>
      <img className = {styles.avatar}  src={avatar} alt="" width="48" />
      <p  className = {styles.name}>{name}</p>
    </>
  );
};

Friend.defaultProps = {
  avatar: defaultImage,

}

Friend.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};



export default Friend;
