import React from 'react';
import { Platform, KeyboardAvoidingView, Text, TextInput, View, Keyboard } from 'react-native';
import { loginStyles } from '../theme/loginTheme';
import { WhiteLogo } from '../components/WhiteLogo';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useForm } from '../hooks/useForm';
import { StackScreenProps } from '@react-navigation/stack';

interface Props extends StackScreenProps<any, any> { }


export const RegisterScreen = ({ navigation }: Props) => {

  const { email, password, name, onChange } = useForm({
    name: '',
    email: '',
    password: ''
  });

  const onRegister = () => {
    console.log({ email, password, name })
    Keyboard.dismiss();
  }

  return (
    <>

      <KeyboardAvoidingView
        style={{ flex: 1, backgroundColor: '#5856D6' }}
        behavior={(Platform.OS === 'ios') ? 'padding' : 'height'}
      >

        <View style={loginStyles.formContainer}>

          {/* Keyboard avoid view */}
          <WhiteLogo />

          <Text style={loginStyles.title}>Registro</Text>

          <Text style={loginStyles.label}>Nombre:</Text>

          <TextInput
            placeholder='Ingrese su nombre'
            placeholderTextColor="rgba(255,255,255,0.4)"
            underlineColorAndroid='white'
            style={[
              loginStyles.inputField,
              (Platform.OS === 'ios') && loginStyles.inputFieldIOS
            ]}
            selectionColor='white'

            onChangeText={(value) => onChange(value, 'email')}
            value={email}
            onSubmitEditing={onRegister}

            autoCapitalize='words'
            autoCorrect={false}
          />

          <Text style={loginStyles.label}>Email:</Text>

          <TextInput
            placeholder='Ingrese su email'
            placeholderTextColor="rgba(255,255,255,0.4)"
            keyboardType='email-address'
            underlineColorAndroid='white'
            style={[
              loginStyles.inputField,
              (Platform.OS === 'ios') && loginStyles.inputFieldIOS
            ]}
            selectionColor='white'

            onChangeText={(value) => onChange(value, 'email')}
            value={email}
            onSubmitEditing={onRegister}

            autoCapitalize='none'
            autoCorrect={false}
          />

          <Text style={loginStyles.label}>Contraseña:</Text>

          <TextInput
            placeholder='*******'
            placeholderTextColor="rgba(255,255,255,0.4)"
            underlineColorAndroid='white'
            secureTextEntry
            style={[
              loginStyles.inputField,
              (Platform.OS === 'ios') && loginStyles.inputFieldIOS
            ]}
            selectionColor='white'

            onChangeText={(value) => onChange(value, 'password')}
            value={password}
            onSubmitEditing={onRegister}

            autoCapitalize='none'
            autoCorrect={false}
          />

          {/* Boton Login */}
          <View style={loginStyles.buttonContainer}
          >
            <TouchableOpacity
              activeOpacity={0.8}
              style={loginStyles.button}
              onPress={onRegister}
            >
              <Text style={loginStyles.buttonText}>Crear cuenta</Text>
            </TouchableOpacity>
          </View>

          {/* Ir a Login */}
          <View style={loginStyles.buttonReturn}>
            <TouchableOpacity
              onPress={() => navigation.replace('LoginScreen')}
              activeOpacity={0.8}
            >
              <Text style={loginStyles.buttonText}>Login</Text>

            </TouchableOpacity>
          </View>
        </View>

      </KeyboardAvoidingView>

    </>
  );
}
