import type { NavigationProp } from '@react-navigation/native';
import { StyleSheetProperties } from 'react-native';

export type ListPlacesProps = {
  navigation: NavigationProp<{}>;
};

export type AddPlacesProps = {
  navigation: NavigationProp<{}>;
};

export type ProfileProps = {
  navigation: NavigationProp<{}>;
};

export type HeaderRightProps = {
  name: string;
  color: string;
  size: number;
  onPress: () => void;
};

export type InputControllerProps = {
  control: any;
  rules: object;
  name: string;
  label: string;
  placeholder: string;
  secureTextEntry?: boolean;
  disabled?: boolean;
  multiline?: boolean;
  numberOfLines?: number;
};

export type CustomButtonProps = {
  icon?: string;
  color?: string;
  mode?: 'text' | 'outlined' | 'contained';
  style?: Object;
  title: string;
  onPress: () => any;
};

export type TouchableImageProps = {
  onPress: () => void;
  source: _SourceUri;
  imageContainerStyle?: StyleSheetProperties;
  imageStyle?: StyleSheetProperties;
};

export type PickerImage = {
  width: number;
  height: number;
  fileName: string;
  fileSize: number;
  type: string;
  uri: _SourceUri;
};

export type Location = {
  latitude: number;
  longitude: number;
  address?: string;
};

export type SupportedLanguages = 'en' | 'hr';
