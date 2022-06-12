import React, {FC} from 'react';

import {RadioButton} from '../index';

export const TestItem: FC = () => {
  return (
    <div className="testItem">
      <h2 className="testItem__question">1. Где правильно передена функция в качестве свойства?</h2>
      <ul className="testItem__list">
        <li className="testItem__item">
          <RadioButton labelText="argument=(someFunction)"/>
        </li>
        <li className="testItem__item">
          <RadioButton labelText="argument=(someFunction)"/>
        </li>
        <li className="testItem__item">
          <RadioButton labelText="argument=(someFunction)"/>
        </li>
        <li className="testItem__item">
          <RadioButton labelText="argument=(someFunction)"/>
        </li>
      </ul>
    </div>
  );
};