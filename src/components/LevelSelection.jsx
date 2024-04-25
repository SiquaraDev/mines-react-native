import React from 'react';
import {View, Text, TouchableOpacity, Modal} from 'react-native';

import {styles} from './../styles/styleLevelSelection';

const Option = props => {
  return (
    <TouchableOpacity
      style={[styles.button, props.style]}
      onPress={props.onPress}>
      <Text style={styles.buttonLabel}>{props.label}</Text>
    </TouchableOpacity>
  );
};

export default props => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={props.isVisible}
      onRequestClose={props.onCancel}>
      <View style={styles.frame}>
        <View style={styles.container}>
          <Text style={styles.title}>Select Difficult</Text>
          <Text style={styles.text}>{props.text}</Text>
          <View style={styles.footer}>
            <Option
              label="Easy"
              style={styles.bgEasy}
              onPress={() => props.onLevelSelected(0.1)}
            />
            <Option
              label="Medium"
              style={styles.bgNormal}
              onPress={() => props.onLevelSelected(0.18)}
            />
            <Option
              label="Hard"
              style={styles.bgHard}
              onPress={() => props.onLevelSelected(0.26)}
            />
          </View>
          <TouchableOpacity
            style={styles.containerLine}
            onPress={props.onCancel}>
            <View style={[styles.line, {transform: [{rotate: '45deg'}]}]} />
            <View style={[styles.line, {transform: [{rotate: '135deg'}]}]} />
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};
