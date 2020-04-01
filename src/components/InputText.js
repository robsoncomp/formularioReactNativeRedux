import React from 'react';
import {StyleSheet, View, TextInput} from 'react-native';

export default function InputText(props) {
  return (
    <TextInput
      style={styles.textInput}
      onChangeText={props.onChangeText}
      onBlur={props.onBlur}
      onFocus={props.onFocus}
      value={props.value}    
    />
  );
}
const styles = StyleSheet.create({
  item: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  question: {
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 5,
    padding: 15,
    marginBottom: 15,
  },
  textInput: {
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 5,
    fontSize: 16,
  },
});
