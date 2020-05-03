import axios from 'react-native-axios';
import address from './address';
export default class Channel {
  constructor(options) {
    this.options = options;
  }
  onPostLogin(e) {
    var add = address.postLogin();
    console.log(add);
    return axios
      .post(add, {
        nationalCode: e,
      })
      .then(res => {
        console.log(res);
        console.log(res.data.Data.teacherInfo);
        if (res.data.Status === 1) {
          return res.data.Data.teacherInfo;
        } else {
          return '0';
        }
      })
      .catch(error => {
        console.log(error);
        return '0';
      });
  }
  onPostAnsweredQuestion(e) {
    var add = address.postAnsweredQuestion();
    console.log(add);
    return axios
      .post(add, {
        teacherId: e,
      })
      .then(res => {
        console.log(res.data.Data.questions);
        console.log(res.data);
        if (res.data.Status === 1) {
          return res.data.Data.questions;
        } else {
          return '0';
        }
      })
      .catch(error => {
        console.log(error);
        return '0';
      });
  }
  onPostGroups(e) {
    var add = address.postGroups();
    console.log(add);
    return axios
      .post(add, {
        teacherId: e,
      })
      .then(res => {
        console.log(res.data.Data);
        console.log(res.data);
        if (res.data.Status === 1) {
          return res.data.Data;
        } else {
          return '0';
        }
      })
      .catch(error => {
        console.log(error);
        return '0';
      });
  }
}
