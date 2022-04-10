import React, { useState, useCallback } from 'react';
import { Picker } from '@react-native-picker/picker';
import { ScrollView, StyleSheet, View, Linking } from 'react-native';
import { Text } from 'react-native-paper';
import { useTranslation } from 'react-i18next';

import { SUPPORTED_LANGUAGES } from 'utils/constants';
import CustomButton from 'components/CustomButton';
import Colors from 'utils/colors';

const SettingsScreen = () => {
  const { t, i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

  const openAppSettings = useCallback(async () => {
    await Linking.openSettings();
  }, []);

  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      style={styles.container}>
      <View style={styles.divider}>
        <Text style={styles.settingTitle}>
          {t<string>('screens.settings.languages.title')}
        </Text>
        <Picker
          selectedValue={selectedLanguage}
          onValueChange={(itemValue, _) => {
            setSelectedLanguage(itemValue);
            i18n.changeLanguage(itemValue);
          }}>
          {SUPPORTED_LANGUAGES.map(lang => (
            <Picker.Item
              key={lang}
              label={t<string>(`screens.settings.languages.options.${lang}`)}
              value={lang}
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
