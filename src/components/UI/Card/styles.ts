import styled from 'styled-components';

export const Container = styled.section`
  background-color: ${ props => props.theme.card };
  border-radius: ${ props => props.theme.general.bordersRadius.normal };
  box-shadow: 0 4px 6px rgba(52,58,64, .06);
  display: flex;
  margin: 25px 0 0;
  min-height: 0;
  min-width: 0;
  padding: 1.55rem;
  position: relative;
  width: 100%;
`;

export default Container;