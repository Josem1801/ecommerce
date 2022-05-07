import ItemsGrid from 'components/ItemsGrid';
import ProductCard from 'components/ProductCard';
import React from 'react';
import SectionTitle from '../Shared/SectionTitle/styles';
import { MaxWidthContainer, PopularProductsContainer } from './styles';

export default function PopularProducts() {
  return (
    <PopularProductsContainer>
      <MaxWidthContainer>
        <SectionTitle>Popular Products</SectionTitle>
        <ItemsGrid>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </ItemsGrid>
      </MaxWidthContainer>
    </PopularProductsContainer>
  );
}
