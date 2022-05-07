import Slider from 'react-slick';
import React, { ReactNode } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { size } from 'theme/breakpoints';

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
    responsive: [
      {
        breakpoint: size.mobileL,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return <Slider {...settings}>{children}</Slider>;
}
