import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

  const [guess, setGuess] = useState('');
  const [number, setNumber] = useState(randomNumberInRange(1,100));
  const [message, setMessage] = useState('Guess a number between 1-100');
  const [count, setCount] = useState(0);

  function randomNumberInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const pressed = () => {
    if(guess < number) {
      setMessage('Your guess ' + (guess) + ' is too low');
      setCount(parseInt(count) + 1);
    }
    else if (guess > number){
      setMessage('Your guess ' + (guess) + ' is too high');
      setCount(parseInt(count) + 1);
    }
    else {
      alert('You guessed the number in ' + count + ' guesses!');
      setNumber(randomNumberInRange(1,100));
      setCount(0);
      setMessage('Guess a number between 1-100');
    }
  }

  return (
    <View style={styles.container}>
      <Text>{message}</Text>
      <TextInput
      style={{width: 50, borderColor: 'gray', borderWidth: 1, margin:10}}
      keyboardType={"number-pad"}
      onChangeText={guess => setGuess(guess)}
      ></TextInput>
      <View>
        <Button
        title="make guess"
        onPress={pressed}
        ></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
