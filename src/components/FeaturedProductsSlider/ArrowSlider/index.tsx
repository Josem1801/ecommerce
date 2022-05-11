import React, { HTMLAttributes, ReactNode } from 'react';
import ArrowButon from './styles';

interface ArrowSliderProps {
  children: ReactNode;
}
export default function ArrowSlider({
  children,
  ...props
}: ArrowSliderProps & HTMLAttributes<HTMLButtonElement>) {
  return <ArrowButon {...props} />;
}
