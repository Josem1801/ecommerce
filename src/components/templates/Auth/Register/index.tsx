import RegisterForm from 'components/Forms/RegisterForm';
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

export default function RegisterSection() {
  const router = useRouter();
  const { data } = useUser();
  if (data) {
    router.push('/');
  }
  return (
    <GrayContainer paddingY>
      <MaxWidthContainer>
        <FormContainer>
          <RegisterForm />
          <TextTypography fontVariant="bodyRegular" color="manatee">
            Do you already have an account?{' '}
            <Link href="/auth/login">Login</Link>
          </TextTypography>
        </FormContainer>
      </MaxWidthContainer>
    </GrayContainer>
  );
}
