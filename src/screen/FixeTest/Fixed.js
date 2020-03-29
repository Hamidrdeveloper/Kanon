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
} from 'react-native';
import {Card} from 'react-native-paper';
import Carousel, {getInputRangeFromIndexes} from 'react-native-snap-carousel';
import background from '../../../assets/images/abstract.png';

import backgroundC from '../../../assets/images/abstract2.png';
import back from '../../../assets/images/back.png';
import circle from '../../../assets/images/circaleBack.png';
import style from './Style/style';
import {FlatList} from 'react-native-gesture-handler';
let screenWidth = Dimensions.get('window').width;
class Fixed extends React.Component {
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
      <TouchableOpacity activeOpacity={1}>
        <Card
          style={{
            width: '100%',
            borderRadius: 30,
            marginTop: 15,
          }}>
          <Image style={imageCard} resizeMode="stretch" source={circle} />
          <View style={viewItem}>
            <Text style={textTitle}>{'فارسی نهم'}</Text>
            <View style={viewItemRow}>
              <Text style={viewItemRowII}>{'1398/08/23'}</Text>
              <View>
                <Text style={date}>{'آزمون کانون'}</Text>
                <Text style={date}>{'1398/08/23'}</Text>
              </View>
            </View>
            <View style={viewItemRow}>
              <View style={viewDetail}>
                <Text style={detail}>
                  {
                    'را سوالات نمیاد؟اسلا اینجا سوال داره؟اها راستی نصبم نمیشه لطفا سریع جواب بدین وگرنه مامانم کلمو میکنه اگر سایتی پیدا نکنم که سوالات انلاین داشته باشه حل کنم'
                  }
                </Text>
              </View>
              <View style={buttonItem}>
                <Text style={textButton}>{'برسی سوال'}</Text>
              </View>
            </View>
          </View>
        </Card>
      </TouchableOpacity>
    );
  }
  render() {
    let {
      imageBottom,
      viewFull,
      buttonBack,
      textHeder,
      viewHeder,
      space,
      viewLine,
      flatListStyle,
      textInputItem,
      viewFullIem,
      cardButton,
      viewCardButton,
      textCardButton,
      viewFullCardButton,
    } = style;
    return (
      <View style={viewFull}>
        <ImageBackground source={background} style={viewFull}>
          <Image
            style={imageBottom}
            resizeMode="stretch"
            source={backgroundC}
          />
          <ScrollView style={{marginBottom: 15}}>
            <View style={viewHeder}>
              <Image source={back} style={buttonBack} />

              <Text style={textHeder}>رفع اشکال</Text>
            </View>
            <View style={viewHeder}>
              <View style={viewFullIem}>
                <Card style={viewLine}>
                  <Text style={textInputItem}>رفع اشکال </Text>
                </Card>
              </View>
              <View style={viewFullIem}>
                <Card style={viewLine}>
                  <Text style={textInputItem}>رفع اشکال </Text>
                </Card>
              </View>
            </View>
           
            <FlatList
              data={[1, 2, 3, 4, 5, 7, 9]}
              marginTop={10}
              layout={'default'}
              style={flatListStyle}
              showsVerticalScrollIndicator={false}
              scrollInterpolator={this._scrollInterpolator}
              slideInterpolatedStyle={this._animatedStyles}
              sliderWidth={screenWidth}
              itemWidth={(screenWidth + 50) / 2}
              renderItem={({item, index}) => this.renderGridItem()}
            /> 
          </ScrollView>
          <View style={viewFullCardButton}>
            <Card style={cardButton}>
              <View style={viewCardButton}>
                <Text style={textCardButton}>پاسخ داده نشده</Text>
                <Text style={textCardButton}>پاسخ داده نشده</Text>
                <Text style={textCardButton}>پاسخ داده نشده</Text>
              </View>
            </Card>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

export default Fixed;
