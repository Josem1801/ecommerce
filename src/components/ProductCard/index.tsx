/* eslint-disable jsx-a11y/anchor-is-valid */
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { TextTypography } from 'shared/styles';
import { ProductCardContainer, ProductImage } from './styles';

interface ProductCardProps {
  image: string;
  title: string;
  price: number;
  categoryId: number;
  id: number;
}

export default function ProductCard({
  image,
  title,
  price,
  id,
  categoryId,
}: ProductCardProps) {
  return (
    <ProductCardContainer>
      <ProductImage>
        <Link href={`/${categoryId}/${id}`} passHref>
          <a>
            <Image src={image} alt={title} layout="fill" />
          </a>
        </Link>
      </ProductImage>
      <Link href="/image" passHref>
        <TextTypography fontVariant="bodyLarge" as="a" className="card__title">
          {title}
        </TextTypography>
      </Link>
      <TextTypography fontVariant="bodyRegular" as="span">
        $
        {price}
      </TextTypography>
    </ProductCardContainer>
  );
}
