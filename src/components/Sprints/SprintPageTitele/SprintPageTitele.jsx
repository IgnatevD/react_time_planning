import { useEffect, useState } from 'react';
import IconBtn from '../../IconBtn/IconBtn';
import FormEditTitel from '../FormEditTitel/FormEditTitel';
import SpintBtAddSprint from '../SpintBtAddSprint/SpintBtAddSprint';
import s from './SprintPageTitele.module.scss';

const SprintPageTitele = ({ nowProject, projectId }) => {
  const [isInputOpen, setInputOpen] = useState(false);
  const toggleInput = () => setInputOpen(state => !state);

  useEffect(() => {
    setInputOpen(false);
  }, [projectId, nowProject.title]);

  return (
    <div className={s.btnConteinerTitel}>
      <div className={s.conteinerTitelandBtn}>
        <div className={s.btnConteiner}>
          {!isInputOpen && (
            <>
              <h1 className={s.title}>{nowProject.title}</h1>
              <IconBtn icon={'pencil'} secondary onClick={toggleInput} />
            </>
          )}

          {isInputOpen && (
            <FormEditTitel
              nowProject={nowProject}
              toggleInput={toggleInput}
              projectId={projectId}
            />
          )}
        </div>

        <div className={s.btnDispleyNone}>
          <SpintBtAddSprint />
        </div>
      </div>

      <p className={s.btnDescription}>{nowProject.description}</p>
    </div>
  );
};
export default SprintPageTitele;
