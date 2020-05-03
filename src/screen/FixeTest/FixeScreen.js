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
import PropTypes from 'prop-types';

import backgroundC from '../../../assets/images/abstract2.png';
import back from '../../../assets/images/back.png';
import circle from '../../../assets/images/circaleBack.png';
import style from './Style/style';
import {FlatList} from 'react-native-gesture-handler';
import Dropdown from '../../components/drop';
import FixAction from '../../action/FixAction';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

let screenWidth = Dimensions.get('window').width;
class FixeScreen extends React.Component {
  static navigationOptions = ({navigation}) => {
    const {params} = navigation.state;

    return {
      tabBarVisible: false,
    };
  };
  state = {
    stepOne: 1,
  };
  _filterSort(data, indext) {
    return data.groupName;
  }
  _filterName(data, indext) {
    return data;
  }
  componentDidMount() {
    this.props.navigation.setParams({tabBarVisible: false});
    this.props._onGroups();
  }
  _onStepList(e) {
    this.setState({
      stepOne: e,
    });
  }
  componentWillUpdate() {
    console.log('Groups', this.props.dataGroups);
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
                  <Dropdown
                    textDefault="همه دروس"
                    data={this.props.dataGroups}
                    labelExtractor={this._filterSort}
                    valueExtractor={this._filterName}
                  />
                </Card>
              </View>
              <View style={{width: 10}} />
              <View style={viewFullIem}>
                <Card style={viewLine}>
                  <Dropdown textDefault="همه مقاطع" />
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
                  style={{position: 'absolute', left: 8}}
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
                <View style={{width: 15}} />
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
                <View style={{width: 15}} />
                <TouchableOpacity
                  style={{position: 'absolute', right: 8}}
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

  static propTypes = {
    navigation: PropTypes.any,
  };
}
function mapStateTop(state) {
  return {
    dataGroups: state.Fixe.dataGroups,
    isLoaded: state.Fixe.isLoaded,
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(FixAction, dispatch);
}
export default connect(
  mapStateTop,
  mapDispatchToProps,
)(FixeScreen);
