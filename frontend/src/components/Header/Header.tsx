import React, {FC} from 'react';
import {NavLink} from 'react-router-dom';

import {Container} from '../Container';

import logo from '../../../assets/logo.svg';

export const Header: FC = () => {
  return (
    <header className="header">
      <Container>
        <div className="header__content">
          <img className="header__logo" src={logo} alt="logo" />
          <NavLink className="header__link" to='/tests'>Тесты</NavLink>
        </div>
      </Container>
    </header>
  );
};