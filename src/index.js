import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

import cronometro from './assets/cronometro.png';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#222',
  },
  timer: {
    marginTop: -160,
    color: '#fff',
    fontSize: 64,
    fontWeight: 'bold',
  },
  btnArea: {
    flexDirection: 'row',
    marginTop: 96,
    height: 40,
  },
  btn: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    margin: 16,
    height: 40,
    borderRadius: 6,
  },
  btnText: {
    color: '#222',
    fontWeight: 'bold',
  },
  lastTime: {
    color: '#fff',
    marginTop: 48,
    fontSize: 24,
    fontWeight: 'bold',
  },
});

const App = () => {
  const [buttonTxt, setButtonText] = useState('GO');
  const [clock, setClock] = useState(0);
  const [timer, setTimer] = useState(null);
  const [lastTime, setLastTime] = useState(0);

  const go = () => {
    if (timer !== null) {
      clearInterval(timer);

      setTimer(null);
      setButtonText('GO');
    } else {
      setButtonText('STOP');
      const runClock = setInterval(() => {
        setClock((prev) => prev + 0.1);
      }, 100);

      setTimer(runClock);
    }
  };

  const reset = () => {
    if (timer !== null) {
      clearInterval(timer);
      setTimer(null);
    }

    setLastTime(clock);
    setClock(0);
    setButtonText('GO');
  };

  return (
    <View style={styles.container}>
      <Image source={cronometro} />

      <Text style={styles.timer}>{clock.toFixed(1)}</Text>

      <View style={styles.btnArea}>
        <TouchableOpacity style={styles.btn} onPress={go}>
          <Text style={styles.btnText}>{buttonTxt}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn} onPress={reset}>
          <Text style={styles.btnText}>RESET</Text>
        </TouchableOpacity>
      </View>

      {lastTime !== 0 && (
        <Text style={styles.lastTime}>LAST TIME : {lastTime.toFixed(1)}s</Text>
      )}
    </View>
  );
};

export default App;
