import { useEffect, useState } from 'react';

import IconBtn from '../../IconBtn/IconBtn';

import { useParams } from 'react-router';
import s from './SprintTitle.module.scss';

import SprintTitleInput from './SprintTitleInput';

const SprintTitle = ({ sprints }) => {
  const { sprintId } = useParams();

  const [title, setTitle] = useState('');
  const [openTitleInp, setOpenTitleInp] = useState(false);

  const currentSprint = sprints
    ? sprints.find(sprint => sprint._id === sprintId)
    : '';

  const currentSprintTitle = currentSprint ? currentSprint.title : '';

  useEffect(() => {
    setTitle(currentSprintTitle);
    setOpenTitleInp(false);
  }, [currentSprintTitle]);

  const toggleInputTitle = () => {
    setOpenTitleInp(prev => !prev);
  };

  return (
    <div className={s.titleBox}>
      {!openTitleInp ? (
        <div className={s.sprintTitleWrapper}>
          <h2 className={s.sprintTitle}>{title}</h2>
          <IconBtn onClick={toggleInputTitle} icon="pencil" secondary />
        </div>
      ) : (
        <SprintTitleInput
          title={title}
          toggleInputTitle={toggleInputTitle}
          sprintId={sprintId}
        />
      )}
    </div>
  );
};

export default SprintTitle;
