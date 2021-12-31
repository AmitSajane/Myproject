/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Alert,
  ScrollView,
} from 'react-native';
import Header from '../componentes/HeaderComponent';
import {SliderBox} from 'react-native-image-slider-box';
import {scale} from '../shared/scaling';
import colors from '../shared/colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const ProductDetails = ({navigation}) => {
  const [wished, setWished] = useState(false);
  const images = [
    'https://5.imimg.com/data5/XD/MP/MY-50449264/mens-plain-shirt-500x500.jpg',
    'https://5.imimg.com/data5/XD/MP/MY-50449264/mens-plain-shirt-500x500.jpg',
    'https://5.imimg.com/data5/XD/MP/MY-50449264/mens-plain-shirt-500x500.jpg',
    'https://5.imimg.com/data5/XD/MP/MY-50449264/mens-plain-shirt-500x500.jpg',
  ];
  return (
    <View style={{height: '100%'}}>
      <Header
        title={'Product Deatils'}
        arrowBack={true}
        onPressBack={() => navigation.goBack()}
      />
      {/* <ScrollView style={{flex:1}}> */}
      <View>
        <SliderBox
          images={images}
          sliderBoxHeight={300}
          dotColor="#FFEE58"
          inactiveDotColor="#90A4AE"
          resizeMethod={'resize'}
          //   resizeMode='contain'
          //   ImageComponentStyle={{borderRadius: 15, width: '97%', marginTop: 5}}
        />
      </View>

      <View style={styles.subdiv}>
        <Text style={styles.productTitle}>Roadstar Men Brown & Maroon</Text>
        <Text style={styles.descr}>Colourblocked Acrylic pullover</Text>
        <Text style={styles.priceText}>$899</Text>
        <Text style={[styles.descr, {color: 'green'}]}>
          Inclusive of all taxes
        </Text>
      </View>
      <View style={styles.emiView}>
        <View style={[styles.subdiv, styles.normaldiv]}>
          <Text
            style={[
              styles.priceText,
              {fontSize: scale(15), fontWeight: '600'},
            ]}>
            Easy EMI Option
          </Text>
          <Text style={[styles.descr, {color: 'red',fontWeight:'500'}]}>View plans</Text>
        </View>
        <Text style={styles.EmiText}>EMI starting from Rs.60/month</Text>
      </View>
      <View style={[styles.emiView, {marginTop: scale(10)}]}>
        <View style={[styles.subdiv, styles.normaldiv]}>
          <Text
            style={[
              styles.priceText,
              {fontSize: scale(15), fontWeight: '600'},
            ]}>
            Easy 15 Days returns and Exchanges
          </Text>
        </View>
        <Text style={styles.EmiText}>
          Choose to return or exchange for a different size if avilable within
          15 days
        </Text>
      </View>
      <View style={[styles.emiView, {marginTop: scale(10)}]}>
        <View style={[styles.subdiv, styles.normaldiv]}>
          <Text
            style={[
              styles.priceText,
              {fontSize: scale(15), fontWeight: '600'},
            ]}>
            Select Size
          </Text>
        </View>
        <View style={{flexDirection: 'row',marginTop:scale(10)}}>
          <Text style={[styles.sizetxt, {marginLeft: 0}]}>S</Text>
          <Text style={styles.sizetxt}>M</Text>
          <Text style={styles.sizetxt}>L</Text>
        </View>
      </View>
      <View style={styles.buttonView}>
        <TouchableOpacity
          onPress={() => setWished(!wished)}
          style={styles.button}>
          {wished ? (
            <MaterialCommunityIcons
              name="heart-outline"
              size={20}
              color={colors.black}
            />
          ) : (
            <MaterialCommunityIcons
              name="cards-heart"
              size={20}
              color={'red'}
            />
          )}
          <Text
            style={[
              styles.buttontext,
              {color: colors.Gray.darkGray, marginLeft: scale(8)},
            ]}>
            WISHLISTED
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => Alert.alert('Item added to cart')}
          style={[styles.button, styles.button2]}>
          <MaterialCommunityIcons
            name="shopping"
            size={20}
            color={colors.white}
          />
          <Text style={[styles.buttontext, {marginLeft: scale(8)}]}>
            ADD TO CART
          </Text>
        </TouchableOpacity>
      </View>
      {/* </ScrollView> */}
    </View>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({
  subdiv: {
    padding: scale(10),
  },
  productTitle: {
    fontSize: scale(16),
    color: colors.black,
    fontWeight: '500',
  },
  descr: {
    fontSize: scale(14),
    color: colors.Gray.darkGray,
    paddingVertical: scale(3),
  },
  priceText: {
    fontSize: scale(14),
    color: colors.black,
    fontWeight: '500',
    paddingVertical: scale(2),
  },
  emiView: {
    flexDirection: 'column',
    backgroundColor: colors.white,
    padding: scale(10),
  },
  EmiText: {
    fontSize: scale(15),
    color: colors.Gray.lightGray,
  },
  normaldiv: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: scale(5),
    padding: 0,
  },
  buttonView: {
    // height: scale(50),
    width: '100%',
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: scale(10),
    backgroundColor: colors.white,
    // paddingVertical:scale(15)
  },
  button: {
    width: '40%',
    borderWidth: 0.5,
    borderColor: colors.black,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingVertical: scale(10),
  },
  button2: {
    backgroundColor: '#4d5cab',
  },
  buttontext: {
    fontSize: scale(18),
    fontWeight: '600',
    color: colors.white,
  },
  sizetxt: {
    borderWidth: 1,
    height: 30,
    width: 30,
    borderRadius: 100,
    textAlign: 'center',
    paddingTop: scale(5),
    marginLeft: scale(15),
  },
});
