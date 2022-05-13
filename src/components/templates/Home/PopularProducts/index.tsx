import ItemsGrid from 'components/ItemsGrid';
import ProductCard from 'components/ProductCard';
import React from 'react';
import { Product } from 'services/getProductsList';
import SectionTitle from '../Shared/SectionTitle';
import { MaxWidthContainer, PopularProductsContainer } from './styles';

export default function PopularProducts({
  productList,
}: {
  productList: Product[];
}) {
  return (
    <PopularProductsContainer>
      <MaxWidthContainer>
        <SectionTitle>Popular Products</SectionTitle>
        <ItemsGrid>
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
        </ItemsGrid>
      </MaxWidthContainer>
    </PopularProductsContainer>
  );
}
