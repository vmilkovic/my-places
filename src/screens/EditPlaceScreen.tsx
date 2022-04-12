import React, { useCallback, useEffect, useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';
import { useTranslation } from 'react-i18next';
import { useFocusEffect } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';

import {
  requestCameraPermission,
  setHeaderTitle,
  setRightHeader,
} from 'utils/helpers';
import HeaderRight from 'components/HeaderRight';
import Colors from 'utils/colors';
import Fonts from 'utils/fonts';
import { Location } from 'utils/types';

import { IMAGE_SELECTION_LIMIT } from 'utils/constants';

import { ImagePickerResponse } from 'utils/interfaces';
import Place from 'modules/place';
import CustomButton from 'components/CustomButton';
import InputController from 'components/InputController';
import TouchableImage from 'components/TouchableImage';
import LocationPicker from 'components/LocationPicker';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { updatePlace } from 'store/actions/places';

const options = {
  selectionLimit: IMAGE_SELECTION_LIMIT,
  includeBase64: false,
};

const EditPlaceScreen = ({ navigation, route }) => {
  const { params } = route;
  const { placeTitle, placeId } = params;
  const selectedPlace = useSelector(state =>
    state.places.list.find(place => place.id === placeId),
  );

  const {
    title,
    description,
    imageUri,
    address,
    latitude,
    longitude,
    isFavorite,
    userId,
  } = selectedPlace;

  const [imageLibraryResponse, setImageLibraryResponse] =
    useState<ImagePickerResponse>(null);
  const [cameraResponse, setCameraResponse] =
    useState<ImagePickerResponse>(null);
  const [selectedImage, setSelectedImage] = useState({ uri: imageUri });
  const [selectedLocation, setSelectedLocation] = useState<Location>({
    latitude,
    longitude,
    address,
  });
  const [placeIsFavorite, setPlaceIsFavorite] = useState(isFavorite);

  const dispatch = useDispatch();
  const { t } = useTranslation();

  const {
    control,
    setValue,
    resetField,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title,
      description,
      imageUri,
      address,
      latitude,
      longitude,
    },
  });

  const onSubmit = (place: Place) => {
    dispatch(updatePlace({ ...place, userId, id: placeId }));
    resetField('title');
    resetField('description');
    resetField('imageUri');
    resetField('address');
    resetField('latitude');
    resetField('longitude');
    setSelectedImage(null);
    navigation.navigate('PlacesListTab');
  };

  useFocusEffect(
    useCallback(() => {
      setHeaderTitle(navigation, placeTitle, true);
      setRightHeader(
        navigation,
        () => (
          <HeaderRight
            name={placeIsFavorite ? 'star' : 'star-outline'}
            color={Colors.Gold}
            size={Fonts.size.HeaderIcon}
            onPress={() => setPlaceIsFavorite(!placeIsFavorite)}
          />
        ),
        true,
      );
    }, [navigation, t]),
  );

  useEffect(() => {
    setValue('imageUri', selectedImage?.uri, {
      shouldValidate: true,
    });
  }, [selectedImage, setValue]);

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
              {t<string>('screens.editPlace.sections.location.title')}
            </Text>
            <LocationPicker
              navigation={navigation}
              onLocationPicked={locationPickedHandler}
              mapPickedLocation={selectedLocation}
              readonly
            />
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>
              {t<string>('screens.editPlace.sections.image.title')}
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
                  title={t('screens.editPlace.buttons.camera')}
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
                label={t('screens.editPlace.fields.title.label')}
                placeholder={t('screens.editPlace.fields.title.placeholder')}
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
                disabled
                name="address"
                label={t('screens.editPlace.fields.address.label')}
                placeholder={t('screens.editPlace.fields.address.placeholder')}
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
                label={t('screens.editPlace.fields.description.label')}
                placeholder={t(
                  'screens.editPlace.fields.description.placeholder',
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
                  title={t('screens.editPlace.buttons.submit')}
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

export default EditPlaceScreen;
