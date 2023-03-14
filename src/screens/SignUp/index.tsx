import React from 'react';
import {View, Text} from 'react-native';
import {Formik} from 'formik';
import {useTranslation} from 'react-i18next';

// Components
import {Input, Button} from '../../components';

// Styles
import {styles} from './styles';

// Hooks
import useSignUp from './hooks/useSignUp';

export default function SignUp() {
  const {initialValues, SignUpSchema, submit, goToSignIn} = useSignUp();
  const {t} = useTranslation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>FIAP</Text>
      <Text style={styles.subTitle}>Cadastre-se e embarque nessa!</Text>
      <Formik
        initialValues={initialValues}
        validationSchema={SignUpSchema}
        onSubmit={(values, {setSubmitting}) => submit(values, setSubmitting)}>
        {({handleChange, handleSubmit, values, errors, isSubmitting}) => (
          <>
            <Input
              placeholder={t('signUp.inputName.text') || ''}
              value={values.name}
              onChangeText={handleChange('name')}
              error={errors.name}
              autoCapitalize="words"
            />
            <Input
              placeholder={t('signUp.inputEmail.text') || ''}
              value={values.email}
              onChangeText={handleChange('email')}
              error={errors.email}
              autoCapitalize="none"
              keyboardType="email-address"
            />
            <Input
              placeholder={t('signUp.inputPassword.text') || ''}
              value={values.pass}
              secureTextEntry
              onChangeText={handleChange('pass')}
              error={errors.pass}
              autoCapitalize="none"
            />
            <Input
              placeholder={t('signUp.inputRepeatPassword.text') || ''}
              value={values.confirmPass}
              secureTextEntry
              onChangeText={handleChange('confirmPass')}
              error={errors.confirmPass}
              autoCapitalize="none"
            />
            <Button
              type="secondary"
              disabled={isSubmitting}
              text={isSubmitting ? 'Carregando...' : 'Cadastrar'}
              onPress={handleSubmit}
            />
            <Button
              type="primary"
              text={t('signUp.goToSignUpButton')}
              onPress={goToSignIn}
            />
          </>
        )}
      </Formik>
    </View>
  );
}
