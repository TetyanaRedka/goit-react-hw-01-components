import React from 'react';
import PropTypes from 'prop-types';
import styles from "./StatPoint.module.css"

const StatPoint = ({ label, percentage }) => {
  return (
    <li className = {styles.item}>
      <span className = {styles.label}>{label}</span>
      <span className = {styles.percentage}>{percentage} %</span>
    </li>
  );
};

StatPoint.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default StatPoint;
