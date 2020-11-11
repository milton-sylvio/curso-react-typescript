import styled from 'styled-components';
import { lighten, darken, rgba } from 'polished';

export const Container = styled.aside`
  background-color: ${ props => props.theme.colors.secondary };
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
  /* border-right: 1px solid ${ props => lighten(0.2, props.theme.colors.secondary) }; */
  grid-area: AS;
`;

export const Header = styled.header`
  align-items: center;
  /* justify-content: center; */
  /* border-bottom: 1px solid ${ props => lighten(0.2, props.theme.colors.secondary) }; */
  display: flex;
  padding: 15px;
  height: 70px;
`; 
export const Title = styled.span`
  color: ${ props => props.theme.colors.white };
  font-size: 16px;
`; 
export const Logo = styled.img`
  height: 30px;
  margin-right: 10px;
`; 
export const MenuContainer = styled.nav`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  padding-left: 20px;
`; 

export const MenuTitle = styled.span`
  text-transform: uppercase;
`;

export const MenuItem = styled.a`
  align-items: center;
  border-radius: 4px;
  color: ${ props => rgba(props.theme.colors.white, 0.7) };
  display: flex;
  margin-bottom: 5px;
  padding: 10px 12px;
  text-decoration: none;
  transition: all .3s;
  width: 90%;
  
  &:hover {
    background-color: ${ props => darken(0.05, props.theme.colors.secondary) };
    color: ${ props => props.theme.colors.white };
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

