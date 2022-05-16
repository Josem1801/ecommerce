/* eslint-disable jsx-a11y/anchor-is-valid */
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { TextTypography } from 'shared/styles';
import { FiHeart, FiShoppingCart } from 'react-icons/fi';
import { FaHeart } from 'react-icons/fa';
import {
  AbsoluteCircleButton,
  ProductCardContainer,
  ProductImage,
} from './styles';

interface ProductCardProps {
  image: string;
  title: string;
  price: number;
  categoryName: string;
  id: number;
  isInCart?: boolean;
  isInFav?: boolean;
}

export default function ProductCard({
  image,
  title,
  price,
  id,
  categoryName,
  isInCart,
  isInFav,
}: ProductCardProps) {
  return (
    <ProductCardContainer>
      <AbsoluteCircleButton right={68} selected={isInFav}>
        {isInFav ? <FaHeart /> : <FiHeart />}
      </AbsoluteCircleButton>
      <AbsoluteCircleButton selected={isInCart}>
        <FiShoppingCart />
      </AbsoluteCircleButton>
      <ProductImage>
        <Link href={`/${categoryName}/${id}`} passHref>
          <a>
            <Image
              src={
                image.includes('http')
                  ? image
                  : 'https://www.azendportafolio.com/static/img/not-found.png'
              }
              alt={title}
              layout="fill"
            />
          </a>
        </Link>
      </ProductImage>
      <Link href={`/${categoryName}/${id}`} passHref>
        <TextTypography fontVariant="bodyLarge" as="a" className="card__title">
          {title}
        </TextTypography>
      </Link>
      <TextTypography fontVariant="bodyRegular" as="span">
        ${price}
      </TextTypography>
    </ProductCardContainer>
  );
}
ProductCard.defaultProps = {
  isInCart: false,
  isInFav: false,
};
