import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import {useSelector} from 'react-redux';

const StateViewer = (props) => {
  const formState = useSelector((state) => state.form);
  // Prettify the JSON code:
  const prettyFormState = JSON.stringify(formState, null, 2);

  //console.log(prettyFormState.find("values"));
  return (
    <View style={styles.root}>
      <TextInput multiline numberOfLines={20} value={prettyFormState} disabled />
    </View>
  );
};

const styles = StyleSheet.create({
   root: {
     flex: 0.5
   }
});

export default StateViewer;