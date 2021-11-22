import { Link, useRouteMatch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteProjects } from '../../redux/projects/projectOperations';
import Svg from '../Svg/Svg';
import s from '../ProjectItem/ProjectItem.module.scss';

const ProjectItem = ({ title, id, description }) => {
  const { path } = useRouteMatch();
  const dispatch = useDispatch();
  return (
    <li className={s.item}>
      <Link to={`${path}/${id}/sprints`} className={s.link}>
        <div className={s.itemWrapper}>
          <h2 className={s.projectTitle}>{title}</h2>
          <p className={s.projectDescription}>{description}</p>
        </div>
      </Link>
      <button
        className={s.itemDeleteBtn}
        type="button"
        onClick={() => dispatch(deleteProjects(id))}
      >
        <Svg icon="#icon-bin" className={s.deleteIcon} />
      </button>
    </li>
  );
};

export default ProjectItem;
