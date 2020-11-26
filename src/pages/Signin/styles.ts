import styled from 'styled-components';
import { rgba, math } from 'polished';

import Card from '../../components/UI/Card/styles';

export const Container = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
  height: 100vh;
  max-width: 350px;
`;

export const ContainerSignin = styled.section`
  flex: 0;
  max-width: 350px;
  width: 100%;
`;

export const FormContainer = styled(Card)`
  flex: 0;
  flex-direction: column;
  padding: 30px;

  > h1 {
    font-size: ${ props => props.theme.general.fontSizes[4] };
    margin-bottom: ${ props => props.theme.general.space[4] };
  
    &:after {
      content: '';
      background-color: ${ props => props.theme.general.colors.primary };
      display: block;
      height: 5px;
      width: 50px;
    }
  }

  label {
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin-bottom: ${ props => props.theme.general.space[1] };

    small {
      color: ${ props => rgba(props.theme.textColor, 0.7) };
      cursor: pointer;
      font-size: ${ props => math(`${props.theme.general.fontSizes[0]} - 2`) };
      text-transform: uppercase;

      &:hover {
        color: ${ props => props.theme.general.colors.primary }
      }
    }
  }
`;
