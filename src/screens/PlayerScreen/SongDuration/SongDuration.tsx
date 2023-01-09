import React, { FC } from 'react';
import { View, Text } from 'react-native';

import { millisToMinutesAndSeconds } from './songDuration.utils';

import styles from './songDuration.styles';
import { SongDurationProps } from './songDuration.types';

const SongDuration: FC<SongDurationProps> = ({ duration, position }) => {
  const currentPosition = millisToMinutesAndSeconds(position);
  const currentDuration = duration
    ? millisToMinutesAndSeconds(duration)
    : '--:--';

  return (
    <View style={styles.durationContainer}>
      <Text style={styles.duration}>{currentPosition}</Text>
      <Text style={styles.duration}>{currentDuration}</Text>
    </View>
  );
};

export default SongDuration;
