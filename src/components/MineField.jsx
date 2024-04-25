import React from 'react';
import {View} from 'react-native';

import styles from '../styles/styleMineField';

import Field from './Field';

export default props => {
  const rows = props.board.map((row, r) => {
    const columns = row.map((field, c) => {
      return (
        <Field
          {...field}
          key={c}
          onOpen={() => props.onOpenField(r, c)}
          onSelect={e => props.onSelectField(r, c)}
        />
      );
    });
    return (
      <View key={r} style={{flexDirection: 'row'}}>
        {columns}
      </View>
    );
  });

  return <View style={styles.container}>{rows}</View>;
};
