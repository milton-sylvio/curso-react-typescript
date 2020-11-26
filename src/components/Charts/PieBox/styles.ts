import styled from 'styled-components';
import Card from '../../UI/Card/styles';

export const Container = styled(Card)`
  height: 260px;
  justify-content: space-between;
  width: 48%;

  aside {
    display: flex;
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
`;

export const LegendContainer = styled.ul`
  list-style: none;
`;

export const Legend = styled.li`
  align-items: center;
  display: flex;
  margin-bottom: 10px;

  > div {
    align-items: center;
    border-radius: 4px;
    font-weight: 700;
    color: ${ props => props.theme.general.colors.white };
    font-size: 12px;
    display: flex;
    height: 45px;
    justify-content: center;
    margin-right: 10px;
    width: 45px;

    &.entry {
      background-color: ${ props => props.theme.general.colors.success }
    }
    &.output {
      background-color: ${ props => props.theme.general.colors.primary };
    }
  }
`;
