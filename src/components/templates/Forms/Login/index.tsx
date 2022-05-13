import TextField from 'components/TextField';
import { FlexContainer } from 'layout/Header/TopHeader/styles';
import Link from 'next/link';
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
import SpaceBetweenContainer from './styles';

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <GrayContainer paddingY>
      <MaxWidthContainer as="div">
        <FormContainer>
          <HeaderTypography fontVariant="heading3">Login</HeaderTypography>
          <TextField placeholder="Email" />
          <TextField
            placeholder="Password"
            type={showPassword ? 'text' : 'password'}
          />
          <SpaceBetweenContainer>
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
            <Link href="/auth/reset-password" passHref>
              <TextTypography fontVariant="bodySmallRegular" as="a">
                Forget Password
              </TextTypography>
            </Link>
          </SpaceBetweenContainer>
          <Button fullWidth>Login</Button>

          <SocialMediaAuth />
          <Link href="/auth/register" passHref>
            <TextTypography fontVariant="bodySmallRegular" as="a">
              Registrate
            </TextTypography>
          </Link>
        </FormContainer>
      </MaxWidthContainer>
    </GrayContainer>
  );
}
