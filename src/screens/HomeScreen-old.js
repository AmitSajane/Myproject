/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TextInput,
  FlatList,
} from 'react-native';
import Header from '../componentes/HeaderComponent';
import {scale} from '../shared/scaling';
// import TextInput from '../componentes/TextInput';
import colors from '../shared/colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const taskdata = [
  {id: 1, title: 'task1'},
  {id: 2, title: 'task2'},
  {id: 3, title: 'task3'},
];

const HomeScreen = ({}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Header title={'Home'} />
      {/* <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          backgroundColor: colors.theme,
        }}> */}
      <FlatList
        data={taskdata}
        horizontal
        renderItem={({item}) => (
          <>
            <View style={styles.subcontainer}>
              <View style={styles.taskHeadView}>
                <Text style={styles.taskheading}>Task 1</Text>
                <MaterialCommunityIcons
                  name="dots-vertical"
                  size={25}
                  color={colors.white}
                />
              </View>
              {/* <View style={{ flex: 1 }}>
              <FlatList style={{ height: 199, backgroundColor: 'red' }} />
            </View> */}
              {/* <TextInput style={[styles.input, {}]} placeholder={'type here'} /> */}
            </View>
            <View style={styles.subcontainer}>
              <TextInput
                style={[styles.input, {width: '100%'}]}
                placeholder={'type here'}
              />
            </View>
          </>
        )}
        keyExtractor={(item, index) => index}
      />
      {/* </ScrollView> */}
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  subcontainer: {
    backgroundColor: colors.theme,
    width: 300,
    flex: 1,
    margin: scale(10),
  },
  input: {
    backgroundColor: '#1b221f',
    height: scale(40),
    borderRadius: 5,
    color: colors.white,
    width: '100%',
  },
  taskHeadView: {
    width: '100%',
    backgroundColor: '#000',
    flexDirection: 'row',
    justifyContent: 'space-between',
    // paddingHorizontal: scale(10),ss
    padding: scale(10),
  },
  taskheading: {
    color: '#fff',
    fontSize: scale(17),
  },
});
