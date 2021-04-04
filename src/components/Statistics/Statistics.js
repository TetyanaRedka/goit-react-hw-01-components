import React from 'react';
import StatPoint from './StatPoint/StatPoint';
import styles from "./Statistics.module.css"

const Statistics = ({ title, stats }) => {
  return (
    <section className = {styles.statistics} >
      <h2 className = {styles.title}>{title}</h2>

      <ul className = {styles.statList}>
        {stats.map(st => (
          <StatPoint key={st.id} label={st.label} percentage={st.percentage} />
        ))}
      </ul>
    </section>
  );
};

export default Statistics;
