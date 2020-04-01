import React from 'react';
import {
  View,
  Button,
  TextInput,
  StyleSheet,
  FlatList,
  Text,
} from 'react-native';
import {Field, reduxForm, FormSection} from 'redux-form';
import data from './data/baseJornada.json';

import InputText from './components/InputText';
import InputInteger from './components/InputInteger';
import InputSelect from './components/InputSelect';
import InputBoolean from './components/InputBoolean';
import InputDecimal from './components/InputDecimal';

const dados = data.Campos;
let dadosItemFormulario = null;

const Form = props => {
  const {handleSubmit} = props;

  const onSubmit = values => console.log(values);
  const renderInput3 = ({input: {onChange, ...input}, ...rest}) => {
    switch (dadosItemFormulario.Tipo) {
      case 'TEXT':
        return (
          <TextInput
            style={styles.textInput}
             onChangeText={onChange}
             {...input}
             {...rest}
          />
        );
      case 'INT':
        return (
          <InputInteger
            onChangeText={onChange}   
            dados={dadosItemFormulario}
          />
        );
      case 'SELECT':
        return (
          <InputSelect
            onChangeText={onChange}
            {...input}
            dados={dadosItemFormulario}
          />
        );
      case 'BIT':
        return (
          <InputBoolean
            style={styles.input}
            onChangeText={onChange}
            {...input}
            dados={dadosItemFormulario}
          />
        );
      case 'DECIMAL':
        return (
          <InputDecimal
            onChangeText={onChange}
            {...input}
            dados={dadosItemFormulario}
          />
        );
      default:
        return (
          <InputText
            onChangeText={onChange}
            {...input}
            {...rest}
            dados={dadosItemFormulario}
          />
        );
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.descricao}>Identificação Pessoal</Text>
      <FlatList
        contentContainerStyle={styles.list}
        data={dados}
        keyExtractor={dados.CampoID}
        renderItem={({item}) => (
          (dadosItemFormulario = item),
          (
            <View style={styles.question}>
              <Text style={styles.item}>
                {dadosItemFormulario.CampoID +
                  ' - ' +
                  dadosItemFormulario.Label}
              </Text>
              <Field
                name={'campo_' + item.CampoID}
                props={{
                  id: item.CampoID,
                }}
                component={renderInput3}
              />
            </View>
          )
        )}
      />
      <Button title={'Submit'} onPress={handleSubmit(onSubmit)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fafafa',
    flex: 1,
    paddingTop: 22,
  },
  list: {padding: 20},
  descricao: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
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
export default reduxForm({form: 'formulario1'})(Form);
