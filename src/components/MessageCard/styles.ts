import styled from 'styled-components';

export const Container = styled.section`
  background-color: ${ props => props.theme.colors.tertiary };
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  height: 260px;
  padding: 30px;
  position: relative;
  width: 48%;

  h2,
  h3 {
    font-size: 28px;
  }

  img {
    height: 35px;
    width: 35px;
    margin-left: 15px;
  }
`;