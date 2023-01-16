import React, { FC } from 'react';
import { View, Text } from 'react-native';

import { convertSecondsToMinutesAndSeconds } from './songDuration.utils';

import styles from './songDuration.styles';
import { SongDurationProps } from './songDuration.types';

const SongDuration: FC<SongDurationProps> = ({ duration, position }) => {
  const currentPosition = convertSecondsToMinutesAndSeconds(position);
  const currentDuration = duration
    ? convertSecondsToMinutesAndSeconds(duration)
    : '--:--';

  return (
    <View style={styles.durationContainer}>
      <Text style={styles.duration}>{currentPosition}</Text>
      <Text style={styles.duration}>{currentDuration}</Text>
    </View>
  );
};

export default SongDuration;
