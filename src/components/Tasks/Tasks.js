import { useDispatch, useSelector } from 'react-redux';
import TaskItem from './TaskItem/TaskItem';
import { useEffect, useState } from 'react';
import { fetchTasks } from '../../redux/tasks/tasks-operations';
import AddTaskForm from './AddTaskForm/AddTaskForm';
import IconBtn from '../IconBtn/IconBtn';
import { routes } from '../../routes/routes';
import {
  getFilterTasksSelector,
  getLoadingSelector,
  getTasksSelector,
} from '../../redux/tasks/tasks-selectors';
import Modal from '../Modal/Modal';
import SprintTitle from './SprintTitle/SprintTitle';
import Chart from './Chart/Chart';
import { useHistory, useParams } from 'react-router';
import SprintPagination from './SprintPagination/SprintPagination';
import SideBar from './SideBar/SideBar';
import TableHeader from './TableHeader/TableHeader';
import sprintOperations from '../../redux/sprint/sprin-operations';
import LoaderSpinner from '../LoaderSpinner/LoaderSpinner';
import s from './Tasks.module.scss';
import BackToSprintsBtn from './SideBar/BackToSprintsBtn/BackToSprintsBtn';
import FindForm from './FindForm/FindForm';
import { getCurrentLanguage } from '../../redux/userSettings/userSettingsSelectors';

const Tasks = () => {
  const tasks = useSelector(getTasksSelector);
  const isLoadingTasks = useSelector(getLoadingSelector);
  const filteredTasks = useSelector(getFilterTasksSelector);
  const sprints = useSelector(state => state.sprints.items);
  const curLanguage = useSelector(getCurrentLanguage);

  const { sprintId, projectId } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();

  const [openModal, setOpenModal] = useState(false);
  const [showChart, setShowChart] = useState(false);

  useEffect(() => {
    dispatch(sprintOperations.getSprint(projectId));
    dispatch(fetchTasks(sprintId)).then(data => {
      if (data.error && data.payload !== 'No tasks found') {
        history.push(`${routes.projects}/${projectId}/sprints`);
      }
    });
  }, [sprintId, projectId]);

  const toggleChart = () => {
    if (tasks.length > 2) {
      setShowChart(prev => !prev);
    }
  };

  const toggleModal = () => {
    setOpenModal(prev => !prev);
  };

  return (
    <div className={s.tasksSection}>
      <SideBar sprints={sprints} />
      <div className={s.tasksContainer}>
        <div className={s.backToSprints}>
          <BackToSprintsBtn />
        </div>
        <div>
          <div className={s.relative}>
            <div>
              <div className={s.dayFindContainer}>
                {tasks.length > 0 && <SprintPagination tasks={tasks} />}
                <div className={s.findForm}>
                  <FindForm className={s.findForm} />
                </div>
              </div>

              <div>
                <SprintTitle sprints={sprints} sprintId={sprintId} />
              </div>
            </div>
            <div className={s.addTask}>
              <IconBtn onClick={toggleModal} icon="add" main />
              <span className={s.addTaskText}>
                {curLanguage.tasks.pageAddBtn}
              </span>
            </div>
          </div>
          <TableHeader />
          <div className={s.scrollBar}>
            {isLoadingTasks ? (
              <LoaderSpinner />
            ) : tasks.length !== 0 ? (
              <ul className={s.tasksList}>
                {filteredTasks.map(task => (
                  <TaskItem task={task} key={task.id || task._id} />
                ))}
              </ul>
            ) : (
              <h2 className={s.titleNoTask}>{curLanguage.tasks.message}</h2>
            )}
            {!showChart ? (
              tasks.length > 2 && (
                <div className={s.chartBtn}>
                  <IconBtn icon="chart" main onClick={toggleChart} />
                </div>
              )
            ) : (
              <Modal closeModal={toggleChart} chart>
                <Chart tasks={tasks} />
              </Modal>
            )}
          </div>
        </div>

        {openModal && (
          <Modal closeModal={toggleModal}>
            <AddTaskForm toggleModal={toggleModal} sprintId={sprintId} />
          </Modal>
        )}
      </div>
    </div>
  );
};

export default Tasks;
