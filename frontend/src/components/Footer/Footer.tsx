import React, {FC} from 'react';
import {NavLink} from 'react-router-dom';

import {Container} from '../Container'

import logo from '../../../assets/logo.svg';
import tg from '../../../assets/tg.svg';
import vk from '../../../assets/vk.svg';

export const Footer: FC = () => {
  return (
    <footer className="footer">
      <Container>
        <div className="footer__content">
          <div className="footer__menu">
            <img height={40} src={logo} alt="logo" />
            <ul className="footer__list">
              <li className="footer__item">
                <NavLink className="footer__link" to='/'>Главная</NavLink>
              </li>
              <li className="footer__item">
                <NavLink className="footer__link" to='tests'>Тесты</NavLink>
              </li>
              <li className="footer__item">
                <a className="footer__link" href='https://github.com/Emil-Ka/sobes/tree/dev'>Проект</a>
              </li>
            </ul>
          </div>
          <div className="footer__links">
            <div>
              <a href="https://t.me/em_kaaa">
                <img src={tg} alt="telegram" />
              </a>
              <a href="https://vk.com">
                <img src={vk} alt="vk" />
              </a>
            </div>
            <p className="footer__copyright">Собес © 2022</p>
          </div>
        </div>
      </Container>
    </footer>
  );
};