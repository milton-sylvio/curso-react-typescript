import styled from 'styled-components';
import { lighten, darken, rgba } from 'polished';

export const Container = styled.aside`
  background-color: ${ props => props.theme.colors.secondary };
  border-right: 1px solid ${ props => lighten(0.2, props.theme.colors.secondary) };
  grid-area: AS;
`;

export const Header = styled.header`
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid ${ props => lighten(0.2, props.theme.colors.secondary) };
  display: flex;
  height: 70px;
`; 
export const Title = styled.h3`
  color: ${ props => props.theme.colors.white };
  font-size: 20px;
`; 
export const Logo = styled.img`
  height: 40px;
  margin-right: 10px;
`; 
export const MenuContainer = styled.nav`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  padding-left: 20px;
`; 

export const MenuItem = styled.a`
  align-items: center;
  border-radius: 4px;
  color: ${ props => props.theme.colors.white };
  display: flex;
  margin-bottom: 5px;
  padding: 10px 12px;
  text-decoration: none;
  transition: all .3s;
  width: 90%;
  
  &:hover {
    background-color: ${ props => darken(0.05, props.theme.colors.secondary) };
    color: ${ props => rgba(props.theme.colors.white, 0.7) };
    padding-left: 20px;
  }

  &.actived {
    color: ${ props => darken(0.05, props.theme.colors.warning) };
  }

  > svg {
    font-size: 18px;
    margin-right: 10px;
  }
`;

