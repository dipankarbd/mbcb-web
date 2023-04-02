import { ActionType } from '../action-types';
import { Action } from '../actions';

const initialState: boolean = false;

const reducer = (state = initialState, action: Action): boolean => {
  switch (action.type) {
    case ActionType.FETCH_TRANSACTIONS:
      return true;
    case ActionType.FETCH_TRANSACTIONS_SUCCESS:
    case ActionType.FETCH_TRANSACTIONS_ERROR:
      return false;
    default:
      return state;
  }
};

export default reducer;
