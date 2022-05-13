import React, { HTMLProps } from 'react';
import { Placeholder, TextFieldContainer } from './styles';

export default function TextField({
  placeholder,
  ...props
}: HTMLProps<HTMLInputElement>) {
  return (
    <TextFieldContainer>
      <input type="text" {...props} placeholder={placeholder} />
      <Placeholder>{placeholder}</Placeholder>
    </TextFieldContainer>
  );
}
