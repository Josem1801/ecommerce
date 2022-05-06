import MenuBar from './MenuBar';
import HeaderContainer from './styles';
import TopHeader from './TopHeader';

export default function Header() {
  return (
    <HeaderContainer fontVariant="bodySmall">
      <TopHeader />
      <MenuBar />
    </HeaderContainer>
  );
}
