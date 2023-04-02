import { ActionType } from '../action-types';
import { Action } from '../actions';
import { calculateMAB } from '../../utils';

const initialState: {
  month: string;
  avarage: number;
}[] = [];

const reducer = (
  state = initialState,
  action: Action
): {
  month: string;
  avarage: number;
}[] => {
  switch (action.type) {
    case ActionType.FETCH_TRANSACTIONS:
    case ActionType.FETCH_TRANSACTIONS_ERROR:
      return [];
    case ActionType.FETCH_TRANSACTIONS_SUCCESS:
      return calculateMAB(action.payload);
    default:
      return state;
  }
};

export default reducer;
