import React from 'react';
import {useState} from 'react';
import {SafeAreaView, Text, View, Alert} from 'react-native';

import {styles} from './../styles/styleApp';

import {params} from '../utils/params';

import {
  cloneBoard,
  openField,
  hadExplosion,
  wonGame,
  showMines,
  generateBoard,
  invertFlag,
  flagsUsed,
  minesAmount,
} from '../utils/logicFunctions';

import MineField from './MineField';
import Header from './Header';
import LevelSelection from './LevelSelection';

function App() {
  const [board, setBoard] = useState(generateBoard());
  const [won, setWon] = useState(false);
  const [lost, setLost] = useState(false);
  const [showSelection, setShowSelection] = useState(false);

  const onOpenField = (row, column) => {
    const newBoard = [...board];
    openField(newBoard, row, column);
    const lost = hadExplosion(newBoard);
    const won = wonGame(newBoard);

    if (lost) {
      showMines(newBoard);
      Alert.alert('You lost!');
    }

    if (won) {
      Alert.alert('You won!');
    }

    setBoard(newBoard);
    setLost(lost);
    setWon(won);
  };

  const onSelectField = (row, column) => {
    const newBoard = cloneBoard(board);
    invertFlag(newBoard, row, column);
    const won = wonGame(newBoard);

    if (won) {
      Alert.alert('You won!');
    }

    setBoard(newBoard);
  };

  onLevelSelected = level => {
    params.difficultLevel = level;
    setBoard(generateBoard());
  };

  return (
    <SafeAreaView style={styles.container}>
      <LevelSelection
        isVisible={showSelection}
        onLevelSelected={onLevelSelected}
        onCancel={() => setShowSelection(false)}
      />
      <Header
        flagsLeft={minesAmount() - flagsUsed(board)}
        onNewGame={() => setBoard(generateBoard())}
        onFlagPress={() => setShowSelection(true)}
      />
      <View>
        <MineField
          board={board}
          onOpenField={onOpenField}
          onSelectField={onSelectField}
        />
      </View>
    </SafeAreaView>
  );
}

export default App;
