import React, {FC} from 'react';
import cx from 'classnames';

import sad from '../../../assets/sad.png';
import funny from '../../../assets/black-glass.png';
import cowboy from '../../../assets/cowboy.png';
import cross from '../../../assets/cross.svg';

interface PopupProps {
  result: number,
  countQuestions: number,
  changeVisible: () => void;
  isActive: boolean;
};

export const Popup: FC<PopupProps> = ({result, countQuestions, changeVisible, isActive}) => {
  const percent = Math.round(result / countQuestions * 100);

  const renderEmoji = (percent: number): React.ReactNode => {
    if (percent < 33) {
      return <img className="popup__img" src={sad} alt="sad emoji" />;
    } else if (percent < 66) {
      return <img className="popup__img" src={cowboy} alt="cowboy"/>;
    } else {
      return <img className="popup__img" src={funny} alt="funny emoji" />;
    }
  };

  return (
    <div className={cx("darkSide", {
      "darkSide_active": isActive
      })}>
      <section className="popup">
        <div className="popup__top">
          <img 
            width="20" 
            src={cross}
            alt="close"
            className="popup__close"
            onClick={changeVisible} />
        </div>
        {renderEmoji(percent)}
        <p className="popup__desc">Вы правильно ответили на {result} вопросов из {countQuestions}</p>
      </section>
    </div>
  );
};