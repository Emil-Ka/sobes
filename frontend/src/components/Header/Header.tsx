import React, {FC} from 'react';
import {NavLink} from 'react-router-dom';

import {Container} from '../Container';

import logo from '../../../assets/logo.svg';

interface HeaderProps {
  link: string,
  path: string
}

export const Header: FC<HeaderProps> = ({link, path}) => {
  return (
    <header className="header">
      <Container>
        <div className="header__content">
          <img className="header__logo" src={logo} alt="logo" />
          <NavLink className="header__link" to={path}>{link}</NavLink>
        </div>
      </Container>
    </header>
  );
};