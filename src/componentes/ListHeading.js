import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {scale} from '../shared/scaling';
import colors from '../shared/colors';

const ListHeading = ({heading}) => {
  return (
    <View style={styles.normalView}>
      <Text style={styles.winterText}>{heading}</Text>
    </View>
  );
};

export default ListHeading;

const styles = StyleSheet.create({
  normalView: {
    backgroundColor: colors.white,
    padding: scale(12),
  },
  winterText: {
    fontSize: scale(17),
    textTransform: 'capitalize',
    fontWeight:'500',
    color: colors.Gray.darkGray,
  },
});
