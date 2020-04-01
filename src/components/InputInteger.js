import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';


export default function InputInteger(props) {
  return (
    <View>
      <TextInput
       style={styles.textInput}
        onChangeText={props.onChangeText}
        onBlur={props.onBlur}
        onFocus={props.onFocus}
        value={props.value}
        maxLength={props.dados.TamanhoLimite}
        placeholder={props.dados.Placeholder}
        keyboardType="numeric"
      />
    </View>
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
