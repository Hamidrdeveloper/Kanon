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
import { UserData } from '../../model/userData';

let screenWidth = Dimensions.get('window').width;
class RankScreen extends React.Component {
  ratingCompleted(rating) {
    console.log('Rating is: ' + rating);
  }
  _hideModalPerformance = () => {
    this.props.changeState(false);
  };
  ListHeaderComponent(){
    return(
      <View style={[style.viewRankItem]}>
        <Text>{"رتبه"}</Text>
      <Text style={{paddingRight:10,color:"#000"}}>{"نام و نام خانوادگی"}</Text>
      <Text style={{position:'absolute', right:0, paddingLeft:15,alignSelf:'center',color:"#000",}}>{"تعداد سوال پاسخ داده"}</Text>
      </View>
    )
  }
  renderItem({item,index}) {
 
    var validColor= (index % 2)
    console.log(validColor)
    return(
      <View style={[style.viewRankItem,{backgroundColor:validColor==1?Res.Color.grayLight:"#fff"}]}>
      <Text style={style.textNumRankItem}>1</Text>
      <Text style={{paddingRight:10,color:Res.Color.gray}}>{"حمید رضا"}</Text>
      <Text style={{position:'absolute', right:0, paddingLeft:15,alignSelf:'center',color:Res.Color.gray,}}>500</Text>
      </View>
    )
  }
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
        <Card style={[viewForm,{height:`90%`}]}>
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
                    {'مشاهده پرداخت ها'}
                  </Text>

                  <View style={viewImageShowRank}>
                    <Image source={back} style={buttonBack} />
                  </View>
                </View>
              </Card>
            </View>
           
            
           <View style={{borderColor:"#000", borderWidth:0, width:`100%`,height:`68%`,top:10,borderRadius:20,alignItems:'center'}}>
           <View style={{width:`96%`,height:`96%`,top:3,position:'absolute'}}>
           <FlatList 
           
           ListHeaderComponent={this.ListHeaderComponent()}
             data={[1,2,3,4,5,6,7,8,9,10,11]}
             renderItem={(item,index)=>this.renderItem(item,index)}
             head
           />
           </View>
         
            <Image style={{borderColor:"#fff", borderWidth:8, width:`100%`,height:`100%`,position:'absolute',borderRadius:24,bottom:0}}/>
                      <Image style={{borderColor:"#000", borderWidth:1,width:`96%`,height:`96%`,borderRadius:20,position:'absolute',alignSelf:'center',top:3}}/>
                     
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

export default RankScreen;
