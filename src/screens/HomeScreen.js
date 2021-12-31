
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Header from '../componentes/HeaderComponent';
import ListItem from '../componentes/ListItem';
import Image1 from '../assets/images/women2.jpg';
import Men from '../assets/images/men.jpg';
import Kids from '../assets/images/kids.png';
import {SliderBox} from 'react-native-image-slider-box';
import {scale} from '../shared/scaling';
import ListHeading from '../componentes/ListHeading';
import TopProduct from '../componentes/TopProduct';

const DATA = [
  {
    id: '1',
    title: 'Mens',
    uri: Men,
  },
  {
    id: '2',
    title: 'Womens',
    uri: Image1,
  },
  {
    id: '3',
    title: 'Kids',
    uri: Kids,
  },

  {
    id: '4',
    title: 'WinterWear',
    uri: Image1,
  },
  {
    id: '5',
    title: 'FootWear',
    uri: Image1,
  },
  {
    id: '6',
    title: 'Luxury',
    uri: Image1,
  },
  {
    id: '7',
    title: 'Beauty',
    uri: Image1,
  },
];

const images = [
  'https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2021/12/30/89afe569-d37c-4f12-a2a8-d38e63d891d61640865881852-Running-shoes_Dk.jpg',
  'https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2021/12/29/04130eb3-e560-4fa4-97da-78014b0e6b471640769945423-Tops---Jeans_Desk.jpg',
  'https://source.unsplash.com/1024x768/?girl',
  'https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2021/11/16/11cc5325-37c6-4490-9adb-6f09ccb2a0781637049244895-luxe-banner.jpg',
  // require('./assets/images/girl.jpg'),
];

const Item = ({title, source}) => (
  <TouchableOpacity onPress={() => alert('sss')} style={styles.item}>
    <Image style={styles.tinyLogo} source={source} />
    <Text style={styles.title}>{title}</Text>
  </TouchableOpacity>
);

const HomeScreen = () => {
  const renderItem = ({item}) => <Item title={item.title} source={item.uri} />;
  return (
    <View style={{height: '100%'}}>
      <Header title={'Myntra'} showMenuIcon={true} />
      <ScrollView>
        <View>
          <FlatList
            data={DATA}
            horizontal={true}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            showsHorizontalScrollIndicator={false}
          />
        </View>

        <SliderBox images={images} sliderBoxHeight={200} />

        <View style={{marginTop: scale(15)}}>
          <ListHeading heading={'WINTER WEAR SPECIAL DEALS'} />
        </View>
        <View style={styles.mainView}>
          <ListItem />
        </View>
        <View style={{marginTop: scale(15)}}>
          <ListHeading heading={'Top Picks of the Season '} />
        </View>
        <View style={{flex: 1}}>
          <TopProduct />
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  tinyLogo: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
    borderRadius: 100,
    marginLeft: 6,
  },
  item: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  mainView: {
    height: 250,
    marginTop: scale(15),
  },
});
