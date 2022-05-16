/* eslint-disable no-confusing-arrow */
/* eslint-disable @typescript-eslint/indent */
/* eslint-disable implicit-arrow-linebreak */
import styled, { css } from 'styled-components';

export const Loader = styled.div<{ diameter?: number }>`
  width: 15px;
  height: 15px;
  border: 2px solid ${({ theme }) => theme.colors.manatee};
  border-bottom-color: ${({ theme }) => theme.colors.white};
  border-radius: 50%;
  background: transparent;
  animation: loaderRotate 1s cubic-bezier(0.42, 0.67, 0.4, 0.65) infinite;
  @keyframes loaderRotate {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
export const SocialMediaButton = styled.button`
  width: 122px;
  height: 44px;
  border: 1px solid ${({ theme }) => theme.colors.manatee};
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.manatee};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  transition: 300ms ease-in-out;
  cursor: pointer;
  :hover {
    background: ${({ theme }) => theme.colors.manatee}90;
    color: ${({ theme }) => theme.colors.white};
  }
`;
export const Button = styled.button<{
  secondary?: boolean;
  center?: boolean;
  fullWidth?: boolean;
}>`
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'fit-content')};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.typography.text.bodySmall.fontSize}px;
  font-weight: ${({ theme }) => theme.typography.text.bodySmall.fontWeight};
  line-height: ${({ theme }) => theme.typography.text.bodySmall.lineHeight}px;
  background: ${({ theme, secondary }) =>
    secondary ? theme.colors.galery : theme.colors.dodgerBlue};
  color: ${({ theme, secondary }) =>
    secondary ? theme.colors.dodgerBlue : theme.colors.white};
  border: 1px solid
    ${({ theme, secondary }) =>
      secondary ? 'transparent' : theme.colors.dodgerBlue};
  padding: 20px 31px;
  ${({ center }) => center && 'margin: 0 auto;'}
  border-radius: 4px;
  transition: 0.2s ease-in-out;
  gap: 15px;

  cursor: pointer;
  :hover {
    background: ${({ theme, secondary }) =>
      !secondary ? theme.colors.white : theme.colors.dodgerBlue};
    color: ${({ theme, secondary }) =>
      !secondary ? theme.colors.dodgerBlue : theme.colors.white};
  }
`;

export const GrayContainer = styled.section<{ paddingY?: boolean }>`
  background: ${({ theme }) => theme.colors.galery};
  padding: ${({ paddingY }) => (paddingY ? 100 : 0)}px 0;
`;

export const MaxWidthContainer = styled.section<{ marginY?: boolean }>`
  width: 100%;
  margin: ${({ marginY }) => (marginY ? 100 : 0)}px auto;
  max-width: 510px;
  padding: 0 15px;

  @media (${({ theme }) => theme.breakpoints.tablet}) {
    padding: 0;
    max-width: 690px;
  }
  @media (${({ theme }) => theme.breakpoints.laptop}) {
    padding: 0 15px;
    max-width: 1200px;
    padding: 0 20px;
  }
`;
export const MaxWidth = css`
  width: 100%;
  margin: 0 auto;
  max-width: 510px;
  padding: 0 15px;

  @media (${({ theme }) => theme.breakpoints.tablet}) {
    padding: 0;
    max-width: 690px;
  }
  @media (${({ theme }) => theme.breakpoints.laptop}) {
    padding: 0 15px;
    max-width: 1200px;
    padding: 0 20px;
  }
`;

export interface HeaderStylesTypes {
  fontVariant: 'heading1' | 'heading2' | 'heading3' | 'display1';
}

export const HeaderTypography = styled.div<HeaderStylesTypes>`
  font-size: ${({ theme, fontVariant }) =>
    theme.typography.header[fontVariant].fontSize}px;
  font-weight: ${({ theme, fontVariant }) =>
    theme.typography.header[fontVariant].fontWeight};
  line-height: ${({ theme, fontVariant }) =>
    theme.typography.header[fontVariant].lineHeight}px;
`;

export const HeaderStyles = css<HeaderStylesTypes>`
  font-size: ${({ theme, fontVariant }) =>
    theme.typography.header[fontVariant].fontSize}px;
  font-weight: ${({ theme, fontVariant }) =>
    theme.typography.header[fontVariant].fontWeight};
  line-height: ${({ theme, fontVariant }) =>
    theme.typography.header[fontVariant].lineHeight}px;
`;
export interface TextStylesType {
  fontVariant:
    | 'xlBody600'
    | 'xlBody500'
    | 'xlBody400'
    | 'bodyLarge'
    | 'bodyRegular'
    | 'bodySmall'
    | 'bodySmallRegular'
    | 'bodyTiny';
  color?:
    | 'error'
    | 'success'
    | 'blue'
    | 'ronchi'
    | 'dodgerBlue'
    | 'galery'
    | 'pantonePurple'
    | 'manatee'
    | 'shark'
    | 'white';
}
export const TextTypography = styled.p<TextStylesType>`
  font-size: ${({ theme, fontVariant }) =>
    theme.typography.text[fontVariant].fontSize}px;
  font-weight: ${({ theme, fontVariant }) =>
    theme.typography.text[fontVariant].fontWeight};
  line-height: ${({ theme, fontVariant }) =>
    theme.typography.text[fontVariant].lineHeight}px;
  color: ${({ theme, color }) => theme.colors[color || 'shark']};
  text-decoration: none;
`;

export const TextStyles = css<TextStylesType>`
  font-size: ${({ theme, fontVariant }) =>
    theme.typography.text[fontVariant].fontSize}px;
  font-weight: ${({ theme, fontVariant }) =>
    theme.typography.text[fontVariant].fontWeight};
  line-height: ${({ theme, fontVariant }) =>
    theme.typography.text[fontVariant].lineHeight}px;
`;
