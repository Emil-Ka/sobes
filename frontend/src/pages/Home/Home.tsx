import React, {FC} from 'react';

import {Header, Container, Footer} from '../../components';

export const Home: FC = () => {
  return (
    <div className="homePage">
      <Header/>
      <div className="homePage__content">
        <Container>
          <h1 className="homePage__title">Собес - это новый сервис для прохождения собеседований</h1>
          <div className="homePage__promo">
            <p>Пройди тестирования и определи, готов ли ты к настоящему собеседованию</p>
          </div>
        </Container>
      </div>
      <div className="homePage__footer">
        <Footer/>
      </div>
    </div>
  );
};