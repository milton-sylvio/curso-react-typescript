import styled from 'styled-components';
import { darken, rgba } from 'polished';

export const Container = styled.aside`
  background-color: ${ props => darken(0.025, props.theme.aside) };
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.05);
  grid-area: AS;
`;

export const Header = styled.header`
  align-items: center;
  display: flex;
  padding: 30px 15px;
  height: 70px;
`; 

export const MenuContainer = styled.nav`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  padding-left: 20px;
`; 

export const MenuTitle = styled.span`
  color: ${ props => rgba(props.theme.textColor, 0.7) };
  font-size: ${ props => props.theme.general.fontSizes[0] };
  margin-bottom: ${ props => props.theme.general.space[3] };
  text-transform: uppercase;
`;

export const MenuItem = styled.a`
  align-items: center;
  border-radius: ${ props => props.theme.general.bordersRadius.normal };
  color: ${ props => rgba(props.theme.textColor, 0.7) };
  cursor: pointer;
  display: flex;
  margin-bottom: 5px;
  padding: 10px 12px;
  text-decoration: none;
  transition: all .3s;
  width: 90%;
  
  &:hover {
    background-color: ${ props => darken(0.05, props.theme.aside) };
    padding-left: 20px;
  }

  &.actived {
    background-color: ${ props => darken(0.05, props.theme.aside) };
    color: ${ props => props.theme.textColor };
  }

  > svg {
    font-size: 18px;
    margin-right: 10px;
  }
`;
