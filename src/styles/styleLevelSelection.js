import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  frame: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
  container: {
    backgroundColor: '#EEE',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    paddingTop: 20,
  },
  button: {
    marginTop: 10,
    padding: 5,
  },
  buttonLabel: {
    fontSize: 20,
    color: '#EEE',
    fontWeight: 'bold',
  },
  bgEasy: {
    backgroundColor: '#49b65d',
  },
  bgNormal: {
    backgroundColor: '#2765F7',
  },
  bgHard: {
    backgroundColor: '#F26337',
  },
  containerLine: {
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 220,
    right: -100,
  },
  line: {
    position: 'absolute',
    height: 5,
    width: 30,
    borderRadius: 3,
    backgroundColor: 'red',
  },
});
