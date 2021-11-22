import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  getIsLoading,
  getProjectsList,
} from '../../redux/projects/projectSelectors';
import { getProjects } from '../../redux/projects/projectOperations';
import ProjectItem from '../ProjectItem/ProjectItem';
import IconBtn from '../IconBtn/IconBtn.jsx';
import Modal from '../Modal/Modal';
import LoaderSpinner from '../LoaderSpinner/LoaderSpinner.jsx';
import s from '../Projects/Projects.module.scss';
import AddProjectsForm from '../AddProjectsForm/AddProjectsForm';
import { getCurrentLanguage } from '../../redux/userSettings/userSettingsSelectors';

const Projects = () => {
  const dispatch = useDispatch();
  const projects = useSelector(getProjectsList);
  const isLoading = useSelector(getIsLoading);
  const curLanguage = useSelector(getCurrentLanguage);

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (projects.length > 0) {
      return;
    }
    dispatch(getProjects());
  }, [dispatch]); /* eslint-disable-line*/

  const toggleModal = () => {
    setShowModal(prevState => !prevState);
  };

  return (
    <>
      <div className={s.projectsContainer}>
        <div className={s.projectsHeader}>
          <h1 className={s.title}>{curLanguage.projects.pageTitle}</h1>
          <label className={s.labeladdBtn}>
            <IconBtn onClick={toggleModal} icon="add" className={s.addBtn} />
            <span className={s.textAddBtn}>
              {curLanguage.projects.pageAddBtn}
            </span>
          </label>
        </div>

        {isLoading && <LoaderSpinner />}

        {projects.length === 0 && (
          <h2 className={s.message}>{curLanguage.projects.message}</h2>
        )}
        <ul className={s.list}>
          {projects.length > 0 &&
            projects.map(({ title, _id, description }) => (
              <ProjectItem
                key={_id}
                id={_id}
                title={title}
                description={description}
                onDeleteContact={() => {}}
              />
            ))}
        </ul>
      </div>
      {showModal && (
        <Modal closeModal={toggleModal}>
          <AddProjectsForm closeModal={toggleModal} />
        </Modal>
      )}
    </>
  );
};

export default Projects;
