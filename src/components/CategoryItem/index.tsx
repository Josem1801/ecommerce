import Image from 'next/image';
import React from 'react';
import { TextTypography } from 'shared/styles';
import { CategoryInfo, CategoryItemContainer } from './styles';

export default function CategoryItem() {
  return (
    <CategoryItemContainer>
      <Image
        src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
        width={150}
        height={150}
      />
      <CategoryInfo>
        <TextTypography fontVariant="xlBody600" as="span">
          Suglas
        </TextTypography>
        <TextTypography
          fontVariant="bodySmall"
          as="span"
          className="category__amount"
        >
          15 productos
        </TextTypography>
      </CategoryInfo>
    </CategoryItemContainer>
  );
}
