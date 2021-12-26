import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

import { useFormik } from 'formik';
import * as Yup from 'yup';

import { user, userDetails } from '../../utils/userDB';

import useAuth from '../../hooks/useAuth';

const INITIAL_VALUES = {
  username: '',
  password: '',
};

const VALIDATION_SCHEMA = {
  username: Yup.string().required('The user always is required'),
  password: Yup.string().required('The password always is required'),
};

const FormLogin = () => {
  const [errorLogin, setErrorLogin] = useState('');
  const { login } = useAuth();
  
  const formik = useFormik({
    initialValues: INITIAL_VALUES,
    validationSchema: Yup.object(VALIDATION_SCHEMA),
    validateOnChange: false,
    onSubmit: (formValue) => {
      const { username, password } = formValue;

      if (username !== user.username || password !== user.password) {
        setErrorLogin('The user or password is not correct')
      } else {
        login({ userData: userDetails })
      }
    },
  });

  return (
    <View>
      <Text style={styles.title}>Login</Text>
      <TextInput
        placeholder='Username'
        style={styles.input}
        autoCapitalize='none'
        value={formik.values.username}
        onChangeText={(text) => formik.setFieldValue('username', text)}
      />
      <TextInput
        placeholder='Password'
        style={styles.input}
        autoCapitalize='none'
        secureTextEntry={true}
        value={formik.values.password}
        onChangeText={(text) => formik.setFieldValue('password', text)}
      />
      <Button title='Login' onPress={formik.handleSubmit} />

      <Text style={styles.error}>{formik.errors.username}</Text>
      <Text style={styles.error}>{formik.errors.password}</Text>
      <Text style={styles.error}>{errorLogin}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 50,
    marginBottom: 15,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
  error: {
    textAlign: 'center',
    color: '#f00',
    marginTop: 20,
  },
});

export default FormLogin;
