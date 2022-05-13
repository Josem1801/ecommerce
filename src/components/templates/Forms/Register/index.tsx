import TextField from 'components/TextField';
import { FlexContainer } from 'layout/Header/TopHeader/styles';
import React, { ChangeEvent, useState } from 'react';
import {
  Button,
  GrayContainer,
  HeaderTypography,
  MaxWidthContainer,
  TextTypography,
} from 'shared/styles';
import FormContainer from '../shared/styles';
import SocialMediaAuth from '../SocialMediaAuth';

export default function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <GrayContainer paddingY>
      <MaxWidthContainer as="div">
        <FormContainer>
          <HeaderTypography fontVariant="heading3">Login</HeaderTypography>
          <TextField placeholder="Fist Name" />
          <TextField placeholder="Last Name" />
          <TextField placeholder="Email" />
          <TextField
            placeholder="Password"
            type={showPassword ? 'text' : 'password'}
          />
          <TextField
            placeholder="Repeat Password"
            type={showPassword ? 'text' : 'password'}
          />
          <FlexContainer gap={6}>
            <input
              defaultChecked={false}
              type="checkbox"
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setShowPassword(e.target.checked)
              }
            />
            <TextTypography
              fontVariant="bodySmallRegular"
              color="manatee"
              as="span"
            >
              Show Password
            </TextTypography>
          </FlexContainer>

          <Button fullWidth>Register</Button>

          <SocialMediaAuth />
        </FormContainer>
      </MaxWidthContainer>
    </GrayContainer>
  );
}
