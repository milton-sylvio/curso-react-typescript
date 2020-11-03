import styled from 'styled-components';

export const Container = styled.main``;

export const Content = styled.ul`
  list-style: none;
`;

export const Filters = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 25px;

  .tag-filter {
    font-size: 16px;
    font-weight: 700;
    background: none;
    color: ${ props => props.theme.colors.white };
    margin: 0 10px;
    opacity: .7;
    transition: all .3s;
    
    &:after {
      content: '';
      display: block;
      background-color: ${ props => props.theme.colors.white };
      height: 5px;
      width: 55px;
      transition: width .3s;
    }

    &.tag-filter-success:after {
      background-color: ${ props => props.theme.colors.success };
    }

    &.tag-filter-warning:after {
      background-color: ${ props => props.theme.colors.warning };
    }

    &:hover {
      opacity: .5;

      &:after {
        width: 100%;
      }
    }

    &.tag-filter-active {
      opacity: 1;

      &:after {
        width: 100%;
      }
    }
  }
`;