import { StyleSheet } from 'react-native';

import { STATUS_BAR_HEIGHT } from 'constants/scale';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    height: STATUS_BAR_HEIGHT + 256,
    justifyContent: 'center',
    paddingVertical: 10,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    height: undefined,
    width: undefined,
  },
});

export default styles;
