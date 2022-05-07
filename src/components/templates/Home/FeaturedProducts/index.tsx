import FeaturedProductsSlider from 'components/FeaturedProductsSlider';
import ProductCard from 'components/ProductCard';
import React from 'react';
import { Button } from 'shared/styles';
import SectionTitle from '../Shared/SectionTitle/styles';
import { FeaturedSection, SliderContainer } from './styles';

export default function FeaturedProducts() {
  return (
    <FeaturedSection>
      <SectionTitle>Featured Products</SectionTitle>
      <SliderContainer>
        <FeaturedProductsSlider>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </FeaturedProductsSlider>
      </SliderContainer>
      <Button secondary center>
        VIEW ALL PRODUCTS
      </Button>
    </FeaturedSection>
  );
}
