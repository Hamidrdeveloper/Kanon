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
};

export default address;
