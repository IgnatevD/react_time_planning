import { useEffect, useMemo } from 'react';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentDayIndexSelector } from '../../../redux/tasks/tasks-selectors';
import { changeIndexCurrentDay } from '../../../redux/tasks/tasks-actions';
import s from './SprintPagination.module.scss';
import Svg from '../../Svg/Svg';

const SprintPagination = ({ tasks }) => {
  const currentDayIndex = useSelector(getCurrentDayIndexSelector);
  const dispatch = useDispatch();

  const taskTitles = useMemo(
    () => tasks.map(task => task.title).join(),
    [tasks],
  );

  const duration = tasks[0].hoursWastedPerDay.length;

  const findCurrentDay = () => {
    const currentDay = moment().format('YYYY-MM-DD');
    const day = tasks[0].hoursWastedPerDay.findIndex(
      day => day.currentDay === currentDay,
    );
    if (day >= 0) return day;
    return duration - 1;
  };

  const currentDate =
    currentDayIndex && tasks[0].hoursWastedPerDay[currentDayIndex - 1]
      ? tasks[0].hoursWastedPerDay[currentDayIndex - 1].currentDay
      : '';

  useEffect(() => {
    dispatch(changeIndexCurrentDay(findCurrentDay() + 1));
  }, [taskTitles]);

  const onChangeNext = e => {
    e.preventDefault();
    if (currentDayIndex >= duration) return;
    dispatch(changeIndexCurrentDay(currentDayIndex + 1));
  };
  const onChangePrev = e => {
    e.preventDefault();
    if (currentDayIndex <= 1) return;
    dispatch(changeIndexCurrentDay(currentDayIndex - 1));
  };

  return (
    <div className={s.paginationContainer}>
      <div className={s.paginationWrapper}>
        <button onClick={onChangePrev} type="button" className={s.arrowBtn}>
          <Svg icon="#icon-arrow_back" className={s.icon} />
        </button>
        <p className={s.paginationText}>
          <span className={s.currentPage}>{currentDayIndex} </span> /
          <span className={s.lastPage}>{duration} </span>
        </p>
        <button onClick={onChangeNext} type="button" className={s.arrowBtn}>
          <Svg icon="#icon-arrow_forward" className={s.icon} />
        </button>
      </div>

      <p className={s.currentDay}>{currentDate}</p>
    </div>
  );
};

export default SprintPagination;
