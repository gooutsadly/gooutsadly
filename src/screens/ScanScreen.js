import React from 'react';

import {StyleSheet, View, Text, Dimensions} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {Buffer} from 'buffer';

const Edge = ({position, ...props}) => {
  const {
    edgeWidth = 50,
    edgeHeight = 50,
    edgeColor = '#12b187',
    edgeBorderWidth = 8,
    edgeRadius = 0,
  } = props;

  const edgeRadiusOffset = edgeRadius ? -Math.abs(edgeRadius / 3) : -8;

  const defaultStyle = {
    width: edgeWidth,
    height: edgeHeight,
    borderColor: edgeColor,
    // backgroundColor: 'green',
  };

  const edgeBorderStyle = {
    topRight: {
      borderRightWidth: edgeBorderWidth,
      borderTopWidth: edgeBorderWidth,
      borderTopRightRadius: edgeRadius,
      top: edgeRadiusOffset,
      right: edgeRadiusOffset,
    },
    topLeft: {
      borderLeftWidth: edgeBorderWidth,
      borderTopWidth: edgeBorderWidth,
      borderTopLeftRadius: edgeRadius,
      top: edgeRadiusOffset,
      left: edgeRadiusOffset,
    },
    bottomRight: {
      borderRightWidth: edgeBorderWidth,
      borderBottomWidth: edgeBorderWidth,
      borderBottomRightRadius: edgeRadius,
      bottom: edgeRadiusOffset,
      right: edgeRadiusOffset,
    },
    bottomLeft: {
      borderLeftWidth: edgeBorderWidth,
      borderBottomWidth: edgeBorderWidth,
      borderBottomLeftRadius: edgeRadius,
      bottom: edgeRadiusOffset,
      left: edgeRadiusOffset,
    },
  };

  const styles = {
    topLeftEdge: {
      position: 'absolute',
      top: 0,
      left: 0,
    },
    topRightEdge: {
      position: 'absolute',
      top: 0,
      right: 0,
    },
    bottomLeftEdge: {
      position: 'absolute',
      bottom: 0,
      left: 0,
    },
    bottomRightEdge: {
      position: 'absolute',
      bottom: 0,
      right: 0,
    },
  };

  return (
    <>
      <View
        style={[defaultStyle, styles.topLeftEdge, edgeBorderStyle.topLeft]}
      />
      <View
        style={[defaultStyle, styles.topRightEdge, edgeBorderStyle.topRight]}
      />
      <View
        style={[
          defaultStyle,
          styles.bottomLeftEdge,
          edgeBorderStyle.bottomLeft,
        ]}
      />
      <View
        style={[
          defaultStyle,
          styles.bottomRightEdge,
          edgeBorderStyle.bottomRight,
        ]}
      />
    </>
  );
};

const ScanScreen = ({navigation}) => {
  let scanner = null;

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      scanner.reactivate();
    });

    return unsubscribe;
  }, [navigation, scanner]);

  const onSuccess = (e) => {
    console.log('qrcode', e.data);

    if (typeof e.data === 'string' && e.data.startsWith('HKEN:0')) {
      const a = e.data.slice(6 + 8);

      console.log(Buffer.from(a, 'base64').toString('utf8'));

      const {nameZh} = JSON.parse(Buffer.from(a, 'base64').toString('utf8'));
      navigation.navigate('Detail', {name: nameZh});
      return;
    }

    scanner.reactivate();
  };

  return (
    <View style={styles.scanView}>
      <QRCodeScanner
        ref={(node) => {
          scanner = node;
        }}
        onRead={onSuccess}
        cameraStyle={styles.cameraContainer}
        topViewStyle={styles.zeroContainer}
        bottomViewStyle={styles.zeroContainer}
      />
      <View style={styles.rectangleContainer}>
        <View style={styles.topOverlay} />

        <View style={{flexDirection: 'row'}}>
          <View style={styles.leftAndRightOverlay} />
          <View style={styles.rectangle}>
            <Edge />
          </View>
          <View style={styles.leftAndRightOverlay} />
        </View>
        <View style={styles.bottomOverlay}>
          <Text style={styles.bottomText}>掃描二維碼</Text>
        </View>
      </View>
    </View>
  );
};

// FYI: https://github.com/moaazsidat/react-native-qrcode-scanner/issues/115

const overlayColor = 'rgba(0,0,0,0.5)'; // this gives us a black color with a 50% transparency

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;

const rectDimensions = SCREEN_WIDTH * 0.65; // this is equivalent to 255 from a 393 device width

const styles = StyleSheet.create({
  zeroContainer: {
    height: 0,
    flex: 0,
  },
  scanView: {
    position: 'relative',
  },
  cameraContainer: {
    height: Dimensions.get('window').height,
    backgroundColor: '#000',
  },

  rectangle: {
    height: rectDimensions,
    width: rectDimensions,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    zIndex: 1,
  },

  rectangleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    height: SCREEN_HEIGHT,
  },

  topOverlay: {
    flex: 1,
    height: SCREEN_WIDTH,
    width: SCREEN_WIDTH,
    backgroundColor: overlayColor,
    justifyContent: 'center',
    alignItems: 'center',
  },

  bottomOverlay: {
    flex: 1,
    height: SCREEN_WIDTH,
    width: SCREEN_WIDTH,
    backgroundColor: overlayColor,
    paddingBottom: SCREEN_WIDTH * 0.25,
    zIndex: -1,
    alignItems: 'center',
  },

  bottomText: {
    marginTop: 50,
    fontSize: 16,
    color: '#FFF',
  },

  leftAndRightOverlay: {
    height: SCREEN_WIDTH * 0.65,
    width: SCREEN_WIDTH,
    backgroundColor: overlayColor,
  },
});

export default ScanScreen;
