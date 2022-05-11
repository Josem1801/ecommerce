import CategoryItem from 'components/CategoryItem';
import ItemsGrid from 'components/ItemsGrid';
import React from 'react';
import { ProductCategory } from 'services/getProdcutsCategorys';
import SectionTitle from '../Shared/SectionTitle/styles';
import CateogryProductsContainer from './styles';

export default function CategoryProducts({
  categories,
}: {
  categories: ProductCategory[];
}) {
  return (
    <CateogryProductsContainer>
      <SectionTitle> Shop with top categorys </SectionTitle>
      <ItemsGrid>
        {categories.map((props: ProductCategory) => (
          <CategoryItem {...props} key={props.id} />
        ))}
      </ItemsGrid>
    </CateogryProductsContainer>
  );
}
