/* eslint-disable react/no-array-index-key */
import Image from 'next/image';
import React, { useState } from 'react';
import {
  ImageContainer,
  ImageGaleryContainer,
  ImagesContainer,
} from './styles';

interface ImageGaleryProps {
  images: string[];
}
export default function ImageGalery({ images }: ImageGaleryProps) {
  const [imageSelected, setImageSelected] = useState(0);
  return (
    <ImageGaleryContainer>
      <Image
        src={
          images[imageSelected].includes('http')
            ? images[imageSelected]
            : 'https://www.azendportafolio.com/static/img/not-found.png'
        }
        alt="preview"
        layout="responsive"
        width={200}
        height={200}
      />

      <ImagesContainer>
        {images.map((url, idx) => (
          <ImageContainer
            key={idx}
            onClick={() => imageSelected !== idx && setImageSelected(idx)}
            active={imageSelected !== idx}
          >
            <Image
              src={
                url.includes('http')
                  ? url
                  : 'https://www.azendportafolio.com/static/img/not-found.png'
              }
              width={100}
              height={100}
            />
          </ImageContainer>
        ))}
      </ImagesContainer>
    </ImageGaleryContainer>
  );
}
