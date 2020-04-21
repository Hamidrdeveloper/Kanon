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
import Dropdown from '../../components/drop';

let screenWidth = Dimensions.get('window').width;
class Fixed extends React.Component {
  static navigationOptions = ({navigation}) => {
    const {params} = navigation.state;

    return {
      tabBarVisible: false,
    };
  };
  state = {
    stepOne: 1,
  };
  componentDidMount() {

    this.props.navigation.setParams({tabBarVisible: false});
  }
  _onStepList(e) {
    this.setState({
      stepOne: e,
    });
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
            paddingBottom: 1,
            marginBottom: 1,
          }}>
          <Image style={imageCard} resizeMode="stretch" source={circle} />
          <View style={viewItem}>
            <Text style={textTitle}>{'فارسی نهم'}</Text>
            <View style={viewItemRow}>
              <Text style={viewItemRowII}>{'1398/08/23'}</Text>
              <View>
                <Text style={date}>{'آزمون کانون'}</Text>
                <Text style={date}>{'1398/08/24'}</Text>
              </View>
            </View>
            <View style={viewItemRow}>
              <View style={viewDetail}>
                <Text style={detail}>
                  {'را سوالات نمیاد؟اسلا اینجا سوال داره؟اها راستی نصبم م'}
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
      textCardButtonGray,
    } = style;
    return (
      <View style={viewFull}>
        <ImageBackground source={background} style={viewFull}>
          <ScrollView
            style={{marginBottom: 15, paddingRight: 15, paddingLeft: 15}}>
            <View style={viewHeder}>
              <Image source={back} style={buttonBack} />

              <Text style={textHeder}>رفع اشکال</Text>
            </View>
            <View style={[viewHeder, {marginTop: 8}]}>
              <View style={viewFullIem}>
                <Card style={viewLine}>
                  <Dropdown textDefault="رفع اشکال" />
                </Card>
              </View>
              <View style={{width:10}}/>
              <View style={viewFullIem}>
                <Card style={viewLine}>
                  <Dropdown textDefault="رفع اشکال" />
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
                <TouchableOpacity
                  onPress={() => {
                    this._onStepList(1);
                  }}>
                  <Text
                    style={
                      this.state.stepOne === 1
                        ? textCardButton
                        : textCardButtonGray
                    }>
                    پاسخ داده نشده
                  </Text>
                </TouchableOpacity>
                <View style={{width:15}}/>
                <TouchableOpacity
                  onPress={() => {
                    this._onStepList(2);
                  }}>
                  <Text
                    style={
                      this.state.stepOne === 2
                        ? textCardButton
                        : textCardButtonGray
                    }>
                    سوالات رزرو شده
                  </Text>
                </TouchableOpacity>
                <View style={{width:15}}/>
                <TouchableOpacity
                  onPress={() => {
                    this._onStepList(3);
                  }}>
                  <Text
                    style={
                      this.state.stepOne === 3
                        ? textCardButton
                        : textCardButtonGray
                    }>
                    پاسخ داده شده
                  </Text>
                </TouchableOpacity>
              </View>
            </Card>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

export default Fixed;
