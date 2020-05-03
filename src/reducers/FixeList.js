import {AnsweredQuestionBySort} from '../constant/constant';
import createReducer from '../utils/createReducer';

const initialState = {
  isLoaded: false,
  recent: [],
  List: [],
  Log: '',
};
const actionHandler = {
  [AnsweredQuestionBySort.LIST]: (state, action) => {

    return {isLoaded: true, data: action.data};
  },
  [AnsweredQuestionBySort.GROUPS]: (state, action) => {

    return {isLoadedGroups: true, dataGroups: action.data};
  },
};
export default createReducer(initialState, actionHandler);
