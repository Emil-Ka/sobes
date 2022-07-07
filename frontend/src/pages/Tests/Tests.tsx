import React, {FC, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {fetchTests} from '../../redux/slices/testsSlice';
import {useTypedSelector} from '../../hooks';

import {Header, Container, Footer, TestCover} from '../../components';

export const Tests: FC = () => {
  const dispatch = useDispatch();
  const {tests} = useSelector(state => state.tests);
  const API_URL = '/api/test/';

  useEffect(() => {
    dispatch<any>(fetchTests(API_URL));
  }, []);

  return (
    <div className="testsPage">
      <Header link="Главная" path="/"/>
      <div className="testsPage__content">
        <Container>
          <h1 className="testsPage__title">Тесты</h1>
          <section className="testsPage__tests">
            {
              tests.map((item, index) => (
                <TestCover 
                  key={index}
                  link={item.id}
                  title={item.test_name} 
                  count={item.content.questions.length} 
                  time={item.time} 
                  level={item.level}/>
              ))
            }
          </section>
        </Container>
      </div>
      <Footer/>
    </div>
  );
};