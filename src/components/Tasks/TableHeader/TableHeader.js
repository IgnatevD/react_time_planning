import { useState } from 'react';
import { useSelector } from 'react-redux';
import { getCurrentLanguage } from '../../../redux/userSettings/userSettingsSelectors';
import FindForm from '../FindForm/FindForm';
import sprite from '../sprite.svg';
import s from './TableHeader.module.scss';

const TableHeader = () => {
  const [openFindInp, setOpenFindInp] = useState(false);
  const curLanguage = useSelector(getCurrentLanguage);

  const toggleFindInput = () => {
    setOpenFindInp(prev => !prev);
  };

  return (
    <div className={s.tableWrapper}>
      <ul className={s.tableHeaderList}>
        <li className={s.tableHeaderItem}>{curLanguage.tasks.th1}</li>
        <li className={s.tableHeaderItem}>
          {curLanguage.tasks.th21}
          <br />
          {curLanguage.tasks.th22}
        </li>
        <li className={s.tableHeaderItem}>
          {curLanguage.tasks.th31}
          <br />
          {curLanguage.tasks.th32}
        </li>
        <li className={s.tableHeaderItem}>
          {curLanguage.tasks.th41}
          <br />
          {curLanguage.tasks.th42}
        </li>
        <li>
          {!openFindInp ? (
            <button
              type="button"
              onClick={toggleFindInput}
              className={s.findFormBtn}
            >
              <svg>
                <use href={sprite + '#icon-find'} width="20px" height="20px" />
              </svg>
            </button>
          ) : (
            <div className={s.findFormTable}>
              {' '}
              <FindForm toggleFindInput={toggleFindInput} />
            </div>
          )}
        </li>
      </ul>
    </div>
  );
};

export default TableHeader;
