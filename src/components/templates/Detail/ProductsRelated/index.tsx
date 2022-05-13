import FeaturedProductsSlider from 'components/FeaturedProductsSlider';
import ProductCard from 'components/ProductCard';
import React from 'react';
import { Product } from 'services/getProductsList';
import SectionTitle from 'components/templates/Home/Shared/SectionTitle/styles';
import {
  FeaturedSection,
  SliderContainer,
} from 'components/templates/Home/FeaturedProducts/styles';

export default function ProdutsRelated({
  productList,
}: {
  productList: Product[];
}) {
  return (
    <FeaturedSection>
      <SectionTitle>Featured Products</SectionTitle>
      <SliderContainer>
        <FeaturedProductsSlider>
          {productList.map(({ category, id, images, price, title }) => (
            <ProductCard
              key={id}
              categoryName={category.name}
              id={id}
              image={
                images[0] ||
                'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'
              }
              price={price}
              title={title}
            />
          ))}
        </FeaturedProductsSlider>
      </SliderContainer>
    </FeaturedSection>
  );
}
