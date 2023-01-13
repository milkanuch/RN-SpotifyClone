import React, { FC } from 'react';
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';

import { BUTTON_TEXT, ERROR_SUBTITLE, TITLE } from './fallBack.settings';
import styles from './fallBack.styles';
import { FallBackProps } from './fallBack.types';

const FallBack: FC<FallBackProps> = ({ error, onPress: handleResetError }) => (
  <SafeAreaView style={styles.container}>
    <View style={styles.content}>
      <Text style={styles.title}>{TITLE}</Text>
      <Text style={styles.subtitle}>{ERROR_SUBTITLE}</Text>
      <Text style={styles.error}>{error.toString()}</Text>
      <TouchableOpacity onPress={handleResetError} style={styles.button}>
        <Text style={styles.buttonText}>{BUTTON_TEXT}</Text>
      </TouchableOpacity>
    </View>
  </SafeAreaView>
);

export default FallBack;
