import RegisterForm from 'components/Forms/RegisterForm';
import useUser from 'hooks/use-user';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { RegisterType, registerUser } from 'services/auth';
import {
  GrayContainer,
  MaxWidthContainer,
  TextTypography,
} from 'shared/styles';
import SendSvg from 'public/send.svg';
import FormContainer from '../shared/styles';

export default function RegisterSection() {
  const [sendEmail, setSendEmail] = useState(false);
  const router = useRouter();
  const { user } = useUser();

  useEffect(() => {
    if (user) {
      router.push('/');
    }
  }, [user, router]);
  const handleRegister = async (userData: RegisterType) => {
    try {
      const userRegisted = await registerUser(userData);
      if (!userRegisted?.error) {
        setSendEmail(true);
      }
    } catch (error) {
      setSendEmail(false);
    }
  };
  return (
    <GrayContainer paddingY>
      <MaxWidthContainer>
        {!sendEmail ? (
          <FormContainer>
            <RegisterForm handleRegister={handleRegister} />
            <TextTypography fontVariant="bodyRegular" color="manatee">
              Do you already have an account?{' '}
              <Link href="/auth/login">Login</Link>
            </TextTypography>
          </FormContainer>
        ) : (
          <FormContainer>
            <TextTypography fontVariant="bodyLarge" color="dodgerBlue">
              Verification email sent
            </TextTypography>
            <Image src={SendSvg} layout="responsive" height={45} />
            <TextTypography fontVariant="bodySmall" color="manatee">
              We&apos;ve sent a verification mail to your email address and
              activate your account. Please check your inbox to verify and be
              automatically redirected.
            </TextTypography>
          </FormContainer>
        )}
      </MaxWidthContainer>
    </GrayContainer>
  );
}
