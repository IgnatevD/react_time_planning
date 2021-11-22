import s from './TaskItem.module.scss';
import IconBtn from '../../IconBtn/IconBtn';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTask, editTask } from '../../../redux/tasks/tasks-operations';
import { getCurrentDayIndexSelector } from '../../../redux/tasks/tasks-selectors';
import { getCurrentLanguage } from '../../../redux/userSettings/userSettingsSelectors';

const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8];

const TaskItem = ({ task }) => {
  const currentDayIndex = useSelector(getCurrentDayIndexSelector);
  const dispatch = useDispatch();
  const curLanguage = useSelector(getCurrentLanguage);

  const onSubmit = e => {
    e.preventDefault();

    const { value } = e.target;
    if (e.target.value > 0) {
      dispatch(
        editTask({
          date:
            currentDayIndex &&
            task.hoursWastedPerDay &&
            task.hoursWastedPerDay[currentDayIndex - 1]
              ? task.hoursWastedPerDay[currentDayIndex - 1].currentDay
              : '',
          hours: value,
          id: task.id,
        }),
      );
    }
  };

  return (
    <li className={s.taskWrapper}>
      <div className={s.taskCard}>
        <div className={s.taskTitle}>
          <span>{task.title}</span>
        </div>
        <div className={s.taskItem}>
          <span className={s.taskItemDesc}>{curLanguage.tasks.th222}</span>
          <span>{task.hoursPlanned}</span>
        </div>
        <div className={s.taskItem}>
          <span className={s.taskItemDesc}>{curLanguage.tasks.th333}</span>
          <span className={s.selectBox}>
            <select
              id="puttedNum"
              onChange={onSubmit}
              value={
                currentDayIndex &&
                task.hoursWastedPerDay &&
                task.hoursWastedPerDay[currentDayIndex - 1]
                  ? task.hoursWastedPerDay[currentDayIndex - 1]
                      .singleHoursWasted
                  : ''
              }
            >
              {arr.map(num => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </select>
          </span>
        </div>
        <div className={s.taskItem}>
          <span className={s.taskItemDesc}>{curLanguage.tasks.th444}</span>
          <span>{task.hoursWasted}</span>
        </div>
        <div className={s.removeBtn}>
          <IconBtn
            icon="bin"
            secondary
            onClick={() => dispatch(deleteTask(task.id || task._id))}
          />
        </div>
      </div>
    </li>
  );
};

export default TaskItem;

//<form onSubmit={e => e.preventDefault()} className={s.taskItemForm}></form>
//  <input
//    className={s.taskItemInp}
//    type="number"
//    name="hours"
//    value={
//      currentDayIndex &&
//      task.hoursWastedPerDay &&
//      task.hoursWastedPerDay[currentDayIndex - 1]
//        ? task.hoursWastedPerDay[currentDayIndex - 1].singleHoursWasted
//        : ''
//    }
//    min="0"
//    max="8"
//    onChange={onChange}
//   </form>
//  />;
