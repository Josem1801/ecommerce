import FeaturedProductsSlider from 'components/FeaturedProductsSlider';
import ProductCard from 'components/ProductCard';
import SectionTitle from 'components/templates/Home/Shared/SectionTitle';
import React from 'react';
import { Product } from 'services/getProductsList';
import { GrayContainer, MaxWidthContainer } from 'shared/styles';

export default function ProdutsRelated({
  productList,
}: {
  productList: Product[];
}) {
  return (
    <GrayContainer paddingY>
      <MaxWidthContainer as="div">
        <SectionTitle>Featured Products</SectionTitle>
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
      </MaxWidthContainer>
    </GrayContainer>
  );
}
