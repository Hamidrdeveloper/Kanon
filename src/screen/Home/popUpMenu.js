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
import PropTypes from 'prop-types';

import {Card} from 'react-native-paper';
import Carousel, {getInputRangeFromIndexes} from 'react-native-snap-carousel';
import background from '../../../assets/images/abstract.png';

import backgroundC from '../../../assets/images/abstract2.png';
import back from '../../../assets/images/back.png';
import circle from '../../../assets/images/circaleBack.png';
import style from './Style/style';
import {FlatList} from 'react-native-gesture-handler';
import Fixed from '../FixeTest/Fixed';
import {AirbnbRating} from '../../react_native_ratings_example';
import Icon from 'react-native-vector-icons/FontAwesome';
let screenWidth = Dimensions.get('window').width;
class PopUpMenu extends React.Component {
  _openScreen() {
    let {navigation} = this.props;
    navigation.navigate('Home');
  }
  _hideModalMenu = () => {
    this.props.changeState(false);
  };
  render() {
    let {
      textTitlePopUpMenu,
      datePopUp,
      viewItem,
      viewCircleII,
      circleTitle,
      detail,
      viewIconService,
      lineService,
      textServicePopUpMenu,
      textRating,
      viewFullCardButton,
      cardButton,
      viewTextRating,
    } = style;
    return (
      <View
        style={{height: '100%', width: '100%', backgroundColor: 'transparent'}}>
        <View
          style={[
            viewItem,
            {
              flexDirection: 'column',
              height: '100%',
              alignItems: 'center',
              paddingLeft: 30,
              paddingRight: 30,
            },
          ]}>
          <TouchableOpacity
            onPress={() => {
              this._hideModalMenu();
            }}>
            <View
              style={{
                width: 50,
                height: 4,
                borderRadius: 8,
                backgroundColor: Res.Color.grayLight,
              }}
            />
          </TouchableOpacity>
          <Text style={textTitlePopUpMenu}>{'فارسی نهم'}</Text>
          <View style={viewFullCardButton}>
            <View style={cardButton}>
              <View style={viewTextRating}>
                <Text allowFontScaling={false} style={textRating}>
                  {'امتیاز:'}
                </Text>

                <View>
                  <AirbnbRating
                    starContainerStyle={{
                      alignSelf: 'flex-start',
                    }}
                    size={23}
                    isDisabled={true}
                    showRating={false}
                    defaultRating={5}
                  />
                </View>
              </View>
            </View>
          </View>
          <View
            style={{
              width: '100%',
              height: 1,
              backgroundColor: Res.Color.grayLight,
              marginTop: 15,
            }}
          />
          <View style={viewIconService}>
            <Text style={textServicePopUpMenu}>ارتباط با ما</Text>
            <View style={{width: 8}} />
            <Icon name="phone" size={15} />
          </View>
          <View style={lineService} />
          <View style={viewIconService}>
            <Text style={textServicePopUpMenu}>خروج از حساب</Text>
            <View style={{width: 8}} />
            <Icon name="sign-out" size={15} />
          </View>
          <View style={lineService} />
          <View style={viewIconService}>
            <Text style={textServicePopUpMenu}>درباره ما</Text>
            <View style={{width: 8}} />
            <Icon name="info-circle" size={15} />
          </View>
          <View style={lineService} />
        </View>
      </View>
    );
  }
  static propsType = {
    changeState: PropTypes.func,
  };
}

export default PopUpMenu;
