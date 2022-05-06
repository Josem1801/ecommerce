/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable jsx-a11y/anchor-is-valid */
import Image from 'next/image';
import React, { useState } from 'react';
import Link from 'next/link';
import { IoIosArrowDown } from 'react-icons/io';
import SearchInput from 'components/SearchInput';
import { FiHeart, FiShoppingCart } from 'react-icons/fi';
import { RiUser3Line, RiCloseFill } from 'react-icons/ri';
import { HiMenu } from 'react-icons/hi';
import Logo from 'public/logo.png';
import {
  AsideNavBar,
  IconWithCircle,
  MenuContainer,
  NavBar,
  NumberCircle,
} from './styles';
import { FlexContainer } from '../TopHeader/styles';

export default function MenuBar() {
  const [activeMenu, setActiveMenu] = useState(false);
  const handleMenu = () => setActiveMenu(!activeMenu);
  return (
    <MenuContainer>
      <Image src={Logo} height="80" width="80" />
      <NavBar>
        <ul>
          {navData.map(({ name, route }) => (
            <li key={name}>
              <Link href={route}>
                <a>
                  {name}
                  {name === 'Category' && <IoIosArrowDown />}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </NavBar>
      <AsideNavBar isMenuActive={activeMenu}>
        <RiCloseFill onClick={handleMenu} />

        <ul>
          {navData.map(({ name, route }) => (
            <li key={name}>
              <Link href={route}>
                <a>
                  {name}
                  {name === 'Category' && <IoIosArrowDown />}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </AsideNavBar>
      <SearchInput />
      <FlexContainer gap={22}>
        <FiHeart />
        <IconWithCircle>
          <FiShoppingCart />
          <NumberCircle>3</NumberCircle>
        </IconWithCircle>
        <RiUser3Line />
        <HiMenu onClick={handleMenu} className="menu" />
      </FlexContainer>
    </MenuContainer>
  );
}

const navData = [
  {
    name: 'Home',
    route: '/',
  },
  {
    name: 'Products',
    route: '/',
  },
  {
    name: 'Category',
    route: '/',
  },
  {
    name: 'Men',
    route: '/',
  },
  {
    name: 'Shop',
    route: '/',
  },
];
