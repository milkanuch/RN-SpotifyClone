import React, { FC } from 'react';
import { View } from 'react-native';

import { getProgressWidth } from './progressBar.utils';

import styles from './progressBar.styles';
import { ProgressBarProps } from './progressBar.types';

const ProgressBar: FC<ProgressBarProps> = ({ currentValue, limitValue }) => {
  const width = getProgressWidth(currentValue, limitValue ? limitValue : 0);

  return (
    <View style={styles.container}>
      <View style={[styles.progressBar, width]} />
    </View>
  );
};

export default ProgressBar;
