import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { View, Text, Button, TextInput, TouchableOpacity } from 'react-native';
import styles from '../styles/form';

export default function SupportForm() {
  const { control, register, handleSubmit, errors, setValue } = useForm();
  const Nombre = React.useRef();
  const CorreoElectrónico = React.useRef();
  const Contraseña = React.useRef();
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
        <Text style={styles.label}>Nombre</Text>
        {/* <TextInput
          onChangeText={(value) => {
            setValue('Usuario', value);
          }}
        /> */}
        <Controller
          name="Nombre"
          control={control}
          rules={{ required: 'This is required.' }}
          onFocus={() => {
            Nombre.current.focus();
          }}
          render={(props) => (
            <TextInput
              {...props}
              style={styles.input}
              //   placeholder="Nombre"
              onChangeText={(value) => {
                props.onChange(value);
              }}
              ref={Nombre}
            />
          )}
        ></Controller>
      </View>
      <View>
        <Text style={styles.label}>Correo electrónico</Text>
        {/* <TextInput
          onChangeText={(value) => {
            setValue('Pereyra', value);
          }}
        /> */}
        <Controller
          name="Correo electrónico"
          control={control}
          rules={{ required: 'This is required.' }}
          onFocus={() => {
            CorreoElectrónico.current.focus();
          }}
          render={(props) => (
            <TextInput
              {...props}
              style={styles.input}
              //   placeholder="Correo electrónico"
              onChangeText={(value) => {
                props.onChange(value);
              }}
              ref={CorreoElectrónico}
            />
          )}
        ></Controller>
      </View>
      <View>
        <Text style={styles.label}>Contraseña</Text>
        {/* <TextInput
          onChangeText={(value) => {
            setValue('Pereyra', value);
          }}
        /> */}
        <Controller
          name="Correo electrónico"
          control={control}
          rules={{ required: 'This is required.' }}
          onFocus={() => {
            Contraseña.current.focus();
          }}
          render={(props) => (
            <TextInput
              {...props}
              style={styles.input}
              //   placeholder="Contraseña"
              onChangeText={(value) => {
                props.onChange(value);
              }}
              ref={Contraseña}
            />
          )}
        ></Controller>
      </View>
      <TouchableOpacity style={styles.buttonP} onPress={handleSubmit(onSubmit)}>
        <Text style={styles.buttonText1}>Editar Perfil</Text>
      </TouchableOpacity>
    </View>
  );
}
