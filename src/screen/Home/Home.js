import React from 'react';
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  Image,
  ImageBackground,
  Button,
  AsyncStorage,
  Alert,
  BackHandler,
} from 'react-native';
import {Card, Modal, TouchableRipple} from 'react-native-paper';
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
import ListClass from './lsitClass';
import PopUpMenu from './popUpMenu';
import Channel from '../../channel/indext';
import HomeAction from '../../action/HomeAction';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';
import {UserData} from '../../model/userData';
import Recorder from '../../components/recorderPlayer';
import FullScreenText from '../../components/textFull';
import FullScreenImage from '../../components/FullScreenImage';
import FixAction from '../../action/FixAction';
let screenWidth = Dimensions.get('window').width;
class HomeScreen extends React.Component {
  state = {
    detail: '',
    imagePro: UserData.jsonData.teacherPicture,
    isModalVisible: false,
    tabBarVisible: true,
    top: 0,
    isModalPerformance: false,
    isModalNotify: false,
    isModalPopUpMenu: false,
    isModalPopTextFull: false,
    dataTextItem: '',
    isModalPopImageFull: false,
    dataImageItem: '',
  };

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
    this._hideTabBar();
  };
  _hideTabBarItem = (e, data) => {
    this.props._onGetSubject(data.SumCrsId);
    FixAction._onPostSaveReserved(UserData.jsonData.teacherInfo.Rid, e.Id).then(
      res => {
        this.props._onAnsweredQuestion(UserData.jsonData.teacherInfo.Rid);
      },
    );
    this.props.navigation.setParams({tabBarVisible: !this.state.tabBarVisible});
  
    this.setState({
      tabBarVisible: !this.state.tabBarVisible,
      isModalVisible: !this.state.isModalVisible,
      detail: data,
    });
  };
  _hideTabBar = e => {
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
  };
  _hideModalNotify = e => {
    this.setState({
      isModalNotify: e,
    });
  };
  _hideModalMenu = e => {
    this.props.navigation.setParams({tabBarVisible: !this.state.tabBarVisible});
    this.setState({
      isModalPopUpMenu: e,
      tabBarVisible: !e,
    });
  };
  handleBackButton = (e) => {
    if(e=1){
      
      return true;
    }
  
    return true;
  };
  _openTabBar() {
    this._hideTabBar(true);
  }

  _openPerformance() {
    this._hideModalPerformance(true);
  }
  _openModalNotify() {
    this._hideModalNotify(true);
  }
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
  componentDidMount() {

    AsyncStorage.getItem('userid').then(data => {
      console.log(data);
      var userId = data;
      this.props._onAnsweredQuestion(userId);
      console.log('=====>', this.props.data);
    });
  }
  componentWillUpdate() {
    console.log('=====>', this.props.data);
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
        <View style={[viewFull, {paddingBottom: this.state.top}]}>
          <ImageBackground source={background} style={[viewFull]}>
            <View
              style={{
                width: '100%',
                flexDirection: 'row',
                marginTop: 20,
                paddingLeft: 15,
                paddingRight: 15,
              }}>
              <TouchableRipple
                activeOpacity={10}
                onPress={() => this._openModalNotify()}>
                <Image
                  source={alarm}
                  style={{width: 25, height: 25, tintColor: '#ffff'}}
                />
              </TouchableRipple>
              <TouchableRipple
                activeOpacity={10}
                style={{
                  width: 20,
                  height: 20,
                  position: 'absolute',
                  right: 0,

                  marginRight: 15,
                }}
                onPress={() => this._openModalMenu()}>
                <Image
                  source={menu}
                  style={{
                    width: 20,
                    height: 20,
                    tintColor: '#ffff',
                  }}
                />
              </TouchableRipple>
            </View>
            <Image
              source={{
                uri:
                  this.state.imagePro != null
                    ? `http://kanoonihaweb.kanoon.ir/${this.state.imagePro}`
                    : 'https://cdn01.zoomit.ir/2018/10/e3d98770-8164-49cc-a419-6f0bd80c3b2c.jpg',
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
              {UserData.jsonData.teacherInfo.FirstName +
                '' +
                UserData.jsonData.teacherInfo.LastName}
            </Text>

            <TouchableRipple
              activeOpacity={10}
              onPress={() => {
                this._openPerformance();
              }}>
              <Card style={viewLine}>
                <Text style={textPerformance}>مشاهده ی گزارش عملکرد 5/5</Text>
              </Card>
            </TouchableRipple>
            <ListClass
              hideTabBar={this._hideTabBarItem}
              AQ_data={this.props.data}
            />
            <Modal
              visible={this.state.isModalVisible}
              onDismiss={this._hideTabBar}>
              <View style={{height: '100%', justifyContent: 'flex-end'}}>
                <View style={cardModelPop}>
                  <PopUp
                    changeState={this._hideTabBar}
                    dataPro={this.state.detail}
                    navigation={this.props.navigation}
                    hidePopUp={this._hideTabBar}
                    openModalTextFull={this._openModalTextFull}
                    openModalImageFull={this._openModalImageFull}
                    subject={this.props.dataGetSubject}
                    object={this.props.dataGetObject}
                    onFunObject={this.props._onGetObject}
                  />
                </View>
              </View>
            </Modal>
            <Modal
              transparent={true}
              animationType={'none'}
              visible={this.state.isModalPerformance}
              onDismiss={this._hideTabBar}>
              <View
                style={{
                  height: '100%',
                  justifyContent: 'center',
                  padding: 20,
                  paddingBottom: 30,
                }}>
                <PerformanceScreen changeState={this._hideModalPerformance} />
              </View>
            </Modal>
            <Modal
              visible={this.state.isModalNotify}
              onDismiss={this._hideTabBar}>
              <View
                style={{
                  height: '100%',
                  justifyContent: 'center',
                  padding: 20,
                  paddingBottom: 30,
                }}>
                <NotifyScreen changeState={this._hideModalNotify} />
              </View>
            </Modal>
            <Modal
              visible={this.state.isModalPopUpMenu}
              onDismiss={this._hideModalMenu}>
              <View style={{height: '100%', justifyContent: 'flex-end'}}>
                <Card style={cardModelPop}>
                  <PopUpMenu
                    changeState={this._hideModalMenu}
                    navigation={this.props.navigation}
                  />
                </Card>
              </View>
            </Modal>
          </ImageBackground>
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
      </View>
    );
  }
  static propTypes = {
    navigation: PropTypes.any,
  };
}
function mapStateTop(state) {
  return {
    data: state.Home.data,
    isLoaded: state.Home.isLoaded,
    dataGetSubject: state.Home.dataGetSubject,
    dataGetObject: state.Home.dataGetObject,
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(HomeAction, dispatch);
}
export default connect(
  mapStateTop,
  mapDispatchToProps,
)(HomeScreen);
