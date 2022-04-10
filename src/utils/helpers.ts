import type { NavigationProp } from '@react-navigation/native';

export const setHeaderTitle = (
  navigation: NavigationProp<{}>,
  title: string,
) => {
  const stackNavigator = navigation.getParent();
  stackNavigator.setOptions({
    title,
  });
};

export const setRightHeader = (
  navigation: NavigationProp<{}>,
  header: Element,
) => {
  const stackNavigator = navigation.getParent();
  stackNavigator.setOptions({
    headerRight: header,
  });
};
