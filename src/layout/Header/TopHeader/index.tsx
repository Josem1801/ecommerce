/* eslint-disable react/display-name */
import { HiOutlineMail } from 'react-icons/hi';
import { BiPhoneCall } from 'react-icons/bi';
import { forwardRef, HTMLProps } from 'react';
import Dropdown from 'components/Dropdown';
import {
  FlexContainer,
  HeaderInfo,
  HeaderUserMenu,
  Line,
  MaxWidthContainer,
} from './styles';

const TopHeader = forwardRef<HTMLDivElement, HTMLProps<HTMLDivElement>>(
  (props, ref) => (
    <MaxWidthContainer ref={ref}>
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
        <Dropdown
          select
          options={[
            { route: '/es', name: 'Español' },
            { route: '/en', name: 'English' },
          ]}
        />

        <Line />
        <Dropdown
          select
          options={[
            { route: '/mxn', name: 'MXN' },
            { route: '/usd', name: 'USD' },
          ]}
        />
      </HeaderUserMenu>
    </MaxWidthContainer>
  ),
);
export default TopHeader;
