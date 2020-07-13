import Channel from '../channel/indext';
import {AnsweredQuestion, GetSubject, GetObject} from '../constant/constant';
var channel = new Channel();
function _onAnsweredQuestion(e) {
  return dispatch => {
    return channel.onAllNo(e).then(data => {
      return dispatch({
        type: AnsweredQuestion.LIST,
        data: data,
      });
    });
  };
}
function _onGetSubject(e) {
  return dispatch => {
    return channel.postGetSubject(e).then(data => {
    
      return dispatch({
        type: GetSubject.LIST,
        data: data,
      });
    });
  };
}
function _onGetObject(e) {
  return dispatch => {
    return channel.postGetObject(e).then(data => {
      return dispatch({
        type: GetObject.LIST,
        data: data,
      });
    });
  };
}
export default {_onAnsweredQuestion, _onGetSubject, _onGetObject};
