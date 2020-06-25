import axios from 'react-native-axios';
import address from './address';
import {UserData} from '../model/userData';

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
          UserData.jsonData = res.data.Data;
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

  onPostGroups(e) {
    var add = address.postGroups();
    console.log(add);
    return axios
      .post(add)
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
  onPostCourse(e) {
    var add = address.postCourse();
    console.log(add);
    return axios
      .post(add, {
        groupcode: e,
      })
      .then(res => {
        console.log(res.data.Data);
        console.log(res.data);
        if (res.data.Status === 1) {
          return res.data.Data.lessons;
        } else {
          return '0';
        }
      })
      .catch(error => {
        console.log(error);
        return '0';
      });
  }

  onAllQuestion(teacherId) {
    var add = address.postAllQuestion();
    console.log(add);

    return axios
      .post(add, {
        teacherId: teacherId,
      })
      .then(res => {
        console.log('onAllQuestion', res.data.Data.questions);
        console.log('onAllQuestion', res.data);
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
  onPosAnsweredQuestionCourseBase(teacherId, groupCode, crsId) {
    var add = address.postAnsweredQuestionCourseBase();
    if (crsId === null) {
      add = address.postQuestionGroupBase();
    } else {
      add = address.postAnsweredQuestionCourseBase();
    }
    console.log(add);
    console.log(teacherId, groupCode, crsId);
    return axios
      .post(add, {
        teacherId: teacherId,
        groupCode: groupCode,
        crsId: crsId,
      })
      .then(res => {
        console.log('onPosAnsweredQuestionCourseBase', res.data.Data.questions);
        console.log('onPosAnsweredQuestionCourseBase', res.data);
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
  onAllReserved(teacherId) {
    var add = address.postAllReserved();
    console.log(add);

    return axios
      .post(add, {
        teacherId: teacherId,
      })
      .then(res => {
        console.log('onAllQuestion', res.data.Data.questions);
        console.log('onAllQuestion', res.data);
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
  onPostReserved(teacherId, groupCode, crsId) {
    var add = address.postReserved();

    if (crsId === null) {
      add = address.postReservedGroupBase();
    } else {
      add = address.postReserved();
    }
    console.log(add);
    return axios
      .post(add, {
        teacherId: teacherId,
        groupCode: groupCode,
        crsId: crsId,
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
  onQuestionCourseBase(teacherId, groupCode, crsId) {
    var add = address.postReserved();
    console.log(add);
    return axios
      .post(add, {
        teacherId: teacherId,
        groupCode: groupCode,
        crsId: crsId,
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

  onAllNo() {
    var add = address.postAllNo();

    console.log(add);

    return axios
      .post(add)
      .then(res => {
        console.log('onAllNo', res.data.Data.questions);
        console.log('onAllNo', res.data);
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
  onNoAnsweredQuestionCourseBase(teacherId, groupCode, crsId) {
    var add = '';

    console.log('crsId', crsId);
    if (crsId === null) {
      add = address.postNoQuestionGroupBase();
    } else {
      add = address.postGetNoAnsweredQuestionCourseBase();
    }
    console.log(add);

    return axios
      .post(add, {
        teacherId: teacherId,
        groupCode: groupCode,
        crsId: crsId,
      })
      .then(res => {
        console.log('onNoAnsweredQuestionCourseBase', res.data.Data);
        console.log('onNoAnsweredQuestionCourseBase', res.data);
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

  postDeleteReserveQuestion(teacherId, questionId) {
    var add = address.DeleteReserveQuestion();

    console.log(add);

    return axios
      .post(add, {
        teacherId: teacherId,
        questionId: questionId,
      })
      .then(res => {
        console.log('postDeleteReserveQuestion', res);
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
  postInsertAnswer(answerText, SumSbjId, questionId, teacherId, SumObjId) {
    var add = address.InsertAnswer();

    console.log(
      add +
        answerText +
        '' +
        SumSbjId +
        '' +
        questionId +
        '' +
        teacherId +
        '' +
        SumObjId,
    );

    return axios
      .post(add, {
        teacherId: teacherId,
        questionId: questionId,
        answerText: answerText,
        SumObjId: SumObjId,
        SumSbjId: SumSbjId,
      })
      .then(res => {
        console.log('postDeleteReserveQuestion', res);
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
  postSetAnswerFilePath2(voiceFileName, imageFileName, questionId, teacherId) {
    var add = address.SetAnswerFilePath2();

    console.log(add);

    return axios
      .post(add, {
        teacherId: teacherId,
        questionId: questionId,
        voiceFileName: voiceFileName,
        imageFileName: imageFileName,
      })
      .then(res => {
        console.log('postDeleteReserveQuestion', res);
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
  postAnswerUpload(answerId, image, voice) {
    var add = address.AnswerUpload(answerId);
    console.log('postAnswerUpload', add);
    let data = new FormData();
    data.append('photo', {
      uri: image.uri,
      type: image.type,
      name: image.fileName,
    });
    data.append('file', {
      uri: voice.uri,
      type: voice.type,
      name: voice.fileName,
    });
    console.log(voice);
    // console.log(image);
    return axios({
      url: add,
      method: 'POST',
      data: data,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
        Authorization: 'Basic YnJva2VyOmJyb2tlcl8xMjM=',
      },
    })
      .then(res => {
        console.log('postAnswerUpload', res);
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
  postSaveReserved(teacherId, questionId) {
    var add = address.postSaveReserved();
    console.log('postSaveReserved', add);
    // console.log(image);
    return axios
      .post(add, {
        teacherId: teacherId,
        questionId: questionId,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'multipart/form-data',
          Authorization: 'Basic YnJva2VyOmJyb2tlcl8xMjM=',
        },
      })
      .then(res => {
        console.log('postSaveReserved', res);
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
