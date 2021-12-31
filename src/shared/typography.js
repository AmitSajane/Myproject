/**
 * typography.js
 * Created on 2021/12/27
 *
 * @author Amit Sajane
 * @description Font styles for app
 */

import {StyleSheet} from 'react-native';
import colors from './colors';
import {scale} from './scaling';

export default  typography = StyleSheet.create({
  h1: {
    fontSize: scale(30),
    //fontFamily: 'Roboto-Regular',
    color: colors.darkGray,
  },
  h2: {
    fontSize: scale(26),
    //fontFamily: 'Roboto-Regular',
    color: colors.darkGray,
  },
  h3: {
    fontSize: scale(24),
    //fontFamily: 'Roboto-Regular',
    color: colors.darkGray,
  },
  h4: {
    fontSize: scale(22),
    //fontFamily: 'Roboto-Regular',
    color: colors.black,
  },
  h5: {
    fontSize: scale(20),
    //fontFamily: 'Roboto-Regular',
    color: colors.black,
  },
  h6: {
    fontSize: scale(17),
    //fontFamily: 'Roboto-Regular',
    color: colors.darkGray,
  },
  display1: {
    fontSize: scale(42),
    //fontFamily: 'Roboto-Regular',
    color: colors.gray,
  },
  display2: {
    fontSize: scale(32),
    //fontFamily: 'Roboto-Regular',
    color: colors.gray,
  },
  display3: {
    fontSize: scale(28),
    //fontFamily: 'Roboto-Regular',
    color: colors.gray,
  },
  display4: {
    fontSize: scale(22),
    //fontFamily: 'Roboto-Regular',
    color: colors.gray,
  },
  headline: {
    fontSize: scale(21),
    //fontFamily: 'Roboto-Regular',
    color: colors.darkGray,
  },
  title: {
    fontSize: scale(22),
    //fontFamily: 'Roboto-Regular',
    fontWeight: '500',
    color: colors.Gray.gray,
    // marginVertical: scale(5),
  },
  subheading: {
    fontSize: scale(22),
    //fontFamily: 'Roboto-Regular',
    fontWeight: '600',
    color: colors.black,
    marginVertical: scale(5),
  },
  label: {
    fontSize: scale(18),
    //fontFamily: 'Roboto-Regular',
    fontWeight: '400',
    color: colors.black,
  },
  placeholder: {
    fontSize: scale(17),
    //fontFamily: 'Roboto-Regular',
    color: colors.placeholder,
  },
  body1: {
    fontSize: scale(14),
    //fontFamily: 'Roboto-Regular',
    color: colors.black,
  },
  body2: {
    fontSize: scale(15),
    //fontFamily: 'OpenSans-Regular',
    color: colors.black,
  },
  outline: {
    fontSize: scale(50),
    //fontFamily: 'Neon',
    color: colors.black,
  },
  caption1: {
    fontSize: scale(15),
    //fontFamily: 'Roboto-Regular',
    color: colors.darkGray,
  },
  caption2: {
    fontSize: scale(13),
    //fontFamily: 'Roboto-Regular',
    color: colors.black,
    opacity: 0.8,
  },
  buttonPrimary: {
    fontSize: scale(19),
    //fontFamily: 'Roboto-Regular',
  },
  buttonSecondary: {
    fontSize: scale(18),
    //fontFamily: 'Roboto-Regular',
    fontWeight: '400',
    color: colors.darkGray,
  },
  textButton: {
    fontSize: scale(17),
    //fontFamily: 'Roboto-Regular',
    color: colors.black,
  },
});
