import React, { useState, useCallback } from 'react';
import { Picker } from '@react-native-picker/picker';
import { ScrollView, StyleSheet, View, Linking } from 'react-native';
import { Text } from 'react-native-paper';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';

import { SUPPORTED_LANGUAGES } from 'utils/constants';

import { logoutUser, changeLanguage } from '../store/user';
import CustomButton from 'components/CustomButton';
import Colors from 'utils/colors';
import { SupportedLanguages } from 'utils/types';

const SettingsScreen = () => {
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

  const openAppSettings = useCallback(async () => {
    await Linking.openSettings();
  }, []);

  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={styles.divider}>
          <Text style={styles.settingTitle}>
            {t<string>('screens.settings.languages.title')}
          </Text>
          <Picker
            selectedValue={selectedLanguage}
            onValueChange={(language: SupportedLanguages, _) => {
              setSelectedLanguage(language);
              dispatch(changeLanguage(language));
            }}>
            {SUPPORTED_LANGUAGES.map(language => (
              <Picker.Item
                key={language}
                label={t<string>(
                  `screens.settings.languages.options.${language}`,
                )}
                value={language}
              />
            ))}
          </Picker>
        </View>

        <View style={styles.divider}>
          <Text style={styles.settingTitle}>
            {t<string>('screens.settings.appOptions.title')}
          </Text>
          <View style={styles.buttonContainer}>
            <CustomButton
              mode="outlined"
              color={Colors.Primary}
              title={t<string>('screens.settings.appOptions.button')}
              onPress={openAppSettings}
            />
          </View>
        </View>

        <View style={styles.divider}>
          <View style={styles.buttonContainer}>
            <CustomButton
              mode="outlined"
              color={Colors.Primary}
              title={t<string>('screens.settings.logout.button')}
              onPress={() => dispatch(logoutUser())}
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
  divider: {
    marginVertical: 15,
  },
  settingTitle: {
    fontSize: 20,
    fontWeight: '900',
    alignSelf: 'center',
  },
  buttonContainer: {
    marginVertical: 20,
    marginHorizontal: 50,
    alignSelf: 'center',
  },
});

export default SettingsScreen;
