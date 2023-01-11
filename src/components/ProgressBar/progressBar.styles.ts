import { StyleSheet } from 'react-native';

import { COLORS } from 'constants/colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.lightGray,
    flexDirection: 'row',
    height: '5%',
    width: '100%',
  },
  progressBar: {
    backgroundColor: COLORS.greenBrand,
    height: '100%',
  },
});

export default styles;
