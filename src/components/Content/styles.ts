import styled from 'styled-components';

export const Container = styled.main`
  /* background-color: ${ props => props.theme.backoundColor }; */
  grid-area: CT;
  padding: 28px;

  height: calc(100vh - 70px);
  overflow-y: scroll;
  
  ::-webkit-scrollbar {
    width: 10px;
  }
  
  ::-webkit-scrollbar-thumb {
    background-color: ${ props => props.theme.scrollbar.thumb };
    border-radius: ${ props => props.theme.general.bordersRadius.large };
  }
  ::-webkit-scrollbar-track {
    background-color: ${ props => props.theme.scrollbar.track };
  }
`;
