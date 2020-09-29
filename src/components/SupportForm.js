import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from '../styles/form';

export default function SupportForm() {
  const { control, register, handleSubmit, errors, setValue } = useForm();
  const Título = React.useRef();
  const Descripción = React.useRef();
  const onSubmit = (d) => {
    console.log(d);
  };

  React.useEffect(() => {
    register('Usuario');
  }, [register]);

  console.log('errors', errors);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.label}>Título</Text>
        {/* <TextInput
          onChangeText={(value) => {
            setValue('Problema con la app', value);
          }}
        /> */}
        <Controller
          name="Título"
          control={control}
          rules={{ required: 'This is required.' }}
          onFocus={() => {
            Título.current.focus();
          }}
          render={(props) => (
            <TextInput
              {...props}
              style={styles.input}
              //   placeholder="Título"
              onChangeText={(value) => {
                props.onChange(value);
              }}
              ref={Título}
            />
          )}
        ></Controller>
      </View>
      <View>
        <Text style={styles.label}>Descripción</Text>
        {/* <TextInput
          onChangeText={(value) => {
            setValue('No me carga la app', value);
          }}
        /> */}
        <Controller
          name="Descripción"
          control={control}
          rules={{ required: 'This is required.' }}
          onFocus={() => {
            Descripción.current.focus();
          }}
          render={(props) => (
            <TextInput
              {...props}
              style={styles.input}
              //   placeholder="Descripción"
              onChangeText={(value) => {
                props.onChange(value);
              }}
              ref={Descripción}
            />
          )}
        ></Controller>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleSubmit(onSubmit)}>
        <Text style={styles.buttonText1}>Enviar</Text>
      </TouchableOpacity>
    </View>
  );
}
