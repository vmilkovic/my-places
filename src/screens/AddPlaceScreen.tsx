import React, { useCallback, useEffect, useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Text } from 'react-native-paper';
import { useTranslation } from 'react-i18next';
import { useFocusEffect } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

import {
  setHeaderTitle,
  setRightHeader,
  requestCameraPermission,
  getLocationAddress,
} from 'utils/helpers';
import InputController from 'components/InputController';
import CustomButton from 'components/CustomButton';
import LocationPicker from 'components/LocationPicker';
import TouchableImage from 'components/TouchableImage';
import Colors from 'utils/colors';

import { IMAGE_SELECTION_LIMIT, VUB_LOCATION } from 'utils/constants';

import type { AddPlacesProps } from 'utils/types';
import { ImagePickerResponse } from 'utils/interfaces';

const options = {
  selectionLimit: IMAGE_SELECTION_LIMIT,
  includeBase64: false,
};

const AddPlaceScreen = ({ navigation, route }: AddPlacesProps) => {
  const [imageLibraryResponse, setImageLibraryResponse] =
    useState<ImagePickerResponse>(null);
  const [cameraResponse, setCameraResponse] =
    useState<ImagePickerResponse>(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState({
    latitude: VUB_LOCATION.latitude,
    longitude: VUB_LOCATION.longitude,
    address: null,
  });

  const { t } = useTranslation();

  const {
    control,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: '',
      description: '',
      imageUri: '',
      address: '',
      latitude: null,
      longitude: null,
    },
  });

  const onSubmit = (data: object) => console.log(data);

  useFocusEffect(
    useCallback(() => {
      setHeaderTitle(navigation, t('screens.addPlace.title'));
      setRightHeader(navigation, () => <View />);
    }, [navigation, t]),
  );

  useFocusEffect(
    useCallback(() => {
      if (route.params) {
        const { selectedLocation: selectedMapAddress } = route.params;
        const { latitude, longitude } = selectedMapAddress;

        getLocationAddress({ latitude, longitude }).then(address => {
          setSelectedLocation({ latitude, longitude, address });
        });
      }
    }, [route.params]),
  );

  useEffect(() => {
    setValue('imageUri', selectedImage, { shouldValidate: true });
  }, [selectedImage, setValue]);

  useEffect(() => {
    if (selectedLocation == null) {
      return;
    }

    const { latitude, longitude, address } = selectedLocation;

    setValue('latitude', latitude, { shouldValidate: true });
    setValue('longitude', longitude, { shouldValidate: true });
    setValue('address', address, { shouldValidate: true });
  }, [selectedLocation, setValue]);

  useEffect(() => {
    if (imageLibraryResponse) {
      if (imageLibraryResponse.didCancel) {
        return;
      }

      setSelectedImage({
        uri: imageLibraryResponse.assets[IMAGE_SELECTION_LIMIT - 1].uri,
      });

      setImageLibraryResponse(null);
    }
  }, [imageLibraryResponse]);

  useEffect(() => {
    if (cameraResponse) {
      if (cameraResponse.didCancel) {
        return;
      }

      setSelectedImage({
        uri: cameraResponse.assets[IMAGE_SELECTION_LIMIT - 1].uri,
      });

      setCameraResponse(null);
    }
  }, [cameraResponse]);

  const onImageLibraryPress = useCallback(() => {
    const imageLibraryOptions = {
      ...options,
      mediaType: 'photo',
    };

    launchImageLibrary(imageLibraryOptions, setImageLibraryResponse);
  }, []);

  const onCameraPress = async () => {
    const hastPermission = await requestCameraPermission();

    if (!hastPermission) {
      return;
    }

    const cameraOptions = {
      ...options,
      saveToPhotos: true,
    };

    launchCamera(cameraOptions, setCameraResponse);
  };

  const locationPickedHandler = useCallback(location => {
    setSelectedLocation(location);
  }, []);

  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={styles.formContainer}>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>
              {t<string>('screens.addPlace.sections.location.title')}
            </Text>
            <LocationPicker
              navigation={navigation}
              onLocationPicked={locationPickedHandler}
              mapPickedLocation={selectedLocation}
            />
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>
              {t<string>('screens.addPlace.sections.image.title')}
            </Text>

            <TouchableImage
              source={
                selectedImage ||
                require('../assets/images/placeholder-image.png')
              }
              onPress={onImageLibraryPress}
            />

            <View style={styles.buttonContainer}>
              <View style={styles.button}>
                <CustomButton
                  title={t('screens.addPlace.buttons.camera')}
                  onPress={onCameraPress}
                />
              </View>
            </View>
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
                control={control}
                rules={{
                  required: true,
                }}
                name="address"
                label={t('screens.addPlace.fields.address.label')}
                placeholder={t('screens.addPlace.fields.address.placeholder')}
              />
              {errors.address && (
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
                placeholder={t(
                  'screens.addPlace.fields.description.placeholder',
                )}
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
    marginBottom: 10,
    fontWeight: '900',
    alignSelf: 'center',
  },
  formContainer: {
    marginTop: 15,
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
