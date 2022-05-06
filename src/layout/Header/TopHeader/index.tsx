import { HiOutlineMail } from 'react-icons/hi';
import { BiPhoneCall } from 'react-icons/bi';
import { IoIosArrowDown } from 'react-icons/io';
import {
  FlexContainer,
  HeaderInfo,
  HeaderUserMenu,
  Line,
  MaxWidthContainer,
} from './styles';

export default function TopHeader() {
  return (
    <MaxWidthContainer>
      <HeaderInfo>
        <FlexContainer gap={10}>
          <HiOutlineMail />
          ecommercefake@gmail.com
        </FlexContainer>
        <Line />

        <FlexContainer gap={10}>
          <BiPhoneCall />
          +880167 88890
        </FlexContainer>
      </HeaderInfo>
      <HeaderUserMenu>
        <FlexContainer gap={13}>
          English
          <IoIosArrowDown />
        </FlexContainer>
        <Line />
        <FlexContainer gap={13}>
          Currency
          <IoIosArrowDown />
        </FlexContainer>
      </HeaderUserMenu>
    </MaxWidthContainer>
  );
}
