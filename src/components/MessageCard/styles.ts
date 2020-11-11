import styled from 'styled-components';
import Card from '../Card/styles';

export const Container = styled(Card)`
  height: 260px;
  flex-direction: column;
  width: 48%;

  h2 {
    font-size: 28px;
  }
  h3 {
    font-size: 18px;
    font-weight: normal;
  }

  img {
    width: 35px;
    margin-left: 15px;
  }

  footer {
    position: absolute;
    bottom: 30px;
  }
`;