import styled from 'styled-components';

export const Container = styled.section`
  background-color: ${ props => props.theme.colors.tertiary };
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  height: 260px;
  justify-content: space-between;
  padding: 30px;
  margin: 25px 0;
  position: relative;
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