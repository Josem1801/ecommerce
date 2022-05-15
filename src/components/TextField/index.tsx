/* eslint-disable react/display-name */
import React, { forwardRef, HTMLProps } from 'react';
import { ErrorMessage, Placeholder, TextFieldContainer } from './styles';

type TextFieldProps = HTMLProps<HTMLInputElement> & {
  errorMessage?: string;
  placeholder: string;
};
const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  ({ placeholder, errorMessage, ...props }, ref) => (
    <TextFieldContainer ref={ref} error={Boolean(errorMessage)}>
      <input type="text" {...props} placeholder={placeholder} />
      <Placeholder>{placeholder}</Placeholder>
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </TextFieldContainer>
  ),
);

export default TextField;

TextField.defaultProps = {
  errorMessage: '',
};
