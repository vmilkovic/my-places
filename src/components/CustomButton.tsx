import React from 'react';
import { Button } from 'react-native-paper';

import Colors from 'utils/colors';
import type { CustomButtonProps } from 'utils/types';

const CustomButton = (props: CustomButtonProps) => {
  return (
    <Button mode="contained" color={Colors.Accent} {...props}>
      {props.title}
    </Button>
  );
};

export default CustomButton;
