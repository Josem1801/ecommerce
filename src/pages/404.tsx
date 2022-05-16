import Layout from 'layout/Layout';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import {
  Button,
  HeaderTypography,
  MaxWidthContainer,
  TextTypography,
} from 'shared/styles';
import Image404 from 'public/404.svg';
import FormContainer from 'components/templates/Auth/shared/styles';

export default function NotFound() {
  return (
    <Layout title="Not found">
      <MaxWidthContainer>
        <FormContainer>
          <HeaderTypography fontVariant="heading3">
            Sorry, page not found!
          </HeaderTypography>
          <TextTypography fontVariant="bodyRegular" color="manatee">
            Sorry, we couldn’t find the page you’re looking for. Perhaps you’ve
            mistyped the URL? Be sure to check your spelling.
          </TextTypography>
          <Image
            src={Image404}
            alt="Ecommerce | Page not found"
            layout="responsive"
            height={300}
          />
          <Link href="/" passHref>
            <Button as="a" fullWidth>
              Back To Home
            </Button>
          </Link>
        </FormContainer>
      </MaxWidthContainer>
    </Layout>
  );
}
