import {
  HeaderStyles,
  HeaderStylesTypes,
  MaxWidth,
  TextStyles,
  TextStylesType,
} from 'shared/styles';
import styled from 'styled-components';

export const JustifyBetweenContent = styled.section<{
  middle?: boolean | undefined;
  rowGap?: number | undefined;
}>`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  row-gap: ${({ rowGap }) => rowGap || 30}px;
  margin-top: ${({ middle }) => (middle ? 72 : 0)}px;
  padding-top: ${({ middle }) => (middle ? 100 : 0)}px;
  padding-bottom: ${({ middle }) => (middle ? 100 : 0)}px;
  column-gap: 20px;
  border-bottom: 1px solid
    ${({ middle, theme }) => (middle ? theme.colors.manatee : 'trasnparent')};
  border-top: 1px solid
    ${({ middle, theme }) => (middle ? theme.colors.manatee : 'trasnparent')};
`;

export const FooterMaxWidthContainer = styled.div`
  ${MaxWidth}
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const SubscribeTitle = styled.div<HeaderStylesTypes>`
  width: 336px;
  color: ${({ theme }) => theme.colors.white};
  ${HeaderStyles};
`;

export const FooterText = styled.p<TextStylesType>`
  max-width: 401px;
  color: ${({ theme }) => theme.colors.manatee};
  ${TextStyles};
`;

export const NavColumn = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.white};
  ul {
    display: flex;
    flex-direction: column;
    padding: 0;
    row-gap: 11px;
    a {
      text-decoration: none;
      color: ${({ theme }) => theme.colors.manatee};
    }
  }
`;
export const SocialMedia = styled.div`
  display: flex;
  align-items: center;
  column-gap: 15px;
  margin-bottom: 18px;
  svg {
    color: ${({ theme }) => theme.colors.manatee};
  }
`;
export const NavigationContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 100%;
  justify-content: space-between;
  column-gap: 0;
`;

export const FooterContainer = styled.footer`
  width: 100%;
  padding-top: 70px;
  background: ${({ theme }) => theme.colors.shark};

  @media (${({ theme }) => theme.breakpoints.tablet}) {
    ${JustifyBetweenContent} {
      flex-direction: row;
    }
    ${NavigationContainer} {
      column-gap: 10px;
    }
    ${SocialMedia} {
      margin-bottom: 0;
    }
  }
  @media (${({ theme }) => theme.breakpoints.laptop}) {
    ${NavigationContainer} {
      column-gap: 100px;
      width: auto;
    }
    height: 786px;
    ${SocialMedia} {
      min-height: 76px;
    }
  }
`;
