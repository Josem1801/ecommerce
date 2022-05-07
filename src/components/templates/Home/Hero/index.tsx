import React from 'react';
import { Button } from 'shared/styles';
import {
  Description,
  HeroContainer,
  HeroDescription,
  HeroImage,
  Title,
} from './styles';

export default function Hero() {
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
      <HeroImage />
    </HeroContainer>
  );
}
