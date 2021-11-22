import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getProjects } from '../../../redux/projects/projectOperations';
import { routes } from '../../../routes/routes';
import SpintBtAddProject from '../SpintBtAddProject/SpintBtAddProject';
import SprintBtBack from '../SprintBtBack/SprintBtBack';

import s from './SprintPageProject.module.scss';

const SprintPageProject = ({ projects }) => {
  const dispatch = useDispatch();
  const { projectId } = useParams();

  useEffect(() => {
    if (!projects?.length) dispatch(getProjects());
  }, [dispatch, projects?.length]);

  return (
    <div className={s.sprintProjectConteiner}>
      <SprintBtBack />
      <ul className={s.sprintListProject}>
        {projects?.length &&
          projects.map(project => (
            <li
              key={project._id}
              className={`${project._id === projectId && s.active}  ${
                s.projectItem
              }`}
            >
              <Link
                to={`${routes.projects}/${project._id}/sprints`}
                className={s.projectLink}
              >
                <span className={s.title}>{project.title}</span>
              </Link>
            </li>
          ))}
      </ul>
      <div>
        <SpintBtAddProject />
      </div>
    </div>
  );
};

export default SprintPageProject;
