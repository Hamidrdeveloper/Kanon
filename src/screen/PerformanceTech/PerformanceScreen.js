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
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import PropTypes from 'prop-types';
import {Card, TouchableRipple} from 'react-native-paper';
import Carousel, {getInputRangeFromIndexes} from 'react-native-snap-carousel';
import background from '../../../assets/images/abstract.png';

import Medal from '../../../assets/images/medal.png';
import Time from '../../../assets/images/time.png';
import number from '../../../assets/images/number.png';
import style from './Style/style';
import {FlatList} from 'react-native-gesture-handler';
import Res from '../../Color/color';
import {Rating, AirbnbRating} from '../../react_native_ratings_example/index';
import Icon from 'react-native-vector-icons/FontAwesome';
import back from '../../../assets/images/left_arrow.png';

let screenWidth = Dimensions.get('window').width;
class PerformanceScreen extends React.Component {
  ratingCompleted(rating) {
    console.log('Rating is: ' + rating);
  }
  _hideModalPerformance = () => {
    this.props.changeState(false);
  };
  render() {
    let {
      imageBottom,
      viewFull,
      textTitle,
      imagePro,
      detail,
      viewForm,
      imageCard,
      viewItemRow,
      space,
      buttonBack,
      viewRank,
      cardBottom,
      buttonItem,
      buttonLogin,
      cardButton,
      textRank,
      textTopRank,
      cardButtonMore,
      textBottomRank,
      textCardButton,
      viewFullCardButton,
      viewFullCardButtonmore,
      viewImageShowRank,
      viewTextShowRank,
      viewItemRowII,
      textShowRank,
      textRating,
      viewTextRating,
      cardBottomLine,
    } = style;
    return (
      <View style={{width: '100%', height: '100%'}}>
        <Card style={viewForm}>
          <TouchableRipple
            activeOpacity={10}
            style={{
              position: 'absolute',
              width: 25,
              height: 25,
            }}
            onPress={() => {
              this._hideModalPerformance();
            }}>
            <View
              style={{
                position: 'absolute',
                backgroundColor: Res.Color.grayLight,
                borderRadius: 100,
                padding: 5,
                width: 25,
                height: 25,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Icon name="remove" size={20} color="#000" />
            </View>
          </TouchableRipple>

          <View style={imageCard}>
            <Card.Cover
              style={imagePro}
              source={{
                uri:
                  'https://cdn01.zoomit.ir/2018/10/e3d98770-8164-49cc-a419-6f0bd80c3b2c.jpg',
              }}
            />
            <Text allowFontScaling={false} style={detail} fon>
              {'نام نام خانوادگی'}
            </Text>
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
            <View style={viewItemRow}>
              <View>
                <Text allowFontScaling={false} style={textTopRank}>
                  {'نام نام خانوادگی'}
                </Text>
                <View style={[viewRank, {height: hp(7)}]}>
                  <Text allowFontScaling={false} style={textRank}>
                    3
                  </Text>
                </View>
              </View>
              <View>
                <Text allowFontScaling={false} style={textTopRank}>
                  {'نام نام خانوادگی'}
                </Text>
                <View style={viewRank}>
                  <Text allowFontScaling={false} style={textRank}>
                    1
                  </Text>
                </View>
              </View>
              <View>
                <Text allowFontScaling={false} style={textTopRank}>
                  {'نام نام خانوادگی'}
                </Text>
                <View style={[viewRank, {height: hp(10)}]}>
                  <Text allowFontScaling={false} style={textRank}>
                    2
                  </Text>
                </View>
              </View>
            </View>
            <View style={viewFullCardButtonmore}>
              <Card style={cardButtonMore}>
                <View style={viewTextShowRank}>
                  <Text allowFontScaling={false} style={textShowRank}>
                    {'مشاهده جایگاه شما'}
                  </Text>

                  <View style={viewImageShowRank}>
                    <Image source={back} style={buttonBack} />
                  </View>
                </View>
              </Card>
            </View>
            <View
              style={{
                width: '100%',
                height: 1,
                backgroundColor: Res.Color.primers,
                marginTop: 15,
              }}
            />
            <View style={viewItemRow}>
              <Image source={Medal} resizeMode="center" style={imageBottom} />
              <Image source={Time} resizeMode="center" style={imageBottom} />
              <Image source={number} resizeMode="center" style={imageBottom} />
            </View>
            <View style={viewItemRow}>
              <Text
                allowFontScaling={false}
                style={[textBottomRank, {flex: 1, textAlign: 'right'}]}>
                رتبه دربین 100 نفر
              </Text>
              <Text
                allowFontScaling={false}
                style={[textBottomRank, {flex: 1}]}>
                رتبه دربین 100 نفر
              </Text>
              <Text
                allowFontScaling={false}
                style={[textBottomRank, {flex: 1}]}>
                رتبه دربین 100 نفر
              </Text>
            </View>
            <View style={viewItemRow}>
              <View style={cardBottom}>
                <Text
                  allowFontScaling={false}
                  style={[textBottomRank, {flex: 1}]}>
                  رتبه دربین 100 نفر
                </Text>
                <Text
                  allowFontScaling={false}
                  style={[textBottomRank, {flex: 1, color: Res.Color.gray}]}>
                  رتبه دربین 100 نفر
                </Text>
                <Text
                  allowFontScaling={false}
                  style={[textBottomRank, {flex: 1, color: Res.Color.gray}]}>
                  رتبه دربین 100 نفر
                </Text>
                <Text
                  allowFontScaling={false}
                  style={[textBottomRank, {flex: 1, color: Res.Color.gray}]}>
                  رتبه دربین 100 نفر
                </Text>
              </View>
              <View style={cardBottomLine} />
              <View style={cardBottom}>
                <Text
                  allowFontScaling={false}
                  style={[textBottomRank, {flex: 1}]}>
                  رتبه دربین 100 نفر
                </Text>
                <Text
                  allowFontScaling={false}
                  style={[textBottomRank, {flex: 1, color: Res.Color.gray}]}>
                  رتبه دربین 100 نفر
                </Text>
                <Text
                  allowFontScaling={false}
                  style={[textBottomRank, {flex: 1, color: Res.Color.gray}]}>
                  رتبه دربین 100 نفر
                </Text>
                <Text
                  allowFontScaling={false}
                  style={[textBottomRank, {flex: 1, color: Res.Color.gray}]}>
                  رتبه دربین 100 نفر
                </Text>
              </View>
            </View>
          </View>
        </Card>
      </View>
    );
  }
  static propsType = {
    changeState: PropTypes.func,
  };
}

export default PerformanceScreen;
