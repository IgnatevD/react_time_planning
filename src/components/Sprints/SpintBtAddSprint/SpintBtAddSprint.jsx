import React, { useState } from 'react';
import IconBtn from '../../IconBtn/IconBtn';
import Modal from '../../Modal';
import s from './SpintBtAddSprint.module.scss';
import FormAddSprint from '../FormAddSprint/FormAddSprint';
import { useSelector } from 'react-redux';
import { getCurrentLanguage } from '../../../redux/userSettings/userSettingsSelectors';

const SpintBtAddSprint = ({ projectId }) => {
  const [showModal, setShowModal] = useState(false);
  const curLanguage = useSelector(getCurrentLanguage);
  const toggleModal = () => {
    setShowModal(state => !state);
  };

  return (
    <>
      <div className={s.conteinerBtnAddSrint} onClick={toggleModal}>
        <IconBtn icon={'add'} className={s.btnSprintAdd} />

        <span className={s.btnSprintAddText}>
          {curLanguage.sprints.pageAddBtn}
        </span>
      </div>

      {showModal && (
        <Modal closeModal={toggleModal}>
          <FormAddSprint toggleModal={toggleModal} />
        </Modal>
      )}
    </>
  );
};

export default SpintBtAddSprint;
