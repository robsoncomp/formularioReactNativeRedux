import RNPickerSelect from 'react-native-picker-select';
import React from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';

export default function InputSelect(props) {
  return (
    <RNPickerSelect
      style={styles.container}
      items={props.dados.Enum}
      placeholder={{
        label: props.dados.Placeholder,
        value: null,
      }}
      onValueChange={value => value}
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
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
