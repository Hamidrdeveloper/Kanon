import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  matchParent: {
    width: 200,
    height: 250,
  },
  textTitle: {textAlign: 'center', fontFamily: 'BYekan', fontSize: 30},
  date: {textAlign: 'center', fontFamily: 'BYekan', fontSize: 15,marginTop:5},
  viewCircle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 8,
    marginTop:15
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
    fontSize: 20,
    padding: 8,
    color:"#c6c6c6",
    marginTop:15
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
    width: 80,
    height: 80,
    borderRadius: 100,
    alignSelf: 'center',
    marginTop: 45,
  },
  viewLine: {
    width: 200,
    height: 40,
    elevation:5,
    backgroundColor: '#fff',
    borderRadius: 50,
    alignSelf: 'center',
    marginTop: 15,
  },
});
