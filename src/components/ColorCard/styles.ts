import styled from 'styled-components';
// import { lighten, rgba } from 'polished';
// interface IContainerProps {
//   color: string;
// }

export const Container = styled.div`
  align-items: flex-start;
  border-radius: .25rem ;
  color: ${ props => props.theme.colors.white };
  display: flex;
  flex-direction: column;
  height: 160px;
  overflow: hidden;
  padding: 1.25rem;
  position: relative;
  width: 33%;

  &.entry {
    background-color: ${ props => props.theme.colors.success };
  }
  &.output {
    background-color: ${ props => props.theme.colors.info };
  }
  &.balance {
    background-color: ${ props => props.theme.colors.danger };
  }
  
  &:nth-child(2) {
    margin: 0 30px;
  }

  > span {
    font-weight: 700;
    font-size: 20px;
  }

  > strong {
    font-size: 28px;

  }

  > small {
    bottom: 20px;
    font-size: 11px;
    position: absolute;
  }

  > img {
    height: 110%;
    opacity: .4;
    position: absolute;
    right: -30px;
    top: -15px;
  }
`;
