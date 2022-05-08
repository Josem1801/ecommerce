import FeaturedProductsSlider from 'components/FeaturedProductsSlider';
import ProductCard from 'components/ProductCard';
import React from 'react';
import { Product } from 'services/getProductsList';
import { Button } from 'shared/styles';
import SectionTitle from '../Shared/SectionTitle/styles';
import { FeaturedSection, SliderContainer } from './styles';

export default function FeaturedProducts({
  productList,
}: {
  productList: Product[];
}) {
  return (
    <FeaturedSection>
      <SectionTitle>Featured Products</SectionTitle>
      <SliderContainer>
        <FeaturedProductsSlider>
          {productList.map(({ categoryId, id, images, price, title }) => (
            <ProductCard
              categoryId={categoryId}
              id={id}
              image={
                images[0]
                || 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'
              }
              price={price}
              title={title}
            />
          ))}
        </FeaturedProductsSlider>
      </SliderContainer>
      <Button secondary center>
        VIEW ALL PRODUCTS
      </Button>
    </FeaturedSection>
  );
}
