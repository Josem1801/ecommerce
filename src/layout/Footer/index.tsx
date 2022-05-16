/* eslint-disable @typescript-eslint/no-use-before-define */
import SubscribeInput from 'components/SubscribeInput';
import Link from 'next/link';
import React from 'react';
import { RiInstagramFill } from 'react-icons/ri';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { BsGithub } from 'react-icons/bs';
import {
  FooterContainer,
  FooterMaxWidthContainer,
  JustifyBetweenContent,
  FooterText,
  SubscribeTitle,
  NavColumn,
  NavigationContainer,
  SocialMedia,
} from './styles';

export default function Footer() {
  return (
    <FooterContainer>
      <FooterMaxWidthContainer>
        <JustifyBetweenContent>
          <div>
            <SubscribeTitle fontVariant="heading2">
              Subscribe to get notifications
            </SubscribeTitle>
            <FooterText fontVariant="bodySmall">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </FooterText>
          </div>
          <SubscribeInput />
        </JustifyBetweenContent>
        <JustifyBetweenContent middle>
          <div>
            <SubscribeTitle fontVariant="heading2">Commerce</SubscribeTitle>
            <FooterText fontVariant="bodySmall">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              molestie malesuada metus, non molestie ligula laoreet vitae. Ut et
              fringilla risus, vel.
            </FooterText>
          </div>
          <NavigationContainer>
            {footerNavigationData.map(({ title, childs }) => (
              <NavColumn key={title}>
                <span>{title}</span>
                <ul>
                  {childs.map(({ name, route }) => (
                    <Link key={name} href={route}>
                      {name}
                    </Link>
                  ))}
                </ul>
              </NavColumn>
            ))}
          </NavigationContainer>
        </JustifyBetweenContent>
        <JustifyBetweenContent rowGap={5}>
          <FooterText fontVariant="bodySmall">
            © 2022. Design by Zakir Soft and Developed by Jose Rosales
          </FooterText>
          <SocialMedia>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <BsGithub />
            </a>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <AiFillTwitterCircle />
            </a>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <RiInstagramFill />
            </a>
          </SocialMedia>
        </JustifyBetweenContent>
      </FooterMaxWidthContainer>
    </FooterContainer>
  );
}

const footerNavigationData = [
  {
    title: 'Company',
    childs: [
      { name: 'About', route: '/' },
      { name: 'Help & Support', route: '/help-and-support' },
      { name: 'Privacy Policy', route: '/privacy' },
      { name: 'Terms of Service', route: '/privacy' },
    ],
  },
  {
    title: 'Quick links',
    childs: [
      { name: 'New Realease', route: '/new-realease' },
      { name: 'Customize', route: '/customize' },
      { name: 'Sales & Discount', route: '/sales-and-discount' },
      { name: 'Men', route: '/shop' },
      { name: 'Women', route: '/shop' },
    ],
  },
  {
    title: 'Account',
    childs: [
      { name: 'Your bag', route: '/profile' },
      { name: 'Profile', route: '/profile' },
      { name: 'Order Completed', route: '/order-complete' },
      { name: 'Log-Outs', route: '/profile' },
    ],
  },
];
