import {API_BASE, API_BASE_TWO} from '../service/api_constance';
//Login
const address = {
  postLogin: e => {
    return `${API_BASE}/teacher/TeacherLogin`;
  },
  postAnsweredQuestion: e => {
    return `${API_BASE}/teacher/getAnsweredQuestion`;
  },
  postGroups: e => {
    return `${API_BASE}/teacher/GetGroups`;
  },
  postCourse: e => {
    return `${API_BASE}/teacher/GetCourse`;
  },
  //=========>
  postAllQuestion: e => {
    return `${API_BASE}/teacher/GetAnsweredQuestion`;
  },
  postAnsweredQuestionCourseBase: e => {
    return `${API_BASE}/teacher/GetAnsweredQuestionCourseBase`;
  },

  postQuestionGroupBase: e => {
    return `${API_BASE}/teacher/GetAnsweredQuestionGroupBase`;
  },
  //=========>
  postAllNo: e => {
    return `${API_BASE}/teacher/GetAllNoAnsweredQuestion`;
  },
  postGetNoAnsweredQuestionCourseBase: e => {
    return `${API_BASE}/teacher/GetNoAnsweredQuestionCourseBase`;
  },
  postNoQuestionGroupBase: e => {
    return `${API_BASE}/teacher/GetNoAnsweredQuestionGroupBase`;
  },
  //=========>
  postAllReserved: e => {
    return `${API_BASE}/teacher/GetReservedQuestion`;
  },
  postReserved: e => {
    return `${API_BASE}/teacher/GetReservedQuestionCourseBase`;
  },
  
  postReservedGroupBase: e => {
    return `${API_BASE}/teacher/GetReservedQuestionGroupBase`;
  },
};

export default address;
