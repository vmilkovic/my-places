import React, { useCallback } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';
import { useTranslation } from 'react-i18next';
import { useFocusEffect } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';

import HeaderRight from 'components/HeaderRight';
import { setHeaderTitle, setRightHeader } from 'utils/helpers';
import LocationPicker from 'components/LocationPicker';
import TouchableImage from 'components/TouchableImage';
import Colors from 'utils/colors';
import Fonts from 'utils/fonts';

import type { ListPlacesProps, Location } from 'utils/types';
import InputController from 'components/InputController';

const PlaceDetailScreen = ({ navigation, route }: ListPlacesProps) => {
  const { t } = useTranslation();
  const { params } = route;
  const { placeTitle, placeId } = params;
  const selectedPlace = useSelector(state =>
    state.places.list.find(place => place.id === placeId),
  );
  const user = useSelector(state => state.user);
  const isEditable = user.id == selectedPlace.userId;

  const { title, description, imageUri, address, latitude, longitude } =
    selectedPlace;

  const selectedLocation: Location = {
    latitude,
    longitude,
  };

  const { control } = useForm({
    defaultValues: {
      title,
      description,
      imageUri,
      address,
    },
  });

  useFocusEffect(
    useCallback(() => {
      setHeaderTitle(navigation, placeTitle, true);
      setRightHeader(
        navigation,
        () =>
          isEditable && (
            <HeaderRight
              name="edit"
              color={Colors.Dark}
              size={Fonts.size.HeaderIcon}
              onPress={() =>
                navigation.navigate('EditPlace', { placeTitle, placeId })
              }
            />
          ),
        true,
      );
    }, [navigation, t]),
  );

  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={styles.formContainer}>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>
              {t<string>('screens.placeDetail.sections.location.title')}
            </Text>
            <LocationPicker
              navigation={navigation}
              onLocationPicked={() => {}}
              mapPickedLocation={selectedLocation}
              readonly
            />
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>
              {t<string>('screens.placeDetail.sections.image.title')}
            </Text>

            <TouchableImage
              source={
                imageUri
                  ? { uri: imageUri }
                  : require('../assets/images/placeholder-image.png')
              }
            />
          </View>

          <View style={styles.section}>
            <View style={styles.inputContainer}>
              <InputController
                control={control}
                disabled
                name="title"
                label={t('screens.placeDetail.fields.title.label')}
                placeholder={t('screens.placeDetail.fields.title.placeholder')}
              />
            </View>

            <View style={styles.inputContainer}>
              <InputController
                control={control}
                disabled
                name="address"
                label={t('screens.placeDetail.fields.address.label')}
                placeholder={t(
                  'screens.placeDetail.fields.address.placeholder',
                )}
              />
            </View>

            <View style={styles.inputContainer}>
              <InputController
                multiline
                numberOfLines={4}
                control={control}
                disabled
                name="description"
                label={t('screens.placeDetail.fields.description.label')}
                placeholder={t(
                  'screens.placeDetail.fields.description.placeholder',
                )}
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

export default PlaceDetailScreen;
