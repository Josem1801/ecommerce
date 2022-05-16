import LoginForm from 'components/Forms/LoginForm';
import SocialMediaAuth from 'components/Forms/SocialMediaAuth';
import useUser from 'hooks/use-user';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import {
  GrayContainer,
  MaxWidthContainer,
  TextTypography,
} from 'shared/styles';
import FormContainer from '../shared/styles';

export default function LoginSection() {
  const router = useRouter();
  const { user } = useUser();
  if (user) {
    router.push('/');
  }
  return (
    <GrayContainer paddingY>
      <MaxWidthContainer>
        <FormContainer>
          <LoginForm />
          <SocialMediaAuth />
          <TextTypography fontVariant="bodyRegular" color="manatee">
            Dont you have an account?{' '}
            <Link href="/auth/register">Register</Link>
          </TextTypography>
        </FormContainer>
      </MaxWidthContainer>
    </GrayContainer>
  );
}
