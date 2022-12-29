import React, { FC } from 'react';
import { Image } from 'react-native';

import styles from './icon.styles';
import { IconProps } from './icon.types';

const Icon: FC<IconProps> = ({ source }) => {
  return <Image source={source} style={styles.icon} />;
};

export default Icon;
