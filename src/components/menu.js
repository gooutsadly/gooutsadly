import React from 'react';
import Carousel from 'react-native-snap-carousel';
import {
  StyleSheet,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

const renderItem = ({item, index}) => {
  return (
    <TouchableOpacity onPress={item.onPress}>
      <View style={styles.item}>
        <Image source={item.image} style={styles.itemImage} />
      </View>
    </TouchableOpacity>
  );
};

const Menu = ({navigation}) => {
  return (
    <Carousel
      data={[
        {
          title: 'on9',
          image: require('../../images/fake_enter_scan_pic.png'),
          onPress: () => {
            navigation.navigate('Scan');
          },
        },
        {
          title: 'on9',
          image: require('../../images/fake_enter_taxi_pic.png'),
          onPress: () => {
            navigation.navigate('Scan');
          },
        },
        {
          title: 'on9',
          image: require('../../images/fake_report_pic.png'),
          onPress: () => {
            navigation.navigate('Detail', {name: 'on9'});
          },
        },
      ]}
      renderItem={renderItem}
      sliderWidth={SCREEN_WIDTH}
      itemWidth={250}
      layout={'default'}
      enableMomentum
      containerCustomStyle={styles.container}
      activeSlideAlignment={'start'}
    />
  );
};

const SCREEN_WIDTH = Dimensions.get('window').width;

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'floralwhite',
    borderRadius: 8,
    height: (250 * 897) / 746,
    // padding: 50,
    marginLeft: 2,
    marginRight: 2,
    shadowColor: '#000',
    // shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.75,
    shadowRadius: 4,
    // shadowColor: 'red',
    shadowOffset: {height: 1, width: 0},
    marginBottom: 10,
    // boxShadow: '#cdcdcd 0em 1em 1.5em',
    elevation: 5,
  },
  itemImage: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
  },
  container: {
    paddingLeft: 28,
  },
});

export default Menu;
