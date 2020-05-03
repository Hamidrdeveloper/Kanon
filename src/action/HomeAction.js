import Channel from '../channel/indext';
import {AnsweredQuestion} from '../constant/constant';
var channel = new Channel();
function _onAnsweredQuestion(e) {
  return dispatch => {
    return channel.onPostAnsweredQuestion(e).then(data => {
      console.log('dispatch', data);
      return dispatch({
        type: AnsweredQuestion.LIST,
        data: data,
      });
    });
  };
}

export default {_onAnsweredQuestion};
