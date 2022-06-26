import React, {FC} from 'react';

import {RadioButton} from '../index';

interface TestItemProps {
  number: number;
  type: 'checkbox' | 'radio';
  options: {
    [key: string]: boolean;
  };
  question: string;
  changeAnswer: (key: string, value: string) => void;
};

export const TestItem: FC<TestItemProps> = ({number, type, options, question, changeAnswer}) => {
  const onChangeAnswer = (event: React.ChangeEvent<HTMLInputElement>) => {
    changeAnswer(event.target.name, event.target.value);
  };

  return (
    <div className="testItem">
      <h2 className="testItem__question">{number}. {question}</h2>
      <ul className="testItem__list">
        {
          Object.keys(options).map(key => (
            <li key={key} className="testItem__item">
              <RadioButton
                onChange={onChangeAnswer}
                labelText={key} 
                name={question} 
                value={options[key].toString()}/>
            </li>
          ))
        }
      </ul>
    </div>
  );
};