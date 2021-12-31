import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import colors from '../shared/colors';
import {scale} from '../shared/scaling';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Header = ({title, showMenuIcon, arrowBack, onPressBack, openMenu}) => {
  return (
    <View style={styles.mainContainer}>
      {showMenuIcon && (
        <TouchableOpacity onPress={openMenu}>
          <MaterialCommunityIcons name="menu" size={25} color={colors.white} />
        </TouchableOpacity>
      )}
      {arrowBack && (
        <TouchableOpacity onPress={onPressBack}>
          <MaterialCommunityIcons
            name="arrow-left"
            size={25}
            color={colors.white}
          />
        </TouchableOpacity>
      )}

      <Text style={styles.headerText}>{title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#08406e',
    padding: scale(10),
    flexDirection: 'row',
  },
  headerText: {
    fontSize: scale(18),
    color: colors.white,
    marginLeft: scale(10),
    fontWeight:'500'
  },
});
