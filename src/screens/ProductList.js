import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  ActivityIndicator
} from 'react-native';
import Header from '../componentes/HeaderComponent';
import colors from '../shared/colors';
import {scale} from '../shared/scaling';
import StarRating from 'react-native-star-rating';

//  import dummyApi from '../shared/dummyApi';

const ProductList = ({navigation}) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProductList();
    setTimeout(() => {
      console.log('products is ', products);
    }, 3000);
    return () => {
      setProducts({});
    };
  }, []);

  const getProductList = async () => {
    const data = await fetch('https://fakestoreapi.com/products')
      .then(res => res.json()) // 2
      .then(resJson => {
        setProducts(resJson);
      })
      .catch(e => console.log(e));
    console.log('data is ..', JSON.stringify(data, null, 2));
  };

  const nextScreen = () => {
    navigation.navigate('ProductDetails');
  };

  const renderItem = ({item}) => (
    <TouchableOpacity onPress={nextScreen} style={styles.item}>
      <Image style={styles.tinyLogo} source={{uri: item.image}} />
      <View style={styles.container}>
        <Text numberOfLines={1} style={styles.title}>
          {item.title}
        </Text>
        <Text numberOfLines={1} style={styles.descripation}>
          {item.description}
        </Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text
            numberOfLines={1}
            style={[styles.descripation, styles.prizetext]}>
            ${item.price}
          </Text>
          <View style={{alignItems:"center",justifyContent:'center',marginLeft:scale(10)}}>
            <StarRating
              disabled
              maxStars={5}
              rating={3}
              fullStarColor={'red'}
              starSize={15}
              // selectedStar={(rating) => this.onStarRatingPress(rating)}
            />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View>
      <Header
        title={'Products'}
        arrowBack={true}
        onPressBack={() => navigation.goBack()}
      />
      <View style={{paddingBottom: scale(85)}}>
        <FlatList
          data={products}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          ListHeaderComponent={() => (!products.length? 
            <View>
            <ActivityIndicator size="large" color={colors.theme} />
            <Text style={styles.emptyMessageStyle}>Products are loading...</Text>  
            </View>
            : null)
          }
        />
      </View>
    </View>
  );
};

export default ProductList;

const styles = StyleSheet.create({
  item: {
    width: '50%',
    marginTop: scale(10),
    // height:20,
  },
  tinyLogo: {
    width: '90%',
    // resizeMode:'contain',
    height: 180,
    marginLeft: 6,
  },
  container: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    backgroundColor: colors.white,
    paddingHorizontal: scale(10),
    paddingVertical: scale(10),
  },
  title: {
    fontSize: scale(16),
  },
  descripation: {
    fontSize: scale(12),
  },
  prizetext: {
    color: '#000',
    fontSize: scale(14),
    fontWeight: '400',
  },
  emptyMessageStyle: {
    textAlign: 'center',
    fontSize:scale(20)
  }
});
