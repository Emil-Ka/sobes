import React, {FC} from 'react';

import {Header, Footer, Container, RadioButton, TestItem} from '../../components';

export const Test: FC = () => {
  return (
    <div className="testPage">
      <Header link="Все тесты" path="/"/>
      <div className="testPage__content">
        <Container>
          <h1 className="testPage__title">Тест "React Junior"</h1>
          <section className="testPage__items">
            <TestItem/>
          </section>
        </Container>
      </div>
      <Footer/>
    </div>
  );
};