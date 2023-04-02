/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect } from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useActions } from '../hooks/useActions';

import CumulativeBalance from './CumulativeBalance';
import MonthlyBalance from './MonthlyBalance';
import LoadingView from './LoadingView';
import ErrorView from './ErrorView';

const BalancePage = () => {
  const { fetchTransactions } = useActions();

  const balance = useTypedSelector((state) => state.balance);
  const monthlyBalance = useTypedSelector((state) => state.monthlyBalance);
  const loading = useTypedSelector((state) => state.balanceLoading);
  const error = useTypedSelector((state) => state.balanceError);

  useEffect(() => {
    fetchTransactions();
  }, []);

  const renderBalance = () => {
    if (!loading && !error) {
      return (
        <div>
          <CumulativeBalance balance={balance} />
          <MonthlyBalance balance={monthlyBalance} />
        </div>
      );
    }
  };

  const renderLoading = () => {
    if (loading) {
      return <LoadingView />;
    }
  };

  const renderError = () => {
    if (error) {
      return <ErrorView errorMessage={error} />;
    }
  };

  return (
    <div>
      {renderLoading()}
      {renderError()}
      {renderBalance()}
    </div>
  );
};

export default BalancePage;
