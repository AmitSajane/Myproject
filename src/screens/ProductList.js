import React from 'react';
import {StyleSheet, Text, View, FlatList, Image, TouchableOpacity} from 'react-native';
import Product1 from '../assets/images/product1.jpg';
import Product2 from '../assets/images/product2.jpg' ;
import Product3 from '../assets/images/product3.jpg';
import Kids from '../assets/images/kids.png';
import {scale} from '../shared/scaling';
import {useNavigation} from '@react-navigation/native';

const DATA = [
  {
    id: '1',
    title: 'Winter Wear',
    title2: '40-50% Off',
    uri: Product1,
  },
  {
    id: '2',
    title: 'Womens',
    title2: '50-70% Off',
    uri: Product2,
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
    uri: Product3,
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

const TopProduct = () => {
  const navigation = useNavigation();
  const nextmove = () => {
    navigation.navigate('ProductList');
    //  Alert.alert('item is clicked')
  };
  const renderItem = ({item}) => (
    <Item title={item.title} source={item.uri} offerText={item.title2} onclick={nextmove}/>
  );
  return (
    <View style={{flex: 1,width:'100%'}}>
      <FlatList
        data={DATA}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default TopProduct;

const styles = StyleSheet.create({
  tinyLogo: {
    width: 185,
    height: 180,
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
