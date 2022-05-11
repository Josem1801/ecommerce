import useIntersectionObserver from 'hooks/use-intersection-observer';
import { useRef } from 'react';
import MenuBar from './MenuBar';
import HeaderContainer from './styles';
import TopHeader from './TopHeader';

export default function Header() {
  const ref = useRef<HTMLDivElement | null>(null);
  const entry = useIntersectionObserver(ref, { rootMargin: '-2px' });
  const isScrollingButton = !entry?.isIntersecting;
  return (
    <HeaderContainer fontVariant="bodySmall">
      <TopHeader ref={ref} />
      <MenuBar menuBarFixed={isScrollingButton} />
    </HeaderContainer>
  );
}
