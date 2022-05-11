/* eslint-disable @typescript-eslint/no-use-before-define */
import Slider from 'react-slick';
import React, { ReactNode } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { size } from 'theme/breakpoints';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import ArrowButon from './ArrowSlider/styles';

export default function FeaturedProductsSlider({
  children,
}: {
  children: ReactNode;
}) {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    initialSlide: 0,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    nextArrow: (
      <ArrowButon right>
        <IoIosArrowForward />
      </ArrowButon>
    ),
    prevArrow: (
      <ArrowButon>
        <IoIosArrowBack />
      </ArrowButon>
    ),
    responsive: [
      {
        breakpoint: size.mobileL,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: size.laptop,
        settings: {
          arrows: true,
        },
      },
      {
        breakpoint: size.desktop,
        settings: {
          arrows: false,
        },
      },
    ],
  };
  return <Slider {...settings}>{children}</Slider>;
}
