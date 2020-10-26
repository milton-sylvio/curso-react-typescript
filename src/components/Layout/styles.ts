import styled from 'styled-components';

/** 
  * Layout
  * MH = Main Header
  * AS = Aside
  * CT = Content
  */

export const Grid = styled.div`
  display: grid;
  height: 100vh;
  grid-template-columns: 250px auto;
  grid-template-rows: 70px auto;
  grid-template-areas: 'AS MH' 'AS CT';
`;
