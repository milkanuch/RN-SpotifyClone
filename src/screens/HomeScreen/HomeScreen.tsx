import React from 'react';
import { View } from 'react-native';

import HomeScreenTitle from './HomeScreenTitle/HomeScreenTitle';
import LastPlayedAlbums from './LastPlayedAlbums/LastPlayedAlbums';

import styles from './homeScreen.styles';

const HomeScreen = () => {
  return (
    <View style={styles.screen}>
      <HomeScreenTitle />
      <LastPlayedAlbums />
    </View>
  );
};

export default HomeScreen;
