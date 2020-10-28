import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${ props => props.theme.colors.secondary };
  border-right: 1px solid ${ props => props.theme.colors.grey };
  grid-area: AS;
  padding-left: 20px;
`;

export const Header = styled.header`
  align-items: center;
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
  margin-top: 50px;
`; 
export const MenuItem = styled.a`
  align-items: center;
  color: ${ props => props.theme.colors.info };
  display: flex;
  margin-bottom: 15px;
  text-decoration: none;
  transition: opacity .3s;
  
  &:hover {
    opacity: .7;
  }

  > svg {
    font-size: 18px;
    margin-right: 5px;
  }
`;

