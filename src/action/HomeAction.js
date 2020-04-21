import Channel from '../channel/indext';

var channel = new Channel();
function _onAnsweredQuestion(e) {
  return channel.onPostAnsweredQuestion(e).then(data => {
    return dispatch({
        
    });
  });
}

export default {_onAnsweredQuestion};
