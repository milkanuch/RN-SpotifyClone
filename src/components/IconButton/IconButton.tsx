import React, { FC } from 'react';
import { TouchableOpacity } from 'react-native';

import Icon from 'components/Icon/Icon';

import { IconButtonProps } from './iconButton.types';

const IconButton: FC<IconButtonProps> = ({
  iconName,
  onPress: handlePress,
}) => {
  return (
    <TouchableOpacity onPress={handlePress}>
      <Icon source={iconName} />
    </TouchableOpacity>
  );
};

export default IconButton;
