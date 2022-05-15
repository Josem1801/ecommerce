import ImageGalery from 'components/ImageGalery';
import Square from 'components/Square/styles';
import { FlexContainer } from 'layout/Header/TopHeader/styles';
import React, { useState } from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import { Product } from 'services/getProductsList';
import { Button, TextTypography } from 'shared/styles';
import colors from 'theme/colors';
import { FaRegHeart, FaHeart } from 'react-icons/fa';
import CounterInput from 'components/CounterInput';
import {
  LoveItButton,
  ProductDetailContainer,
  ProductInformation,
} from './styles';

interface PurchaseProductType {
  size: string;
  color: string;
  amount: number;
}
export default function ProductDetail({ product }: { product: Product }) {
  const [productData, setProductData] = useState<PurchaseProductType>({
    size: 'S',
    amount: 1,
    color: 'blue',
  });
  const [like, setLike] = useState<boolean>(false);
  const SIZES = ['S', 'M', 'L', 'XL', 'XXL'];
  const COLORS = ['lightgreen', 'lightblue', 'lightgray'];

  return (
    <ProductDetailContainer>
      <ImageGalery images={product.images} />
      <ProductInformation>
        <div>
          <TextTypography fontVariant="xlBody500" as="h1">
            {product.title}
          </TextTypography>
          <TextTypography fontVariant="xlBody400" as="span">
            ${product.price}
          </TextTypography>
        </div>
        <TextTypography fontVariant="bodyRegular" as="p" color="manatee">
          {product.description}
        </TextTypography>
        <FlexContainer gap={40} wrapContent>
          <div>
            <TextTypography fontVariant="bodyTiny" as="p" color="manatee">
              SIZES
            </TextTypography>
            <FlexContainer gap={12}>
              {SIZES.map((size) => (
                <Square
                  key={size}
                  selected={productData.size === size}
                  onClick={() => setProductData({ ...productData, size })}
                >
                  {size}
                </Square>
              ))}
            </FlexContainer>
          </div>
          <div>
            <TextTypography fontVariant="bodyTiny" as="p" color="manatee">
              COLORS
            </TextTypography>
            <FlexContainer gap={12}>
              {COLORS.map((color) => (
                <Square
                  onClick={() => setProductData({ ...productData, color })}
                  selected={productData.color === color}
                  border="2px solid transparent"
                  customBorderSelected={`2px solid ${colors.shark}`}
                  bgColor={color}
                  key={color}
                />
              ))}
            </FlexContainer>
          </div>
          <div>
            <TextTypography fontVariant="bodyTiny" as="p" color="manatee">
              QUANTITY
            </TextTypography>
            <CounterInput />
          </div>
        </FlexContainer>
        <FlexContainer gap={32}>
          <Button>
            ADD TO CART <FiShoppingCart />
          </Button>
          <LoveItButton onClick={() => setLike(!like)} active={like}>
            {like ? <FaHeart /> : <FaRegHeart fontSize={18} />}
          </LoveItButton>
        </FlexContainer>
      </ProductInformation>
    </ProductDetailContainer>
  );
}
