/**
 * scaling.js
 * Created on 2021/12/27 
 *
 * @author Amit
 * @description Scaling/normalize methods
 */

import {Dimensions, PixelRatio} from 'react-native';

const baseWidth = 375; // iPhone 11 width
const baseHeight = 667; // iPhone 11 height
const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');
const scaleWidth = SCREEN_WIDTH / baseWidth;
const scaleHeight = SCREEN_HEIGHT / baseHeight;
const minScale = Math.min(scaleWidth, scaleHeight);
const maxScale = Math.max(scaleWidth, scaleHeight);

export function scale(size) {
  const newSize = size * minScale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
}

export function scaleVertical(size) {
  const newSize = size * maxScale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
}
