import styled from 'styled-components';

export const Container = styled.header`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
`;

export const TitleHeader = styled.h1`  
  &::after {
    background-color: ${ props => props.theme.general.colors.primary };
    content: '';
    display: block;
    height: 5px;
    width: 60px;
  }
`;

export const Controllers = styled.div`
  display: flex;

  button {
    &:last-child {
      margin-left: 10px;
    }
  }
`;

