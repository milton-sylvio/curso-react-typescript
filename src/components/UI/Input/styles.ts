import styled from 'styled-components';
import { rgba } from 'polished'

export const Container = styled.div`
  align-items: center;
  display: flex;
  height: 40px;
  margin: ${ props => props.theme.general.space[0] } ${ props => props.theme.general.space[0] } ${ props => props.theme.general.space[3] };
  position: relative;
  width: 100%;

  svg {
    font-size: ${ props => props.theme.general.fontSizes[0] };
    left: 14px;
    position: absolute;
  }

  > input {
    background-color: ${ props => props.theme.input.bg }; 
    border-radius: ${ props => props.theme.general.bordersRadius.normal };
    border: 1px solid ${ props => props.theme.input.borderColor };
    color: ${ props => props.theme.input.color };
    display: inline-block;
    font-size: ${ props => props.theme.general.fontSizes[3] };
    height: 40px;
    padding-left: 45px;
    transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;
    width: 100%;

    &:-webkit-autofill {
      &,
      &:hover, 
      &:focus, 
      &:active  {
        box-shadow: 0 0 0 40px ${ props => props.theme.input.bg } inset !important;
        -webkit-text-fill-color: ${ props => props.theme.input.color };
      }
    }
    
    &:focus {
      border-color: ${ props => props.theme.general.colors.primary };
      box-shadow: 0 0 0 0.2rem ${ props => rgba(props.theme.general.colors.primary, .25) };
      color: ${ props => props.theme.input.color };
      outline: 0;
    }
  }
`;