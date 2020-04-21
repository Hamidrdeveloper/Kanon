import {AnsweredQuestion} from '../constant/constant';
import createReducer from '../utils/createReducer';

const initialState = {
  isLoaded: false,
  recent: [],
  List: [],
  Log: '',
};
const actionHandler = {
  [AnsweredQuestion.List]: (state, action) => {
    return {isLoaded: true, recent: [], List: action.data, Log: ''};
  },
};
export default createReducer(initialState, actionHandler);
