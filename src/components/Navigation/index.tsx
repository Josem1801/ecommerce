import { FlexContainer } from 'layout/Header/TopHeader/styles';
import Link from 'next/link';
import React, { Fragment } from 'react';
import { HeaderTypography, TextTypography } from 'shared/styles';
import { NavigationSection, MaxWidthContainer } from './styles';

interface NavigationProps {
  name: string;
  routes: { name: string; route: string }[];
}
export default function Navigation({ name, routes }: NavigationProps) {
  return (
    <NavigationSection>
      <MaxWidthContainer>
        <FlexContainer gap="0 16" wrapContent>
          {routes.map((route, idx) =>
            idx === routes.length - 1 ? (
              <TextTypography
                fontVariant="bodyRegular"
                color="dodgerBlue"
                as="span"
                key={route.name}
              >
                {route.name}
              </TextTypography>
            ) : (
              <Fragment key={route.name}>
                <Link href={route.route} passHref>
                  <TextTypography fontVariant="bodyRegular" as="a">
                    {route.name}
                  </TextTypography>
                </Link>
                <TextTypography fontVariant="bodyTiny">/</TextTypography>
              </Fragment>
            ),
          )}
        </FlexContainer>
        <HeaderTypography fontVariant="heading3">{name}</HeaderTypography>
      </MaxWidthContainer>
    </NavigationSection>
  );
}
