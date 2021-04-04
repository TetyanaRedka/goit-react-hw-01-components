import React from 'react';
import Transaction from './Transaction/Transaction';
import styles from "./TransactionHistory.module.css"

const TransactionHistory = ({ transaction }) => {
  return (
    <table className = {styles.transactionHistory}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {transaction.map(tr => (
          <Transaction key={tr.id} type={tr.type} amount={tr.amount} currency={tr.currency} />
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
