import React, { FC } from 'react';
import { Image } from 'react-native';

import styles from './icon.styles';
import { IconProps } from './icon.types';

const Icon: FC<IconProps> = ({ source, iconStyle }) => {
  return <Image source={source} style={[styles.icon, iconStyle]} />;
};

export default Icon;
