/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  Image,
  ImageBackground,
  ScrollView,
  TextInput,
} from 'react-native';
import Res from '../../Color/color';

import {Card} from 'react-native-paper';
import Carousel, {getInputRangeFromIndexes} from 'react-native-snap-carousel';
import background from '../../../assets/images/abstract.png';

import backgroundC from '../../../assets/images/abstract2.png';
import back from '../../../assets/images/back.png';
import circle from '../../../assets/images/circaleBack.png';
import style from './Style/style';
import {FlatList} from 'react-native-gesture-handler';
import Fixed from '../FixeTest/Fixed';
let screenWidth = Dimensions.get('window').width;
class PopUp extends React.Component {
  _openScreen() {
    let {navigation} = this.props;
    navigation.navigate('Home');
  }
  render() {
    let {
      textTitlePopUp,
      datePopUp,
      viewItem,
      viewCircleII,
      circleTitle,
      detail,
      buttonItem,
      textButton,
      viewItemRow,
      viewItemRowII,
      viewItemRowIII,
      viewDetail,
      imageCard,
    } = style;
    return (
      <View
        style={{height: '100%', width: '100%', backgroundColor: 'transparent'}}>
        <View style={viewItem}>
          <View style={viewItemRow}>
            <Text style={textTitlePopUp}>{'فارسی نهم'}</Text>

            <View>
              <Text style={datePopUp}>{'آزمون کانون'}</Text>
              <Text style={datePopUp}>{'1398/08/23'}</Text>
            </View>
          </View>
          <View style={[viewItemRow, {justifyContent: 'space-between'}]}>
            <View
              style={{
                flex: 1,

                height: 50,
                borderRadius: 10,

                backgroundColor: Res.Color.grayLight,
              }}
            />
            <View style={{width: 10}} />
            <View
              style={{
                flex: 1,

                height: 50,
                borderRadius: 10,
                backgroundColor: Res.Color.grayLight,
              }}
            />
          </View>
          <View
            style={{
              width: '100%',
              height: 230,
              top: 10,
              borderRadius: 10,
              backgroundColor: Res.Color.grayLight,
            }}
          />
          <View
            style={[
              viewItemRow,
              {
                position: 'absolute',
                bottom: 0,
                width: '100%',
                paddingLeft: 15,
                paddingBottom: 15,
                marginBottom:15
              },
            ]}>
            <TouchableOpacity style={{width: '50%', height: 50}} onPress={this._hideTabBar}>
              <View style={[buttonItem, {width: '100%', height: 50}]}>
                <Text style={textButton}>{'برسی سوال'}</Text>
              </View>
            </TouchableOpacity>
            <View style={{width: 10}} />

            <TouchableOpacity style={{width: '50%', height: 50}} onPress={this._hideTabBar}>
              <View style={[buttonItem, {width: '100%', height: 50}]}>
                <Text style={textButton}>{'برسی سوال'}</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export default PopUp;
