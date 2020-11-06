import styled from 'styled-components';

export const Container = styled.div`
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
`;

export const SideLeft = styled.aside``;

export const SideRight = styled.aside``;

export const LegendContainer = styled.ul`
  list-style: none;
  position: absolute;
  bottom: 20px;
`;

export const Legend = styled.li`
  align-items: center;
  display: flex;
  /* font-size: 16px; */
  margin-bottom: 10px;

  > div {
    align-items: center;
    border-radius: 4px;
    font-weight: 700;
    display: flex;
    height: 45px;
    justify-content: center;
    margin-right: 10px;
    width: 45px;

    &.legend-info {
      background-color: ${props => props.theme.colors.info }
    }
    &.legend-warning {
      background-color: ${props => props.theme.colors.warning }
    }
  }
`;
