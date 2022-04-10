import React from 'react';
import { View, Image, StyleSheet, ScrollView } from 'react-native';
import { Text } from 'react-native-paper';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import InputController from 'components/InputController';
import Colors from 'utils/colors';
import CustomButton from 'components/CustomButton';

const SignInScreen = ({ navigation }) => {
  const { t } = useTranslation();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: '',
      password: '',
    },
  });

  const onSubmit = (data: object) => console.log(data);

  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      style={styles.container}>
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
            label={t('screens.signIn.fields.username.label')}
            placeholder={t('screens.signIn.fields.username.placeholder')}
          />
          {errors.username && (
            <Text style={styles.error}>{t('errors.required')}</Text>
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
            label={t('screens.signIn.fields.password.label')}
            placeholder={t('screens.signIn.fields.password.placeholder')}
          />
          {errors.password && (
            <Text style={styles.error}>{t('errors.required')}</Text>
          )}
        </View>

        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <CustomButton
              color={Colors.Primary}
              title={t('screens.signIn.buttons.signIn')}
              onPress={handleSubmit(onSubmit)}
            />
          </View>
          <View style={styles.button}>
            <CustomButton
              title={t('screens.signIn.buttons.register')}
              onPress={() => navigation.navigate('SignUp')}
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
  },
  logo: {
    alignSelf: 'center',
    marginTop: 80,
  },
  formContainer: {
    marginTop: 50,
  },
  inputContainer: {
    marginVertical: 10,
  },
  buttonContainer: {
    marginVertical: 20,
    marginHorizontal: 50,
  },
  button: {
    marginVertical: 2,
  },
  error: {
    color: Colors.Error,
  },
});

export default SignInScreen;
