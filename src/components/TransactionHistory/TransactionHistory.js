import React from 'react';
import PropTypes from 'prop-types';
import Transaction from './Transaction/Transaction';
import styles from './TransactionHistory.module.css';

const TransactionHistory = ({ transaction }) => {
  return (
    <table className={styles.transactionHistory}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {transaction.map(tr => (
          <Transaction
            key={tr.id}
            type={tr.type}
            amount={tr.amount}
            currency={tr.currency}
          />
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  transaction: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string.isRequired }),
  ),
};

export default TransactionHistory;
