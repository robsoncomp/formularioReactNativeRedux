import React, {useState} from 'react';
import {StyleSheet, Switch, Text, View, TextInput} from 'react-native';

export default props => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View style={styles.containerSwitch}>
      <Switch onValueChange={toggleSwitch} value={isEnabled} />
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    flexDirection: 'row',
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
  containerSwitch: {
    flex: 1,
    alignItems: 'flex-start',
    marginTop: 10,
  },
});
