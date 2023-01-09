import { StyleSheet } from 'react-native';

import { STATUS_BAR_HEIGHT } from 'constants/scale';

const CONTAINER_HEIGHT = 256;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    height: STATUS_BAR_HEIGHT + CONTAINER_HEIGHT,
    justifyContent: 'center',
    paddingVertical: 10,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default styles;
