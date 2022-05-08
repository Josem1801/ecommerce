/* eslint-disable jsx-a11y/anchor-is-valid */
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { ProductCategory } from 'services/getProdcutsCategorys';
import { TextTypography } from 'shared/styles';
import { CategoryInfo, CategoryItemContainer } from './styles';

export default function CategoryItem({ id, name, image }: ProductCategory) {
  return (
    <CategoryItemContainer>
      <Link href={`category/${id}`} passHref>
        <a>
          <Image src={image} width={150} height={150} />
        </a>
      </Link>
      <CategoryInfo>
        <TextTypography fontVariant="xlBody600" as="span">
          {name}
        </TextTypography>
        <TextTypography
          fontVariant="bodySmall"
          as="span"
          className="category__amount"
        />
      </CategoryInfo>
    </CategoryItemContainer>
  );
}
