import React from 'react';
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import {Card} from 'react-native-paper';
import Carousel, {getInputRangeFromIndexes} from 'react-native-snap-carousel';
import background from '../../../assets/images/abstract.png';

import backgroundC from '../../../assets/images/abstract2.png';

import style from '../MakingTest/Style/style';
let screenWidth = Dimensions.get('window').width;
class Home extends React.Component {
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

          <View style={buttonItem}>
            <Text style={textButton}>{'برسی سوال'}</Text>
          </View>
        </Card>
      </TouchableOpacity>
    );
  }
  render() {
    let {textButton, viewFull, imagePro, viewLine} = style;
    return (
      <View style={viewFull}>
        <ImageBackground source={background} style={viewFull}>
          <Image
            style={{
              width: '100%',
              height: '50%',
              position: 'absolute',
              bottom: 0,
            }}
            resizeMode="stretch"
            source={backgroundC}
          />

          <Image
            source={{
              uri:
                'https://cdn01.zoomit.ir/2018/10/e3d98770-8164-49cc-a419-6f0bd80c3b2c.jpg',
            }}
            style={imagePro}
          />
          <Text
            style={{
              textAlign: 'center',
              color: '#000',
              fontSize: 22,
              marginTop: 8,
              fontFamily: 'BYekan',
            }}>
            حمید رضا علیزاده
          </Text>

          <Card style={viewLine}>
            <Text
              style={{
                color: '#000',
                textAlign: 'center',
                textAlignVertical: 'center',
                fontFamily: 'BYekan',
                height: `100%`,
              }}>
              مشاهده ی گزارش عملکرد 5/5
            </Text>
          </Card>

          <Carousel
            data={[1, 2, 3, 4, 5, 7, 9]}
            marginTop={70}
            horizontal={true}
            layout={'default'}
            scrollInterpolator={this._scrollInterpolator}
            slideInterpolatedStyle={this._animatedStyles}
            sliderWidth={screenWidth}
            itemWidth={(screenWidth + 50) / 2}
            renderItem={({item, index}) => this.renderGridItem()}
          />
        </ImageBackground>
      </View>
    );
  }
}

export default Home;
