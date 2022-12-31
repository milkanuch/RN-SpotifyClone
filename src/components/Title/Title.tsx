import React, { FC } from 'react';
import { View, Text } from 'react-native';

import styles from './title.styles';
import { TitleProps } from './title.types';

const Title: FC<TitleProps> = ({ text, style }) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.title, style]}>{text}</Text>
    </View>
  );
};

export default Title;
