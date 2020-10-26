import styled from 'styled-components';

export const Container = styled.section`
  align-items: center;
  background-color: ${ props => props.theme.colors.secondary };
  border-bottom: 1px solid ${ props => props.theme.colors.gray };
  display: flex;
  grid-area: MH;
  justify-content: space-between;
  padding: 0 15px;
  `;

export const Profile = styled.div`
  align-items: center;
  color: ${ props => props.theme.colors.white };
  display: flex;
  padding: 0 15px;
`;

export const Welcome = styled.h3``;

export const UserName = styled.span`
  display: block;
  font-weight: 400;
`;

export const Emojis = styled.span`
  font-size: 32px;
  padding-right: 10px;
`;