import React, { ReactNode } from 'react';
import ItemsGridContainer from './styles';

export default function ItemsGrid({ children }: { children: ReactNode }) {
  return <ItemsGridContainer>{children}</ItemsGridContainer>;
}
