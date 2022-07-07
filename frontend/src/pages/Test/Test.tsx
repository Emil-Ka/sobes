import React, {FC, useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';

import {fetchTests} from '../../redux/slices/testsSlice';
import {useTypedSelector} from '../../hooks';

import {Header, Footer, Container, RadioButton, TestItem, Popup} from '../../components';

interface IAnswers {
  [key: string]: number;
};

export const Test: FC = () => {
  const dispatch = useDispatch();
  const {tests} = useSelector(state => state.tests);

  const {id} = useParams();
  const [visiblePopup, setVisiblePopup] = useState<boolean>(false);
  const [result, setResult] = useState<number>(0);
  const [answers, setAnswers] = useState<IAnswers>({});

  const API_URL = '/api/test/';
  const test = tests.filter(item => item.id.toString() === id)[0];
  const countQuestions = test.content.questions.length;

  useEffect(() => {
    dispatch<any>(fetchTests(API_URL));
  }, []);

  useEffect(() => {
    setAnswers({});
    test.content.questions.map((item) => {
      setAnswers(prev => (
        {...prev, [item.question]: 0}
      ));
    });
  }, [tests]);

  useEffect(() => {
    calcResult();
  }, [answers]);

  const changeAnswer = (key: string, value: string) => {
    if (value === 'true') {
      setAnswers(prev => (
        {...prev, [key]: 1}
      ));
    } else {
      setAnswers(prev => (
        {...prev, [key]: 0}
      ));
    }
  };

  const calcResult = () => {
    setResult(0);
    Object.keys(answers).map((key) => {
      setResult(prev => prev += answers[key]);
    });
  };

  const changeVisible = () => {
    calcResult();
    setVisiblePopup(prev => !prev);
  };

  return (
    <>
      <div className="testPage">
        <Header link="Все тесты" path="/tests"/>
        <div className="testPage__content">
          <Container>
            <h1 className="testPage__title">Тест "{test.test_name}"</h1>
            <section className="testPage__items">
              {
                test.content.questions.map((item) => (
                  <TestItem 
                    changeAnswer={changeAnswer}
                    key={item.id}
                    number={item.id} 
                    type={item.type}
                    options={item.options} 
                    question={item.question}/>
                ))
              }
            </section>
            <button onClick={changeVisible} className="testPage__btn">Узнать результат</button>
          </Container>
        </div>
        <Footer/>
      </div>
      <Popup 
        changeVisible={changeVisible} 
        result={result} 
        countQuestions={countQuestions}
        isActive={visiblePopup}/>
    </>
  );
};