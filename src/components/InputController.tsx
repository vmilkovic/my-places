import React from 'react';
import { Controller } from 'react-hook-form';
import { TextInput } from 'react-native-paper';
import Colors from 'utils/colors';

import type { InputControllerProps } from 'utils/types';

const InputController = (props: InputControllerProps) => {
  const { control, rules, name } = props;

  return (
    <Controller
      control={control}
      rules={rules}
      render={({ field: { onChange, onBlur, value } }) => (
        <TextInput
          mode="outlined"
          onBlur={onBlur}
          onChangeText={onChange}
          value={value}
          outlineColor={Colors.Accent}
          {...props}
        />
      )}
      name={name}
    />
  );
};

export default InputController;
