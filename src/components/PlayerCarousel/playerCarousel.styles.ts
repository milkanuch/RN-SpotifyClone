import { StyleSheet } from 'react-native';

import { responsiveHeight, responsiveWidth } from 'constants/scale';

const BOTTOM = 49;

const CONTAINER_WIDTH_PERCENTAGE = 100;

const CONTAINER_HEIGHT_PERCENTAGE = 10;

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    bottom: BOTTOM,
    height: responsiveHeight(CONTAINER_HEIGHT_PERCENTAGE),
    position: 'absolute',
    width: responsiveWidth(CONTAINER_WIDTH_PERCENTAGE),
  },
});

export default styles;
