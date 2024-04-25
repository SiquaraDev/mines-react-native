import React from 'react';
import {View} from 'react-native';

import {styles} from '../styles/styleFlag';

export default props => {
  return (
    <View style={styles.container}>
      <View
        style={[styles.flagpole, props.bigger ? styles.flagpoleBigger : null]}
      />
      <View style={[styles.flag, props.bigger ? styles.flagBigger : null]} />
      <View style={[styles.base1, props.bigger ? styles.base1Bigger : null]} />
      <View style={[styles.base2, props.bigger ? styles.base2Bigger : null]} />
    </View>
  );
};
