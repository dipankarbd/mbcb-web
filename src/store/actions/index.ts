import { ActionType } from '../action-types';
import Transaction from '../../interfaces/transaction';

interface FetchTransactionsAction {
  type: ActionType.FETCH_TRANSACTIONS;
}

interface FetchTransactionsSuccessAction {
  type: ActionType.FETCH_TRANSACTIONS_SUCCESS;
  payload: Transaction[];
}

interface FetchTransactionsErrorAction {
  type: ActionType.FETCH_TRANSACTIONS_ERROR;
  payload: string;
}

export type Action =
  | FetchTransactionsAction
  | FetchTransactionsSuccessAction
  | FetchTransactionsErrorAction;
