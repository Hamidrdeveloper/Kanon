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

import backgroundC from '../../../assets/images/abstract2.png';
import PopUp from './popUp';
import style from './Style/style';
import PerformanceScreen from '../PerformanceTech/PerformanceScreen';
let screenWidth = Dimensions.get('window').width;
class Home extends React.Component {
  state = {isModalVisible: false, tabBarVisible: true, top: 0,isModalPerformance:true};

  static navigationOptions = ({navigation}) => {
    const {params} = navigation.state;

    return {
      tabBarVisible: true,
    };
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
  _openPopUp = () => {
    let {navigation} = this.props;
    this._hideTabBar();
    this.setState({
      isModalVisible: true,
    });
  };
  _hideTabBar = () => {
    this.props.navigation.setParams({tabBarVisible: !this.state.tabBarVisible});
    this.setState({
      tabBarVisible: !this.state.tabBarVisible,
      isModalVisible: !this.state.isModalVisible,
    });
  };
  _hideModalPerformance = e => {
    this.setState({
      isModalPerformance: e,
    });
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
      cardModelPerformance
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

  _openPerformance() {
    this._hideModalPerformance(true)
  }

  render() {
    let {
      textButton,
      viewFull,
      imagePro,
      viewLine,
      textPerformance,
      cardModelPop,
      cardModelPerformance
    } = style;
    return (
      <View style={[viewFull]}>
        <View style={[viewFull, {paddingBottom: this.state.top}]}>
          <ImageBackground source={background} style={[viewFull]}>
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
            <TouchableOpacity onPress={() => this._openPerformance()}>
              <Card style={viewLine}>
                <Text style={textPerformance}>مشاهده ی گزارش عملکرد 5/5</Text>
              </Card>
            </TouchableOpacity>
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
            <Modal
              visible={this.state.isModalVisible}
              onDismiss={this._hideTabBar}>
              <View style={{height: '100%', justifyContent: 'flex-end'}}>
                <Card style={cardModelPop}>
                  <PopUp />
                </Card>
              </View>
            </Modal>
            <Modal visible={this.state.isModalPerformance} onDismiss={this._hideTabBar}>
              <View style={{height: '100%', justifyContent: 'center',padding:20,paddingBottom:30}}>
               
                  <PerformanceScreen changeState={this._hideModalPerformance}/>
              
              </View>
            </Modal>
          </ImageBackground>
        </View>
      </View>
    );
  }
}

export default Home;
