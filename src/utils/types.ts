import type { NavigationProp } from '@react-navigation/native';

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
};

export type CustomButtonProps = {
  icon?: string;
  color?: string;
  mode?: 'text' | 'outlined' | 'contained';
  title: string;
  onPress: () => any;
};
