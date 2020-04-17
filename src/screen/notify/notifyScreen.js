/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, Dimensions, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import {Card} from 'react-native-paper';

import style from './Style/style';
import Icon from 'react-native-vector-icons/FontAwesome';

class NotifyScreen extends React.Component {
  ratingCompleted(rating) {
    console.log('Rating is: ' + rating);
  }
  _hideModalNotify = () => {
    this.props.changeState(false);
  };
  render() {
    let {detail, viewForm, cardBottom, closeButton} = style;
    return (
      <View style={{width: '100%', height: '100%'}}>
        <Card style={viewForm}>
          <TouchableOpacity
            activeOpacity={10}
            style={{
              width: 20,
              height: 20,
            }}
            onPress={this._hideModalNotify}>
            <View style={closeButton}>
              <Icon name="remove" size={12} color="#000" />
            </View>
          </TouchableOpacity>
          <View>
            <Text style={detail}>موضوع نوتیفیکیشن :</Text>
            <View style={cardBottom} />
          </View>
        </Card>
      </View>
    );
  }
  static propsType = {
    changeState: PropTypes.func,
  };
}

export default NotifyScreen;
