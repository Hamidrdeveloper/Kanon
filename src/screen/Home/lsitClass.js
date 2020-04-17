import React from 'react';
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  Image,
  ImageBackground,
  Button,
} from 'react-native';
import {Card, Modal} from 'react-native-paper';
import Carousel, {getInputRangeFromIndexes} from 'react-native-snap-carousel';
import background from '../../../assets/images/abstract.png';
import alarm from '../../../assets/images/alarm.png';
import menu from '../../../assets/images/menu.png';
import backgroundC from '../../../assets/images/abstract2.png';
import PopUp from './popUp';
import style from './Style/style';
import PerformanceScreen from '../PerformanceTech/PerformanceScreen';
import Res from '../../Color/color';
import NotifyScreen from '../notify/notifyScreen';
import PropTypes from 'prop-types';
let screenWidth = Dimensions.get('window').width;
class ListClass extends React.Component {
  state = {
    isModalVisible: false,
    tabBarVisible: true,
    top: 0,
    isModalPerformance: false,
    isModalNotify: false,
  };
  _scrollInterpolator(index, carouselProps) {
    const range = [3, 2, 1, 0, -1];
    const inputRange = getInputRangeFromIndexes(range, index, carouselProps);
    const outputRange = range;

    return {inputRange, outputRange};
  }

  _animatedStyles(index, animatedValue, carouselProps) {
    const translateProp = 'translateY';
    const translatePropX = 'translateX';

    return {
      zIndex: carouselProps.data.length - index,
      opacity: animatedValue.interpolate({
        inputRange: [2, 3],
        outputRange: [1, 0],
      }),
      transform: [
        {
          rotate: animatedValue.interpolate({
            inputRange: [-1, 0, 1, 2, 3],
            outputRange: ['0deg', '0deg', '0deg', '0deg', '0deg'],
            extrapolate: 'default',
          }),
        },
        {
          [translateProp]: animatedValue.interpolate({
            inputRange: [-1, 0, 1, 2, 3],
            outputRange: [
              20,
              0,
              20, // centered
              20, // centered
              20, // centered
            ],
            extrapolate: 'default',
          }),
        },
        {
          [translatePropX]: animatedValue.interpolate({
            inputRange: [-1, 0, 1, 2, 3],
            outputRange: [
              -20,
              0,
              20, // centered
              20, // centered
              20, // centered
            ],
            extrapolate: 'default',
          }),
        },
      ],
    };
  }

  _hideTabBar = () => {

    this.props.hideTabBar(false);
  };

  renderGridItem() {
    let {
      textTitle,
      date,
      viewCircle,
      viewCircleII,
      circleTitle,
      detail,
      buttonItem,
      textButton,
      cardModelPerformance,
    } = style;
    return (
      <TouchableOpacity activeOpacity={1}>
        <Card
          style={{
            width: (screenWidth + 50) / 2,
            flexWrap: 'wrap',
            borderRadius: 15,
            paddingBottom: 30,
          }}>
          <Text style={textTitle}>{'فارسی نهم'}</Text>
          <Text style={date}>{'1398/08/23'}</Text>
          <View style={viewCircle}>
            <View style={viewCircleII}>
              <Text style={circleTitle}>{'نیم سال'}</Text>
            </View>
            <View style={viewCircleII}>
              <Text style={circleTitle}>{'نیم سال'}</Text>
            </View>
            <View style={viewCircleII}>
              <Text style={circleTitle}>{'نیم سال'}</Text>
            </View>
          </View>
          <Text style={detail}>
            {
              'سلام،در واژه نامه ی کتاب معنی سریر رو به صورت «تخت پادشاهی» نوشته،اگر تخت تنها هم بیاد درسته؟'
            }
          </Text>
          <TouchableOpacity onPress={this._hideTabBar}>
            <View style={buttonItem}>
              <Text style={textButton}>{'برسی سوال'}</Text>
            </View>
          </TouchableOpacity>
        </Card>
      </TouchableOpacity>
    );
  }

  render() {
    let {
      textButton,
      viewFull,
      imagePro,
      viewLine,
      textPerformance,
      cardModelPop,
      cardModelPerformance,
    } = style;
    return (
      <View style={[viewFull]}>
        <Carousel
          data={[1, 2, 3, 4, 5, 7, 9]}
          marginTop={30}
          horizontal={true}
          layout={'default'}
          scrollInterpolator={this._scrollInterpolator}
          slideInterpolatedStyle={this._animatedStyles}
          sliderWidth={screenWidth}
          itemWidth={(screenWidth + 50) / 2}
          renderItem={({item, index}) => this.renderGridItem()}
        />
      </View>
    );
  }
  static propTypes = {
    hideTabBar: PropTypes.func,
  };
}

export default ListClass;
