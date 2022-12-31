import React from 'react';
import { ScrollView } from 'react-native';

import HomeScreenTitle from './HomeScreenTitle/HomeScreenTitle';

import styles from './homeScreen.styles';

const HomeScreen = () => {
  return (
    <ScrollView style={styles.screen}>
      <HomeScreenTitle />
    </ScrollView>
  );
};

export default HomeScreen;
