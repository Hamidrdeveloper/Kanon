import {AnsweredQuestion, GetSubject, GetObject} from '../constant/constant';
import createReducer from '../utils/createReducer';

const initialState = {
  isLoaded: false,
  recent: [],
  List: [],
  Log: '',
};
const actionHandler = {
  [AnsweredQuestion.LIST]: (state, action) => {
    return {isLoaded: true, data: action.data};
  },
  [GetSubject.LIST]: (state, action) => {
    return {isLoadedGetSubject: true, dataGetSubject: action.data};
  },
  [GetObject.LIST]: (state, action) => {
    return {isLoadedGetObject: true, dataGetObject: action.data};
  },
};

export default createReducer(initialState, actionHandler);
