import styled from 'styled-components';
import Card from '../../Card/styles';

export const Container = styled(Card)`
  height: 220px;
  justify-content: space-between;
  width: 48%;

  aside {
    display: flex;
    width: 48%;
  }
`;

export const SideLeft = styled.aside`
  align-content: space-between;
  flex-wrap: wrap;

  > * {
    flex: 1;
  }
`;

export const SideRight = styled.aside`
  flex: 1;
  justify-content: center;
  align-items: flex-end;
`;

export const LegendContainer = styled.ul`
  list-style: none;
`;

export const Legend = styled.li`
  align-items: center;
  display: flex;
  margin-bottom: 10px;
  font-size: 14px;

  > div {
    align-items: center;
    border-radius: 4px;
    font-weight: 700;
    font-size: 12px;
    display: flex;
    height: 45px;
    justify-content: center;
    margin-right: 10px;
    width: 45px;

    &.recurrent {
      background-color: ${props => props.theme.colors.danger }
    }
    &.eventual {
      background-color: ${props => props.theme.colors.warning }
    }
  }
`;
