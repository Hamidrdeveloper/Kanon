import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
} from 'react-native';
import ImageZoom from 'react-native-image-pan-zoom';

export default class FullScreenImage extends React.Component {
  render() {
    const {navigation} = this.props;
    var data = navigation.getParam('dataList', 'NO-User');
    let Image_Http_URL = {uri: data};
    console.log("Image_Http_URL",Image_Http_URL)
    return (
      <View style={{width: '100%', height: '100%'}}>
        <ImageZoom
          cropWidth={Dimensions.get('window').width}
          cropHeight={Dimensions.get('window').height}
          imageWidth={500}
          imageHeight={500}>
          <ImageBackground
            style={{width: '100%', height: '100%'}}
            source={Image_Http_URL}
          />
        </ImageZoom>
      </View>
    );
  }
}
