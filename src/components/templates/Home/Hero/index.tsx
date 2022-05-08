import Image from 'next/image';
import React from 'react';
import { Button } from 'shared/styles';
import {
  Description,
  HeroContainer,
  HeroDescription,
  HeroImage,
  Title,
} from './styles';

interface HeroProps {
  image: string;
  alt: string;
}

export default function Hero({ image, alt }: HeroProps) {
  return (
    <HeroContainer>
      <HeroDescription>
        <Title fontVariant="display1">Premium care for premium people.</Title>
        <Description fontVariant="bodyRegular">
          Not ready for a subscription? Shop all a la carté skin, hair, and body
          care.
        </Description>
        <Button>SHOP NOW</Button>
      </HeroDescription>
      <HeroImage>
        {image && <Image src={image} alt={alt} layout="fill" />}
      </HeroImage>
    </HeroContainer>
  );
}
