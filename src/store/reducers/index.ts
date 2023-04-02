import { combineReducers } from 'redux';
import cumulativeBalanceReducer from './cumulativeBalanceReducer';
import monthlyBalanceReducer from './monthlyBalanceReducer';
import balanceErrorReducer from './balanceErrorReducer';
import balanceLoadingReducer from './balanceLoadingReducer';

const reducers = combineReducers({
  balance: cumulativeBalanceReducer,
  monthlyBalance: monthlyBalanceReducer,
  balanceError: balanceErrorReducer,
  balanceLoading: balanceLoadingReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
