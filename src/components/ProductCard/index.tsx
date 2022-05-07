import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { TextTypography } from 'shared/styles';
import { ProductCardContainer, ProductImage } from './styles';

export default function ProductCard() {
  return (
    <ProductCardContainer>
      <ProductImage>
        <Link href="/image" passHref>
          <Image
            src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
            alt="Image"
            layout="fill"
          />
        </Link>
      </ProductImage>
      <Link href="/image" passHref>
        <TextTypography fontVariant="bodyLarge" as="a" className="card__title">
          Product name
        </TextTypography>
      </Link>
      <TextTypography fontVariant="bodyRegular" as="span">
        $3000
      </TextTypography>
    </ProductCardContainer>
  );
}
