import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.section`
  align-items: center;
  background-color: ${ props => props.theme.colors.secondary };
  border-bottom: 1px solid ${ props => lighten(0.2, props.theme.colors.secondary) };
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