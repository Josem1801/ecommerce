import CategoryItem from 'components/CategoryItem';
import ItemsGrid from 'components/ItemsGrid';
import React from 'react';
import SectionTitle from '../Shared/SectionTitle/styles';
import CateogryProductsContainer from './styles';

export default function CategoryProducts() {
  return (
    <CateogryProductsContainer>
      <SectionTitle> Shop with top categorys </SectionTitle>
      <ItemsGrid>
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
      </ItemsGrid>
    </CateogryProductsContainer>
  );
}
