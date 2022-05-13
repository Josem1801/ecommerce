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
import Dropdown from 'components/Dropdown';
import { Option } from 'components/Dropdown/styles';
import {
  AsideNavBar,
  IconWithCircle,
  Menu,
  MenuContainer,
  NavBar,
  NumberCircle,
} from './styles';
import { FlexContainer } from '../TopHeader/styles';

export default function MenuBar({ menuBarFixed }: { menuBarFixed?: boolean }) {
  const [activeMenu, setActiveMenu] = useState(false);
  const handleMenu = () => setActiveMenu(!activeMenu);
  return (
    <MenuContainer fixed={menuBarFixed}>
      <Menu>
        <div>
          <Image
            src={Logo}
            height={80}
            width={80}
            layout="fixed"
            alt="Ecommerce"
          />
        </div>
        <NavBar>
          <ul>
            {navData.map(({ name, route }) => (
              <li key={name}>
                {name === 'Category' ? (
                  <Dropdown
                    options={[
                      { name: 'Category', route: 'category' },
                      { name: 'Electronicos', route: '/Electronics' },
                    ]}
                    fixedValue="Category"
                  />
                ) : (
                  <Link href={route} passHref>
                    <Option>{name}</Option>
                  </Link>
                )}
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
          <Link href="/favorites" passHref>
            <IconWithCircle as="a">
              <FiHeart />
              <NumberCircle>3</NumberCircle>
            </IconWithCircle>
          </Link>
          <Link href="/cart" passHref>
            <IconWithCircle as="a">
              <FiShoppingCart />
              <NumberCircle>3</NumberCircle>
            </IconWithCircle>
          </Link>
          <Link href="/auth/login">
            <a>
              <RiUser3Line />
            </a>
          </Link>

          <HiMenu onClick={handleMenu} className="menu" />
        </FlexContainer>
      </Menu>
    </MenuContainer>
  );
}
MenuBar.defaultProps = {
  menuBarFixed: false,
};
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
    route: '/shop',
  },
];
