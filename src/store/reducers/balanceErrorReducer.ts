import { ActionType } from '../action-types';
import { Action } from '../actions';

const initialState: null | string = null;

const reducer = (
  state: null | string = initialState,
  action: Action
): null | string => {
  switch (action.type) {
    case ActionType.FETCH_TRANSACTIONS:
    case ActionType.FETCH_TRANSACTIONS_SUCCESS:
      return null;
    case ActionType.FETCH_TRANSACTIONS_ERROR:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
