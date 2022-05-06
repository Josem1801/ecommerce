/* eslint-disable @typescript-eslint/indent */
/* eslint-disable implicit-arrow-linebreak */
import styled, { css } from 'styled-components';

export const MaxWidth = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 510px;
  padding: 0 15px;
  @media (${({ theme }) => theme.breakpoints.tablet}) {
    max-width: 690px;
  }
  @media (${({ theme }) => theme.breakpoints.laptop}) {
    max-width: 1200px;
    padding: 0 15px;
  }
`;
export interface HeaderStylesTypes {
  fontVariant: 'heading1' | 'heading2' | 'heading3' | 'display1';
}
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
export const TextStyles = css<TextStylesType>`
  font-size: ${({ theme, fontVariant }) =>
    theme.typography.text[fontVariant].fontSize}px;
  font-weight: ${({ theme, fontVariant }) =>
    theme.typography.text[fontVariant].fontWeight};
  line-height: ${({ theme, fontVariant }) =>
    theme.typography.text[fontVariant].lineHeight}px;
`;
