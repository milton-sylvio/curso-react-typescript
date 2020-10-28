import styled from 'styled-components';

interface ITitleHeaderProps {
  lineColor: string;
}

export const Container = styled.header`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
`;

export const TitleHeader = styled.h1<ITitleHeaderProps>`
  color: ${ props => props.theme.colors.white };
  
  &::after {
    background-color: ${ props => props.lineColor };
    content: '';
    display: block;
    height: 10px;
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

