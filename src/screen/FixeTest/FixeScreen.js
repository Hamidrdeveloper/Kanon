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
import Icon from 'react-native-vector-icons/FontAwesome';

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
    groupId: '',
  };
  _filterSort(data, indext) {
    return data.groupName;
  }
  _filterName(data, indext) {
    return data;
  }
  _filterSortCourse(data, indext) {
    return data.CrsName;
  }
  _filterNameCourse(data, indext) {
    return data;
  }
  _selectGroups = data => {
    console.log(data.groupCode);
    this.setState({
      groupId: data.groupCode,
    });
    this.props._onCourse(data.groupCode);
    if (this.state.stepOne == 1) {
      this.props._onNoAnsweredQuestionCourseBase(48, data.groupCode, null);
    }
    if (this.state.stepOne == 2) {
      this.props._onReservedQuestionCourseBase(48, data.groupCode, null);
    }

    if (this.state.stepOne == 3) {
      this.props._onAnsweredQuestionCourseBase(48, data.groupCode, null);
    }
    return data;
  };
  _selectCourse = data => {
    console.log(data.CrsId + '++' + this.state.groupId);

    if (this.state.stepOne === 1) {
      this.props._onNoAnsweredQuestionCourseBase(
        48,
        this.state.groupId,
        data.CrsId,
      );
    }
    if (this.state.stepOne == 2) {
      this.props._onReservedQuestionCourseBase(
        48,
        this.state.groupId,
        data.CrsId,
      );
    }
    if (this.state.stepOne === 3) {
      this.props._onAnsweredQuestionCourseBase(
        48,
        this.state.groupId,
        data.CrsId,
      );
    }
    return data;
  };

  componentDidMount() {
    this.props.navigation.setParams({tabBarVisible: false});
    this.props._onGroups();
    this.props._onAllNoAnswered();
    // this.props._onNoAnsweredQuestionCourseBase(48, 27, 3273);
    // this.props._onReservedQuestionCourseBase(48, 27, 3273);
  }
  _onStepList(e) {
    this.setState({
      stepOne: e,
    });
    if (this.state.stepOne == 1) {
      this.props._onAllNoAnswered();
    }
    if (this.state.stepOne == 2) {
      this.props._onAllAnsweredReserved(48);
    }
    if (this.state.stepOne == 3) {
      this.props._onAllAnsweredQuestion(48);
    }
  }
  componentWillUpdate() {
    console.log('Groups', this.props.dataGroups);
  }

  onBack = e => {
    const {state, goBack} = this.props.navigation;

    goBack(null);
  };
  renderGridItem(item, index) {
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
            <Text style={textTitle}>{item.CrsName}</Text>
            <View style={viewItemRow}>
              <Text style={viewItemRowII}>{'1398/08/23'}</Text>
              <View>
                <Text style={date}>{item.questionType}</Text>
                <Text style={date}>{'1398/08/24'}</Text>
              </View>
            </View>
            <View style={viewItemRow}>
              <View style={viewDetail}>
                <Text style={detail}>{item.ProblemText}</Text>
              </View>
              <View style={buttonItem}>
                <Text style={textButton}>
                  {this.state.stepOne == 2 ? 'بازخورد سوال' : 'برسی سوال'}
                </Text>
              </View>
            </View>
          </View>
          {this.state.stepOne == 2 ? (
            <Icon
              name="close"
              size={14}
              style={{position: 'absolute', marginLeft: 15, marginTop: 8}}
            />
          ) : null}
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
              <TouchableOpacity onPress={this.onBack} style={buttonBack}>
                <Image source={back} style={buttonBack} />
              </TouchableOpacity>

              <Text style={textHeder}>رفع اشکال</Text>
            </View>
            <View style={[viewHeder, {marginTop: 8}]}>
              <View style={viewFullIem}>
                <Card style={viewLine}>
                  <Dropdown
                    textDefault="همه دروس"
                    data={this.props.dataCourse}
                    onChangeText={this._selectCourse}
                    labelExtractor={this._filterSortCourse}
                    valueExtractor={this._filterName}
                  />
                </Card>
              </View>
              <View style={{width: 10}} />
              <View style={viewFullIem}>
                <Card style={viewLine}>
                  <Dropdown
                    textDefault="همه مقاطع"
                    data={this.props.dataGroups}
                    onChangeText={this._selectGroups}
                    labelExtractor={this._filterSort}
                    valueExtractor={this._filterName}
                  />
                </Card>
              </View>
            </View>

            <FlatList
              data={this.props.dataCourseBase}
              marginTop={10}
              layout={'default'}
              style={flatListStyle}
              showsVerticalScrollIndicator={false}
              scrollInterpolator={this._scrollInterpolator}
              slideInterpolatedStyle={this._animatedStyles}
              sliderWidth={screenWidth}
              itemWidth={(screenWidth + 50) / 2}
              renderItem={({item, index}) => this.renderGridItem(item, index)}
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
    dataCourse: state.Fixe.dataCourse,
    dataCourseBase: state.Fixe.dataCourseBase,
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
