import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handlePress = (value) => {
    setInput(input + value);
  };

  const calculate = () => {
    try {
      setResult(eval(input).toString());
    } catch (error) {
      setResult('Error');
    }
  };

  const clear = () => {
    setInput('');
    setResult('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.resultContainer}>
        <Text style={styles.inputText}>{input}</Text>
        <Text style={styles.resultText}>{result}</Text>
      </View>
      <View style={styles.buttonsContainer}>
        {['1', '2', '3', '+'].map((item) => (
          <TouchableOpacity key={item} style={styles.button} onPress={() => handlePress(item)}>
            <Text style={styles.buttonText}>{item}</Text>
          </TouchableOpacity>
        ))}
        {['4', '5', '6', '-'].map((item) => (
          <TouchableOpacity key={item} style={styles.button} onPress={() => handlePress(item)}>
            <Text style={styles.buttonText}>{item}</Text>
          </TouchableOpacity>
        ))}
        {['7', '8', '9', '*'].map((item) => (
          <TouchableOpacity key={item} style={styles.button} onPress={() => handlePress(item)}>
            <Text style={styles.buttonText}>{item}</Text>
          </TouchableOpacity>
        ))}
        {['0', 'C', '=', '/'].map((item) => (
          <TouchableOpacity
            key={item}
            style={styles.button}
            onPress={() => (item === '=' ? calculate() : item === 'C' ? clear() : handlePress(item))}
          >
            <Text style={styles.buttonText}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  resultContainer: {
    width: '90%',
    backgroundColor: '#f5f5f5',
    alignItems: 'flex-end',
    justifyContent: 'center',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  inputText: {
    fontSize: 24,
    color: '#333',
  },
  resultText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000',
  },
  buttonsContainer: {
    width: '90%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  button: {
    width: '20%',
    height: 60,
    backgroundColor: '#4CAF50',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    margin: 5,
  },
  buttonText: {
    fontSize: 24,
    color: '#fff',
  },
});
