import styled from 'styled-components';

interface IContainerProps {
  borderColor: string;
}

export const Container = styled.div<IContainerProps>`
  align-items: center;
  background-color:  ${ props => props.theme.colors.tertiary };
  border-left: 8px solid ${ props => props.borderColor };
  border-radius: 5px;
  color:  ${ props => props.theme.colors.white };
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  padding: 10px 15px;
  transition: all 0.3s;

  > div {
    display: flex;
    flex-direction: column;

    > span {
      font-weight: 700;
    }
  }

  &:hover {
    box-shadow: 0 0 5px 3px rgba(0,0,0,0.2);
    transform: translateX(10px);
  }
`;
