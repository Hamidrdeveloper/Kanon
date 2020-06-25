import Channel from '../channel/indext';
import {
  AnsweredQuestionBySort,
  AnsweredQuestionCourseBase,
} from '../constant/constant';
var channel = new Channel();
function _onAnsweredQuestionBySort(e) {
  return dispatch => {
    return channel.onPostAnsweredQuestion(e).then(data => {
      console.log('dispatch', data);
      return dispatch({
        type: AnsweredQuestionBySort.LIST,
        data: data,
      });
    });
  };
}
function _onAllAnsweredQuestion(teacherId) {
  return dispatch => {
    return channel.onAllQuestion(teacherId).then(data => {
      console.log('dispatch', data);
      return dispatch({
        type: AnsweredQuestionCourseBase.LIST,
        data: data,
      });
    });
  };
}
function _onAnsweredQuestionCourseBase(teacherId, groupCode, crsId) {
  return dispatch => {
    return channel
      .onPosAnsweredQuestionCourseBase(teacherId, groupCode, crsId)
      .then(data => {
        console.log('dispatch', data);
        return dispatch({
          type: AnsweredQuestionCourseBase.LIST,
          data: data,
        });
      });
  };
}
function _onAllAnsweredReserved(teacherId) {
  return dispatch => {
    return channel.onAllReserved(teacherId).then(data => {
      console.log('dispatch', data);
      return dispatch({
        type: AnsweredQuestionCourseBase.LIST,
        data: data,
      });
    });
  };
}
function _onReservedQuestionCourseBase(teacherId, groupCode, crsId) {
  return dispatch => {
    return channel.onPostReserved(teacherId, groupCode, crsId).then(data => {
      console.log('dispatch', data);
      return dispatch({
        type: AnsweredQuestionCourseBase.LIST,
        data: data,
      });
    });
  };
}
function _onAllNoAnswered() {
  return dispatch => {
    return channel.onAllNo().then(data => {
      console.log('dispatch', data);
      return dispatch({
        type: AnsweredQuestionCourseBase.LIST,
        data: data,
      });
    });
  };
}
function _onNoAnsweredQuestionCourseBase(teacherId, groupCode, crsId) {
  return dispatch => {
    return channel
      .onNoAnsweredQuestionCourseBase(teacherId, groupCode, crsId)
      .then(data => {
        console.log('dispatch', data);
        return dispatch({
          type: AnsweredQuestionCourseBase.LIST,
          data: data,
        });
      });
  };
}
function _onGroups(e) {
  return dispatch => {
    return channel.onPostGroups(e).then(data => {
      console.log('dispatch', data);
      return dispatch({
        type: AnsweredQuestionBySort.GROUPS,
        data: data,
      });
    });
  };
}
function _onCourse(e) {
  return dispatch => {
    return channel.onPostCourse(e).then(data => {
      console.log('dispatch', data);
      return dispatch({
        type: AnsweredQuestionBySort.COURSE,
        data: data,
      });
    });
  };
}
function _onDeleteReserveQuestion(teacherId, questionId) {
  return dispatch => {
    return channel
      .postDeleteReserveQuestion(teacherId, questionId)
      .then(data => {
        console.log('dispatch', data);
        return dispatch({});
      });
  };
}

function _onPostInsertAnswer(
  answerText,
  SumSbjId,
  questionId,
  teacherId,
  SumObjId,
) {
  return channel
    .postInsertAnswer(answerText, SumSbjId, questionId, teacherId, SumObjId)
    .then(data => {
      console.log('dispatch', data);
      return data;
    });
}
function _onPostSaveReserved(teacherId, questionId) {
  return channel.postSaveReserved(teacherId, questionId).then(data => {
    console.log('dispatch', data);
    return data;
  });
}
function _onPstSetAnswerFilePath2(
  voiceFileName,
  imageFileName,
  questionId,
  teacherId,
) {
  return channel
    .postSetAnswerFilePath2(voiceFileName, imageFileName, questionId, teacherId)
    .then(data => {
      console.log('dispatch', data);
      return data;
    });
}
function _onPostAnswerUpload(answerId, image, voice) {
  return channel.postAnswerUpload(answerId, image, voice).then(data => {
    console.log('dispatch', data);
    return data;
  });
}

export default {
  _onAnsweredQuestionBySort,
  _onGroups,
  _onCourse,
  _onPostInsertAnswer,
  _onPstSetAnswerFilePath2,
  _onAnsweredQuestionCourseBase,
  _onReservedQuestionCourseBase,
  _onNoAnsweredQuestionCourseBase,
  _onAllAnsweredQuestion,
  _onAllNoAnswered,
  _onPostAnswerUpload,
  _onAllAnsweredReserved,
  _onDeleteReserveQuestion,
  _onPostSaveReserved
};
