import { Home, Notifications, Email, FavoriteBorder, Person, ExitToApp, Rocketseat } from '../../styles/Icons'

import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: none;

  @media (min-width: 500px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    position: sticky;
    top: 0;
    left: 0;

    padding: 9px 19px 20px;

    max-height: 100vh;
    overflow-y: auto;
  }
`;

export const TopSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1280px) {
    align-items: flex-start;
  }
`;

export const Logo = styled(Rocketseat)`
  height: 41px;
  width: 41px;

  > path {
    fill: var(--twitter);
  }

  margin-bottom: 20px;
`;

export const MenuButton = styled.button`
  display: flex;
  align-items: center;
  flex-shrink: 0;

  > span {
    display: none;
  }

  @media (min-width: 1280px) {
    > span {
      display: inline;
      margin-left: 19px;

      font-weight: bold;
      font-size: 19px;
    }

    padding-right: 15px;
  }

  padding: 8.25px 0;
  outline: 0;

  & + button {
    margin-top: 16.5px;
  }

  & + button:last-child{
    margin-top: 33px;

    height: 40px;
    width: 40px;

    > span {
      display: none;
    }

    @media (min-width: 1280px) {
      width: 100%;
      height: unset;

      > span {
        display: inline;
      }
    }
  }

  cursor: pointer;
  border-radius: 25px;

  &:hover {
    background: var(--twitter-dark-hover);
  }

  &:hover,
  &.active {
    span,
    svg {
      color: var(--twitter);
      fill: var(--twitter);
    }
  }
`;

const IconCSS = css`
  flex-shrink: 0;

  height: 30px;
  width: 30px;

  color: var(--white);
`;

export const HomeIcon = styled(Home)`${IconCSS}`;
export const BellIcon = styled(Notifications)`${IconCSS}`;
export const EmailIcon = styled(Email)`${IconCSS}`;
export const FavoriteIcon = styled(FavoriteBorder)`${IconCSS}`;
export const ProfileIcon = styled(Person)`${IconCSS}`;
