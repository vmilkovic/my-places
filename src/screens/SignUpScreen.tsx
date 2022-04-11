import React from 'react';
import { View, Image, StyleSheet, ScrollView } from 'react-native';
import { Text } from 'react-native-paper';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import InputController from 'components/InputController';
import Colors from 'utils/colors';
import CustomButton from 'components/CustomButton';

const SignUpScreen = ({ navigation }) => {
  const { t } = useTranslation();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      username: '',
      email: '',
      password: '',
      repeatPassword: '',
    },
  });

  const onSubmit = (data: object) => console.log(data);

  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={require('../assets/images/vm-logo.png')}
        />
        <View style={styles.formContainer}>
          <View style={styles.inputContainer}>
            <InputController
              control={control}
              rules={{
                required: true,
              }}
              name="username"
              label={t('screens.signUp.fields.username.label')}
              placeholder={t('screens.signUp.fields.username.placeholder')}
            />
            {errors.username && (
              <Text style={styles.error}>{t<string>('errors.required')}</Text>
            )}
          </View>

          <View style={styles.inputContainer}>
            <InputController
              control={control}
              rules={{
                required: true,
                maxLength: 25,
              }}
              name="email"
              label={t('screens.signUp.fields.email.label')}
              placeholder={t('screens.signUp.fields.email.placeholder')}
            />
            {errors.email && (
              <Text style={styles.error}>{t<string>('errors.required')}</Text>
            )}
          </View>

          <View style={styles.inputContainer}>
            <InputController
              control={control}
              rules={{
                required: true,
                maxLength: 25,
              }}
              name="email"
              label={t('screens.signUp.fields.firstName.label')}
              placeholder={t('screens.signUp.fields.firstName.placeholder')}
            />
            {errors.email && (
              <Text style={styles.error}>{t<string>('errors.required')}</Text>
            )}
          </View>

          <View style={styles.inputContainer}>
            <InputController
              control={control}
              rules={{
                required: true,
                maxLength: 25,
              }}
              name="lastName"
              label={t('screens.signUp.fields.lastName.label')}
              placeholder={t('screens.signUp.fields.lastName.placeholder')}
            />
            {errors.lastName && (
              <Text style={styles.error}>{t<string>('errors.required')}</Text>
            )}
          </View>

          <View style={styles.inputContainer}>
            <InputController
              secureTextEntry
              control={control}
              rules={{
                required: true,
                maxLength: 25,
              }}
              name="password"
              label={t('screens.signUp.fields.password.label')}
              placeholder={t('screens.signUp.fields.password.placeholder')}
            />
            {errors.password && (
              <Text style={styles.error}>{t<string>('errors.required')}</Text>
            )}
          </View>

          <View style={styles.inputContainer}>
            <InputController
              secureTextEntry
              control={control}
              rules={{
                required: true,
                maxLength: 25,
              }}
              name="repeatPassword"
              label={t('screens.signUp.fields.repeatPassword.label')}
              placeholder={t(
                'screens.signUp.fields.repeatPassword.placeholder',
              )}
            />
            {errors.repeatPassword && (
              <Text style={styles.error}>{t<string>('errors.required')}</Text>
            )}
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <CustomButton
              color={Colors.Primary}
              title={t('screens.signUp.buttons.register')}
              onPress={handleSubmit(onSubmit)}
            />
          </View>
          <View style={styles.button}>
            <CustomButton
              title={t('screens.signUp.buttons.signIn')}
              onPress={() => navigation.navigate('SignIn')}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 50,
    marginTop: 30,
  },
  logo: {
    alignSelf: 'center',
    marginTop: 45,
  },
  formContainer: {
    marginTop: 25,
  },
  inputContainer: {
    marginVertical: 5,
  },
  buttonContainer: {
    marginVertical: 20,
    marginHorizontal: 50,
  },
  button: {
    marginVertical: 2,
    alignSelf: 'center',
  },
  error: {
    color: Colors.Error,
    alignSelf: 'center',
  },
});

export default SignUpScreen;
