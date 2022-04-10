import React, { useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import { ScrollView, StyleSheet, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { Text } from 'react-native-paper';

import { SUPPORTED_LANGUAGES } from 'utils/constants';

const SettingsScreen = () => {
  const { t, i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      style={styles.container}>
      <View style={styles.divider}>
        <Text style={styles.settingTitle}>
          {t('screens.settings.languages.title')}
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
              label={t(`screens.settings.languages.options.${lang}`)}
              value={lang}
            />
          ))}
        </Picker>
      </View>

      <View style={styles.divider}>
        <Text style={styles.settingTitle}>
          {t('screens.settings.camera.title')}
        </Text>
      </View>

      <View style={styles.divider}>
        <Text style={styles.settingTitle}>
          {t('screens.settings.location.title')}
        </Text>
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
  },
});

export default SettingsScreen;
