import React from 'react';
import { View } from 'react-native';

import IconButton from 'components/IconButton/IconButton';
import Title from 'components/Title/Title';

import { iconImages } from 'constants/icons';

import { getGreetingMessageByTime } from './homeScreenTitle.utils';

import styles from './homeScreenTitle.styles';

const HomeScreenTitle = () => {
  const greetingMessage = getGreetingMessageByTime();

  const handleSettingsPress = () => {
    //TODO: navigation on settings screen
  };

  return (
    <View style={styles.container}>
      <Title text={greetingMessage} />
      <IconButton iconName={iconImages.Gears} onPress={handleSettingsPress} />
    </View>
  );
};

export default HomeScreenTitle;
