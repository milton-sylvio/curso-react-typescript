import styled from 'styled-components';

export const Container = styled.section`
  background-color: ${ props => props.theme.colors.tertiary };
  border-radius: .25rem;
  display: flex;
  margin: 25px 0 0;
  min-height: 80px;
  min-width: 0;
  padding: 1.55rem;
  position: relative;
  width: 100%;
`;

export default Container;