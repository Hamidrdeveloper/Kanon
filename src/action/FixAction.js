import Channel from '../channel/indext';
import {AnsweredQuestionBySort} from '../constant/constant';
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

export default {_onAnsweredQuestionBySort, _onGroups};
