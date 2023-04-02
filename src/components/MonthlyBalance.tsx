import './MonthlyBalance.css';
import React from 'react';

interface MonthlyBalanceProps {
  balance: {
    month: string;
    avarage: number;
  }[];
}

const MonthlyBalance: React.FC<MonthlyBalanceProps> = ({ balance }) => {
  const renderMonth = (obj: { month: string; avarage: number }) => {
    return (
      <li key={obj.month}>
        <div className="month">{obj.month}</div>
        <div>{obj.avarage.toFixed(2)}</div>
        <div className="currency">EUR</div>
      </li>
    );
  };
  return (
    <div className="MonthlyBalance">
      <h1>Monthly Balance</h1>
      <ul>{balance.map(renderMonth)}</ul>
    </div>
  );
};

export default MonthlyBalance;
