import React from 'react';
import PropTypes from 'prop-types';
import StatPoint from './StatPoint/StatPoint';
import styles from './Statistics.module.css';

const Statistics = ({ title, stats }) => {
  return (
    <section className={styles.statistics}>
      {title && <h2 className={styles.title}>{title}</h2>}

      <ul className={styles.statList}>
        {stats.map(st => (
          <StatPoint key={st.id} label={st.label} percentage={st.percentage} />
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string.isRequired }),
  ),
};

export default Statistics;
