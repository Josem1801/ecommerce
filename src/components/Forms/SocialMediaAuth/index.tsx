import React from 'react';
import { SocialMediaButton, TextTypography } from 'shared/styles';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebookF, FaTwitter } from 'react-icons/fa';
import { socialMediaLogin } from 'services/auth';
import SocialMediaContainer from './styles';

export default function SocialMediaAuth() {
  return (
    <>
      <TextTypography fontVariant="bodySmallRegular" color="manatee">
        or sign in with
      </TextTypography>
      <SocialMediaContainer>
        <SocialMediaButton onClick={() => socialMediaLogin('google')}>
          <FcGoogle /> Google
        </SocialMediaButton>
        <SocialMediaButton onClick={() => socialMediaLogin('facebook')}>
          <FaFacebookF color="#1976D2" /> Facebook
        </SocialMediaButton>
        <SocialMediaButton onClick={() => socialMediaLogin('twitter')}>
          <FaTwitter color="#03A9F4" />
          Twitter
        </SocialMediaButton>
      </SocialMediaContainer>
    </>
  );
}
