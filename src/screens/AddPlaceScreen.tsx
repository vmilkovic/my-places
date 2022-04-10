import React, { useCallback, useEffect, useState } from 'react';
import {
  View,
  Image,
  StyleSheet,
  PermissionsAndroid,
  ScrollView,
} from 'react-native';
import { Text } from 'react-native-paper';
import { useTranslation } from 'react-i18next';
import { useFocusEffect } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

import { setHeaderTitle, setRightHeader } from 'utils/helpers';
import InputController from 'components/InputController';
import CustomButton from 'components/CustomButton';
import LocationPicker from 'components/LocationPicker';
import Colors from 'utils/colors';
import { IMAGE_SELECTION_LIMIT } from 'utils/constants';

import type { AddPlacesProps } from 'utils/types';
import TouchableImage from 'components/TouchableImage';

const options = {
  selectionLimit: IMAGE_SELECTION_LIMIT,
  includeBase64: false,
};

const AddPlaceScreen = ({ navigation }: AddPlacesProps) => {
  const [galleryResponse, setGalleryResponse] = useState(null);
  const [cameraResponse, setCameraResponse] = useState(null);
  const [imageUri, setImageUri] = useState(null);

  const { t } = useTranslation();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: '',
      description: '',
      imageUri: '',
      address: '',
      lat: null,
      lng: null,
    },
  });

  const onSubmit = (data: object) => console.log(data);

  useFocusEffect(
    useCallback(() => {
      setHeaderTitle(navigation, t('screens.addPlace.title'));
      setRightHeader(navigation, () => <View />);
    }, [navigation, t]),
  );

  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      style={styles.container}>
      <View style={styles.formContainer}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            {t<string>('screens.addPlace.sections.map.title')}
          </Text>
          <LocationPicker navigation={navigation} onLocationPicked={() => {}} />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            {t<string>('screens.addPlace.sections.image.title')}
          </Text>
          <TouchableImage
            source={require('../assets/images/placeholder-image.png')}
            onPress={() => {
              console.log('pressed image');
            }}
          />
        </View>

        <View style={styles.section}>
          <View style={styles.inputContainer}>
            <InputController
              control={control}
              rules={{
                required: true,
              }}
              name="title"
              label={t('screens.addPlace.fields.title.label')}
              placeholder={t('screens.addPlace.fields.title.placeholder')}
            />
            {errors.title && (
              <Text style={styles.error}>{t<string>('errors.required')}</Text>
            )}
          </View>

          <View style={styles.inputContainer}>
            <InputController
              multiline
              numberOfLines={4}
              control={control}
              rules={{
                required: true,
              }}
              name="description"
              label={t('screens.addPlace.fields.description.label')}
              placeholder={t('screens.addPlace.fields.description.placeholder')}
            />
            {errors.description && (
              <Text style={styles.error}>{t<string>('errors.required')}</Text>
            )}
          </View>

          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <CustomButton
                color={Colors.Primary}
                title={t('screens.addPlace.buttons.submit')}
                onPress={handleSubmit(onSubmit)}
              />
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 50,
    marginTop: 0,
  },
  section: {
    marginVertical: 15,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '900',
    alignSelf: 'center',
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
    alignSelf: 'center',
  },
  error: {
    color: Colors.Error,
    alignSelf: 'center',
  },
});

export default AddPlaceScreen;
