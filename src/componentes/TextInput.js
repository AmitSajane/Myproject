
/**
 * colors.js
 * Created on 2021/12/28
 *
 * @author Amit
 * @description Text Input
 */

import React, {memo} from 'react';
import {StyleSheet, TextInput as RNTextInput} from 'react-native';
import colors from '../shared/colors';
import {scale, scaleVertical} from '../shared/scaling';
// import {Icon} from 'react-native-vector-icons/MaterialCommunityIcons';

const TextInput = ({
  children,
  style,
  value,
  onChangeText,
  placeholder,
  secureTextEntry,
  keyboardType,
  autoCapitalize,
  inlineImageLeft,
  ...rest
}) => {
  return (
    <RNTextInput
      style={[styles.container, style]}
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
      keyboardType={keyboardType}
      placeholder={placeholder}
      placeholderTextColor={colors.white}
      autoCapitalize={autoCapitalize}
      inlineImageLeft={inlineImageLeft}
      {...rest}
    />
  );
};

export default memo(TextInput);

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: 10,
    marginVertical: scaleVertical(6),
    paddingVertical: scaleVertical(10),
    paddingHorizontal: scale(14),
    fontSize: scale(17),
    fontWeight: '500',
    color: colors.white,

  },
  
});