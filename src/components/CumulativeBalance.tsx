import './CumulativeBalance.css';
import React from 'react';

interface CumulativeBalanceProps {
  balance: number;
}

const CumulativeBalance: React.FC<CumulativeBalanceProps> = ({ balance }) => {
  return (
    <div className="CumulativeBalance">
      <h1>Cumulative Balance</h1>
      <div className="amount">
        <span>{balance.toFixed(2)}</span>
        <span className="currency">EUR</span>
      </div>
    </div>
  );
};

export default CumulativeBalance;
