/* eslint-disable react/display-name */
import { HiOutlineMail } from 'react-icons/hi';
import { BiPhoneCall } from 'react-icons/bi';
import { forwardRef, HTMLProps } from 'react';
import Select from 'components/Select';
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
        <Select
          options={[
            { value: 'es', name: 'Español' },
            { value: 'en', name: 'English' },
          ]}
        />

        <Line />
        <Select
          options={[
            { value: 'mxn', name: 'MXN' },
            { value: 'usd', name: 'USD' },
          ]}
        />
      </HeaderUserMenu>
    </MaxWidthContainer>
  ),
);
export default TopHeader;
