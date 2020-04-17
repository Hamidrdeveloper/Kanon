import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Res from '../../../Color/color';
export default StyleSheet.create({
  matchParent: {
    width: 200,
    height: 250,
  },
  textTitlePopUp: {
    textAlign: 'right',
    fontSize: hp(4),
    color: Res.Color.primers,
    fontFamily: 'BYekanBold',
    right: 0,
    position: 'absolute',
    paddingRight: 15,
  },
  textTitle: {textAlign: 'center', fontFamily: 'BYekan', fontSize: hp(4)},
  date: {textAlign: 'center', fontFamily: 'BYekan', fontSize: hp(2)},
  viewCircle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 8,
  },
  datePopUp: {fontFamily: 'BYekanBold', fontSize: 15, color: Res.Color.primers},
  viewItemRow: {
    flexDirection: 'row',

    alignItems: 'center',
  },
  viewItemRowII: {
    color: Res.Color.primers,
    fontFamily: 'BYekanBold',
    right: 0,
    position: 'absolute',
  },
  viewItem: {
    width: '100%',
    height: '100%',
    paddingBottom: 10,
    paddingLeft: 15,
    paddingRight: 15,
  },
  viewCircleII: {
    width: 60,
    height: 60,
    borderRadius: 100,
    backgroundColor: '#d3d3d3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  circleTitle: {textAlign: 'center', fontFamily: 'Yekan'},
  detail: {
    textAlign: 'center',
    fontFamily: 'Yekan',
    fontSize: hp(2.3),
    padding: 8,
    color: '#c6c6c6',
  },
  buttonItem: {
    backgroundColor: '#333648',
    borderRadius: 30,
    width: 100,
    height: 40,
    marginTop: 15,
    alignSelf: 'center',
  },
  textButton: {
    height: '100%',
    height: '100%',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontFamily: 'Yekan',
    color: '#fff',
    fontSize: 15,
  },
  viewFull: {width: '100%', height: '100%'},
  imagePro: {
    width: 60,
    height: 60,
    borderRadius: 100,
    alignSelf: 'center',
    marginTop: 45,
  },
  viewLine: {
    width: wp(50),
    height: hp(4),
    elevation: 5,
    backgroundColor: '#fff',
    borderRadius: 50,
    alignSelf: 'center',
    marginTop: 15,
  },
  cardModelPop: {
    width: '100%',
    height: '70%',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop: 15,
  },
  textPerformance: {
    color: '#000',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontFamily: 'BYekan',
    height: '100%',
  },
  cardModelPerformance: {
    
    height: '100%',
    
  },
});
