import React, {FC} from 'react';

import cover from '../../../assets/react-cover.jpg';

interface TestCoverProps {
  title: string;
  count: number;
  level: string;
  time: number;
};

enum TitleConstants {
  REACT_JUNIOR = 'React Junior'
};

export const TestCover: FC<TestCoverProps> = ({title, count, level, time}) => {
  return (
    <div className="testCover">
      {
        title === TitleConstants.REACT_JUNIOR ? 
        <img className="testCover__img" src={cover} alt="cover" /> : 
        null
      }
      <h2 className="testCover__title">{title}</h2>
      <p className="testCover__count">Количество вопросов: {count}</p>
      <p className="testCover__level">Уровень сложности: {level}</p>
      <p className="testCover__time">Среднее время прохождения: {time} мин</p>
    </div>
  );
};