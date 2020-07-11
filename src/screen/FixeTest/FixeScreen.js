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
  FlatList,
  ActivityIndicator,
} from 'react-native';
import {Card, Modal, TouchableRipple} from 'react-native-paper';
import Carousel, {getInputRangeFromIndexes} from 'react-native-snap-carousel';
import background from '../../../assets/images/abstract.png';
import PropTypes from 'prop-types';

import backgroundC from '../../../assets/images/abstract2.png';
import back from '../../../assets/images/back.png';
import circle from '../../../assets/images/circaleBack.png';
import style from './Style/style';

import Dropdown from '../../components/drop';
import FixAction from '../../action/FixAction';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import PopUp from './popUp';
import FullScreenText from '../../components/textFull';
import FullScreenImage from '../../components/FullScreenImage';

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
    isModalVisible: false,
    detail: '',
    isModalPopTextFull: false,
    dataTextItem: '',
    isModalPopImageFull: false,
    dataImageItem: '',
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
    setTimeout(() => {
      this.props._onGroups();
      this.props._onAllNoAnswered();
    }, 1000);

    // this.props._onNoAnsweredQuestionCourseBase(48, 27, 3273);
    // this.props._onReservedQuestionCourseBase(48, 27, 3273);
  }
  _onStepList = e => {
    this.setState({
      stepOne: e,
    });

    if (e == 1) {
      this.props._onAllNoAnswered();
    }
    if (e == 2) {
      this.props._onAllAnsweredReserved(48);
    }
    if (e == 3) {
      this.props._onAllAnsweredQuestion(48);
    }
  };
  componentWillUpdate() {
    console.log('Groups', this.props.dataGroups);
  }

  onBack = e => {
    const {state, goBack} = this.props.navigation;

    goBack(null);
  };
  deleteReserved(e) {
    this.props._onDeleteReserveQuestion(48, e.Id);
  }
  _hideTabBar = e => {
    this.props._onGetSubject(e.SumCrsId);

    this.setState({
      isModalVisible: !this.state.isModalVisible,
      detail: e,
    });
  };
  _hideTabBarMode = e => {
    this.setState({
      isModalVisible: !this.state.isModalVisible,
    });
  };
  _openModalMenu() {
    this._hideModalMenu(true);
  }
  _openModalTextFull = e => {
    this.setState({
      isModalPopTextFull: !this.state.isModalPopTextFull,
      dataTextItem: e,
    });
  };
  _hideModalTextFull = e => {
    this.setState({
      isModalPopTextFull: !this.state.isModalPopTextFull,
    });
  };
  _openModalImageFull = e => {
    this.setState({
      isModalPopImageFull: !this.state.isModalPopTextFull,
      dataImageItem: e,
    });
  };
  _hideModalImageFull = e => {
    this.setState({
      isModalPopImageFull: !this.state.isModalPopImageFull,
    });
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
      <TouchableRipple activeOpacity={1}>
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
            <View style={[viewItemRow, {marginTop: 15}]}>
              <View style={viewDetail}>
                <Text style={detail}>{item.ProblemText}</Text>
              </View>
              <TouchableRipple
                style={[buttonItem]}
                onPress={() => this._hideTabBar(item)}>
                <View>
                  <Text style={textButton}>
                    {this.state.stepOne == 2 ? 'بازخورد سوال' : 'برسی سوال'}
                  </Text>
                </View>
              </TouchableRipple>
            </View>
          </View>
          {this.state.stepOne == 2 ? (
            <TouchableRipple
              style={{position: 'absolute', marginLeft: 15, marginTop: 8}}
              onPress={() => this.deleteReserved(item)}>
              <Icon name="close" size={14} />
            </TouchableRipple>
          ) : null}
        </Card>
      </TouchableRipple>
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
      cardModelPop,
      viewActivityIndicator,
    } = style;
    return (
      <View style={viewFull}>
        <ImageBackground source={background} style={viewFull}>
          <ScrollView
            style={{marginBottom: 15, paddingRight: 15, paddingLeft: 15}}>
            <View style={viewHeder}>
              <TouchableRipple onPress={this.onBack} style={buttonBack}>
                <Image source={back} style={buttonBack} />
              </TouchableRipple>

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
                <TouchableRipple
                  activeOpacity={0.9}
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
                </TouchableRipple>
                <View style={{width: 15}} />
                <TouchableRipple
                  activeOpacity={0.9}
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
                </TouchableRipple>
                <View style={{width: 15}} />
                <TouchableRipple
                  activeOpacity={0.9}
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
                </TouchableRipple>
              </View>
            </Card>
          </View>
        </ImageBackground>
        <Modal
          visible={this.state.isModalVisible}
          onDismiss={this._hideTabBarMode}>
          <View style={{height: '100%', justifyContent: 'flex-end'}}>
            <View style={cardModelPop}>
              <PopUp
                dataPro={this.state.detail}
                navigation={this.props.navigation}
                hidePopUp={this._hideTabBarMode}
                subject={this.props.dataGetSubject}
                object={this.props.dataGetObject}
                onFunObject={this.props._onGetObject}
              />
            </View>
          </View>
        </Modal>
        <View style={viewActivityIndicator}>
          <ActivityIndicator
            animating={this.props.isLoadedCourse}
            color={'#000'}
          />
        </View>
        <Modal
          visible={this.state.isModalPopTextFull}
          onDismiss={this._hideModalTextFull}>
          <View style={{height: '100%', justifyContent: 'flex-end'}}>
            <Card style={{cardModelPop}}>
              <FullScreenText dataList={this.state.dataTextItem} />
            </Card>
          </View>
        </Modal>
        <Modal
          visible={this.state.isModalPopImageFull}
          onDismiss={this._hideModalImageFull}>
          <View
            style={{
              height: '100%',
              justifyContent: 'flex-end',
              backgroundColor: '#fff',
              width: '100%',
            }}>
            <FullScreenImage dataList={this.state.dataImageItem} />
          </View>
        </Modal>
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
    isLoadedCourse: state.Fixe.isLoadedCourse,
    dataGetSubject: state.Home.dataGetSubject,
    dataGetObject: state.Home.dataGetObject,
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(FixAction, dispatch);
}
export default connect(
  mapStateTop,
  mapDispatchToProps,
)(FixeScreen);
