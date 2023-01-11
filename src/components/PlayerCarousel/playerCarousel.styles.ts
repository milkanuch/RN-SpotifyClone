import { StyleSheet } from 'react-native';

import { responsiveHeight, responsiveWidth } from 'constants/scale';

const BOTTOM = 55;

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    bottom: BOTTOM,
    height: responsiveHeight(10),
    position: 'absolute',
    width: responsiveWidth(100),
  },
});

export default styles;
