import React, { useCallback } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Text } from 'react-native-paper';
import { useTranslation } from 'react-i18next';
import { useFocusEffect } from '@react-navigation/native';
import { useForm } from 'react-hook-form';

import InputController from 'components/InputController';
import CustomButton from 'components/CustomButton';
import HeaderRight from 'components/HeaderRight';
import { setHeaderTitle, setRightHeader } from 'utils/helpers';
import Colors from 'utils/colors';
import Fonts from 'utils/fonts';

import type { ProfileProps } from 'utils/types';

const ProfileScreen = ({ navigation }: ProfileProps) => {
  const { t } = useTranslation();

  useFocusEffect(
    useCallback(() => {
      setHeaderTitle(navigation, t('screens.profile.title'));
      setRightHeader(navigation, () => (
        <HeaderRight
          name="settings"
          color={Colors.Dark}
          size={Fonts.size.HeaderIcon}
          onPress={() => navigation.navigate('Settings')}
        />
      ));
    }, [navigation, t]),
  );

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      username: 'Milky',
      email: '',
      currentPassword: '',
      newPassword: '',
      repeatNewPassword: '',
    },
  });

  const onSubmit = (data: object) => console.log(data);

  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={styles.formContainer}>
          <View style={styles.inputContainer}>
            <InputController
              disabled
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
              label={t('screens.profile.fields.email.label')}
              placeholder={t('screens.profile.fields.email.placeholder')}
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
              name="firstName"
              label={t('screens.profile.fields.firstName.label')}
              placeholder={t('screens.profile.fields.firstName.placeholder')}
            />
            {errors.firstName && (
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
              label={t('screens.profile.fields.lastName.label')}
              placeholder={t('screens.profile.fields.lastName.placeholder')}
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
              name="currentPassword"
              label={t('screens.profile.fields.password.label')}
              placeholder={t('screens.profile.fields.password.placeholder')}
            />
            {errors.currentPassword && (
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
              name="newPassword"
              label={t('screens.profile.fields.newPassword.label')}
              placeholder={t('screens.profile.fields.newPassword.placeholder')}
            />
            {errors.newPassword && (
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
              label={t('screens.profile.fields.repeatNewPassword.label')}
              placeholder={t(
                'screens.profile.fields.repeatNewPassword.placeholder',
              )}
            />
            {errors.repeatNewPassword && (
              <Text style={styles.error}>{t<string>('errors.required')}</Text>
            )}
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <CustomButton
              onPress={handleSubmit(onSubmit)}
              title={t('screens.profile.buttons.submit')}
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
    marginTop: 10,
  },
  formContainer: {
    marginTop: 5,
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

export default ProfileScreen;
