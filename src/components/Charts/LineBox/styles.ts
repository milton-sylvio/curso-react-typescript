import styled from 'styled-components';
import Card from '../../Card/styles';

export const Container = styled(Card)`
  height: 350px;
  align-content: space-between;
  flex-direction: column;
`;

export const Header = styled.header`
  margin-bottom: 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Legends = styled.ul`
  list-style: none;
`;
export const LegendItem = styled.li`
  display: inline;
  margin-left: 15px;
  position: relative;

  &:before {
    background-color: #fff;
    border-radius: 12px;
    content: '';
    display: inline-block;
    margin-right: 8px;
    height: 12px;
    width: 12px;
  }

  &.entry:before  {
    background-color: ${ props => props.theme.colors.info };
  }
  &.output:before  {
    background-color: ${ props => props.theme.colors.success };
  }
`;
