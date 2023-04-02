import { ActionType } from '../action-types';
import { Action } from '../actions';
import { calculateCumulativeBalance } from '../../utils';

const initialState = 0.0;

const reducer = (state: number = initialState, action: Action): number => {
  switch (action.type) {
    case ActionType.FETCH_TRANSACTIONS:
    case ActionType.FETCH_TRANSACTIONS_ERROR:
      return 0.0;
    case ActionType.FETCH_TRANSACTIONS_SUCCESS:
      return calculateCumulativeBalance(action.payload);

    default:
      return state;
  }
};

export default reducer;
