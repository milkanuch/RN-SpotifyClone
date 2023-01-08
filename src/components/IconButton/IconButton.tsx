import React, { FC } from 'react';
import { TouchableOpacity } from 'react-native';

import Icon from 'components/Icon/Icon';

import { IconButtonProps } from './iconButton.types';

const IconButton: FC<IconButtonProps> = ({
  iconName,
  onPress: handlePress,
  containerStyle,
  iconStyle,
}) => {
  return (
    <TouchableOpacity onPress={handlePress} style={containerStyle}>
      <Icon iconStyle={iconStyle} source={iconName} />
    </TouchableOpacity>
  );
};

export default IconButton;
