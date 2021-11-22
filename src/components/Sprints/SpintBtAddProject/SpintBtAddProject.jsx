import { useState } from 'react';
import { useSelector } from 'react-redux';
import { getCurrentLanguage } from '../../../redux/userSettings/userSettingsSelectors';
import AddProjectsForm from '../../AddProjectsForm/AddProjectsForm';
import IconBtn from '../../IconBtn/IconBtn';
import Modal from '../../Modal';
import s from './SpintBtAddProject.module.scss';

const SpintBtAddProject = () => {
  const curLanguage = useSelector(getCurrentLanguage);
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    setShowModal(state => !state);
  };

  return (
    <>
      <div className={s.conteinerBtnAddProj}>
        <IconBtn icon={'add'} className={s.btnProjAdd} onClick={toggleModal} />
        <span className={s.btnSprintAddText}>
          {curLanguage.sprints.sideBar.btnDesc}
        </span>
      </div>
      {showModal && (
        <Modal closeModal={toggleModal}>
          <AddProjectsForm closeModal={toggleModal} />
        </Modal>
      )}
    </>
  );
};

export default SpintBtAddProject;
