import styled from 'styled-components';
import Card from '../UI/Card/styles';

interface IContainerProps {
  borderColor: string;
}

export const Container = styled(Card)<IContainerProps>`
  align-items: center;
  border-left: 8px solid ${ props => props.borderColor };
  cursor: pointer;
  justify-content: space-between;
  margin: 0 0 10px;
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
