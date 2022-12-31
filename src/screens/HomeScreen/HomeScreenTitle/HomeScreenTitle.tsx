import React from 'react';
import { View } from 'react-native';

import IconButton from 'components/IconButton/IconButton';
import Title from 'components/Title/Title';

import { iconImages } from 'constants/icons';

import { getGreetMessageByTime } from './homeScreenTitle.utils';

import styles from './homeScreenTitle.styles';

const HomeScreenTitle = () => {
  const handleSettingsPress = () => {
    //TODO: navigation on settings screen
  };

  return (
    <View style={styles.container}>
      <Title text={getGreetMessageByTime()} />
      <IconButton iconName={iconImages.Gears} onPress={handleSettingsPress} />
    </View>
  );
};

export default HomeScreenTitle;
