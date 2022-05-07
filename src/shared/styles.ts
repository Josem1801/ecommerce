/* eslint-disable no-confusing-arrow */
/* eslint-disable @typescript-eslint/indent */
/* eslint-disable implicit-arrow-linebreak */
import styled, { css } from 'styled-components';

export const Button = styled.button<{ secondary?: boolean; center?: boolean }>`
  width: fit-content;
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
  padding: 15px 31px;
  ${({ center }) => center && 'margin: 0 auto;'}
  border-radius: 4px;
  transition: 0.2s ease-in-out;
  cursor: pointer;
  :hover {
    background: ${({ theme, secondary }) =>
      !secondary ? theme.colors.white : theme.colors.dodgerBlue};
    color: ${({ theme, secondary }) =>
      !secondary ? theme.colors.dodgerBlue : theme.colors.white};
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
    | 'xlBody400'
    | 'bodyLarge'
    | 'bodyRegular'
    | 'bodySmall';
}
export const TextTypography = styled.p<TextStylesType>`
  font-size: ${({ theme, fontVariant }) =>
    theme.typography.text[fontVariant].fontSize}px;
  font-weight: ${({ theme, fontVariant }) =>
    theme.typography.text[fontVariant].fontWeight};
  line-height: ${({ theme, fontVariant }) =>
    theme.typography.text[fontVariant].lineHeight}px;
`;

export const TextStyles = css<TextStylesType>`
  font-size: ${({ theme, fontVariant }) =>
    theme.typography.text[fontVariant].fontSize}px;
  font-weight: ${({ theme, fontVariant }) =>
    theme.typography.text[fontVariant].fontWeight};
  line-height: ${({ theme, fontVariant }) =>
    theme.typography.text[fontVariant].lineHeight}px;
`;
