import s from './SideBar.module.scss';
import Svg from '../../Svg/Svg';
import { routes } from '../../../routes/routes';
import { Link, useParams } from 'react-router-dom';
import { useState } from 'react';
import IconBtn from '../../IconBtn/IconBtn';
import Modal from '../../Modal/Modal';
import FormAddSprint from '../../Sprints/FormAddSprint/FormAddSprint';
import BackToSprintsBtn from './BackToSprintsBtn/BackToSprintsBtn';
import { useSelector } from 'react-redux';
import { getCurrentLanguage } from '../../../redux/userSettings/userSettingsSelectors';

const SideBar = ({ sprints }) => {
  const { projectId, sprintId } = useParams();
  const [openModal, setOpenModal] = useState(false);
  const curLanguage = useSelector(getCurrentLanguage);

  const toggleModal = () => {
    setOpenModal(prev => !prev);
  };

  return (
    <>
      <div className={s.sprintsConteiner}>
        <BackToSprintsBtn />
        <ul className={s.sprintsList}>
          {sprints?.length &&
            sprints.map(sprint => (
              <li
                key={sprint._id}
                className={`${sprint._id === sprintId && s.active}  ${
                  s.sprintItem
                }`}
              >
                <Link
                  to={`${routes.projects}/${projectId}/sprints/${sprint._id}`}
                  className={s.sprintLink}
                >
                  <span className={s.title}>{sprint.title}</span>
                </Link>
              </li>
            ))}
        </ul>
        <div className={s.conteinerBtnAddProj}>
          <IconBtn
            icon={'add'}
            className={s.btnProjAdd}
            onClick={toggleModal}
          />
          <span className={s.btnSprintAddText}>
            {curLanguage.tasks.sideBar.btnDesc}
          </span>
        </div>
      </div>
      {openModal && (
        <Modal closeModal={toggleModal}>
          <FormAddSprint toggleModal={toggleModal} />
        </Modal>
      )}
    </>
  );
};

export default SideBar;
