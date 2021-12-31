import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import Image1 from '../assets/images/women2.jpg';
import Kids from '../assets/images/kids.png';
import Winter1 from '../assets/images/winter.jpg';
import Winter2 from '../assets/images/mensclothes.jpg';
import {scale} from '../shared/scaling';
import {useNavigation} from '@react-navigation/native';

const DATA = [
  {
    id: '1',
    title: 'Winter Wear',
    title2: '40-50% Off',
    uri: Winter1,
  },
  {
    id: '2',
    title: 'Womens',
    title2: '50-70% Off',
    uri: Winter2,
  },
  {
    id: '3',
    title: 'Kids',
    title2: '40-50% Off',
    uri: Kids,
  },

  {
    id: '4',
    title: 'WinterWear',
    title2: '40-50% Off',
    uri: Image1,
  },
  {
    id: '5',
    title: 'FootWear',
    title2: '40-50% Off',
    uri: Image1,
  },
  {
    id: '6',
    title: 'Luxury',
    title2: '40-50% Off',
    uri: Image1,
  },
  {
    id: '7',
    title: 'Beauty',
    title2: '40-50% Off',
    uri: Image1,
  },
];

const Item = ({title, source, offerText, onclick}) => (
  <TouchableOpacity onPress={onclick} style={styles.item}>
    <Image style={styles.tinyLogo} source={source} />
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.title}>{offerText}</Text>
    </View>
  </TouchableOpacity>
);

const ListItem = () => {
  const navigation = useNavigation();
  const nextmove = () => {
    navigation.navigate('ProductList');
    //  Alert.alert('item is clicked')
  };
  const renderItem = ({item}) => (
    <Item
      title={item.title}
      source={item.uri}
      offerText={item.title2}
      onclick={nextmove}
    />
  );
  return (
    <View style={{flex: 1}}>
      <FlatList
        data={DATA}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  tinyLogo: {
    width: 250,
    height: 180,
    // resizeMode: 'contain',
    // borderRadius: 100,
    marginLeft: 6,
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: scale(18),
  },
});
