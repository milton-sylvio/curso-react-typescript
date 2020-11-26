import styled from 'styled-components';

export const Container = styled.header`
  align-items: center;
  background-color: ${ props => props.theme.header };
  box-shadow: 0 5px 4px rgba(0, 0, 0, 0.05);
  display: flex;
  grid-area: MH;
  justify-content: space-between;
  padding: 0 15px;
  `;

export const Profile = styled.div`
  align-items: center;
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