import React from 'react';
import Container from '../../components/Container/Container';
import SpintBtPeople from '../../components/Sprints/SpintBtPeople/SpintBtPeople';
import SprintPageTitele from '../../components/Sprints/SprintPageTitele/SprintPageTitele';
import SprintBtBack from '../../components/Sprints/SprintBtBack/SprintBtBack';
import SprintCard from '../../components/Sprints/SprintCard/SprintCard';
import SpintBtAddSprint from '../../components/Sprints/SpintBtAddSprint/SpintBtAddSprint';
import SprintPageProject from '../../components/Sprints/SprintPageProject/SprintPageProject';
import s from './SprintsPage.module.scss';
import { useSelector } from 'react-redux';
import { getProjectsList } from '../../redux/projects/projectSelectors';
import { useParams } from 'react-router';

export default function SprintsPage() {
  const projects = useSelector(getProjectsList);
  const { projectId } = useParams();

  const getCurrentProject = () =>
    projects.find(project => project?._id === projectId);

  return (
    <>
      <Container>
        <div className={s.containerPageSprintProgect}>
          <SprintPageProject projects={projects} />
          <div className={s.containerPageSprint}>
            <div className={s.pageSprintBtBack}>
              <SprintBtBack />
            </div>
            {getCurrentProject() && (
              <SprintPageTitele
                nowProject={getCurrentProject()}
                projectId={projectId}
              />
            )}
            <SpintBtPeople projectId={projectId} />
            <SprintCard />
          </div>
          <div className={s.btnDispleyNone}>
            <SpintBtAddSprint projectId={projectId} />
          </div>
        </div>
      </Container>
    </>
  );
}
