import axios, { AxiosError } from 'axios';
import { Dispatch } from 'redux';
import Transaction from '../../interfaces/transaction';
import { ActionType } from '../action-types';
import { Action } from '../actions';
import { parseTransactions } from '../../utils';
import config from '../../config.json';

export const fetchTransactions = () => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.FETCH_TRANSACTIONS,
    });

    try {
      const { data } = await axios.get(`${config.baseApi}/transactions`);
      const transactions: Transaction[] = parseTransactions(data);

      dispatch({
        type: ActionType.FETCH_TRANSACTIONS_SUCCESS,
        payload: transactions,
      });
    } catch (err) {
      const error = err as AxiosError;
      dispatch({
        type: ActionType.FETCH_TRANSACTIONS_ERROR,
        payload: error.message,
      });
    }
  };
};
