import {AnsweredQuestionBySort, AnsweredQuestionCourseBase} from '../constant/constant';
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
  [AnsweredQuestionBySort.COURSE]: (state, action) => {

    return {isLoadedCourse: true, dataCourse: action.data};
  },
  [AnsweredQuestionCourseBase.LIST]: (state, action) => {

    return {isLoadedCourse: true, dataCourseBase: action.data};
  },
};
export default createReducer(initialState, actionHandler);
