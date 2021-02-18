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
            navigation.navigate('Scan');
          },
        },
      ]}
      renderItem={renderItem}
      sliderWidth={SCREEN_WIDTH}
      itemWidth={250}
      layout={'default'}
      enableMomentum={true}
      containerCustomStyle={{
        paddingLeft: 28,
      }}
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
    marginLeft: 2,
    marginRight: 2,
    shadowColor: '#cdcdcd',
    shadowOpacity: 0.75,
    shadowRadius: 5,
    shadowOffset: {height: 0, width: 0},
    marginBottom: 10,
    elevation: 5,
  },
  itemImage: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
  },
});

export default Menu;
