import { Link, useParams } from 'react-router-dom';
import s from './BackToSprintsBtn.module.scss';
import { routes } from '../../../../routes/routes';
import Svg from '../../../Svg/Svg';
import { useSelector } from 'react-redux';
import { getCurrentLanguage } from '../../../../redux/userSettings/userSettingsSelectors';

const BackToSprintsBtn = () => {
  const { projectId } = useParams();
  const curLanguage = useSelector(getCurrentLanguage);
  return (
    <Link
      to={`${routes.projects}/${projectId}/sprints`}
      className={s.btGoBackLink}
    >
      <button className={s.btGoBack}>
        <Svg icon={'#icon-arrow'} className={s.arrow} />
        <span className={s.btGoBackTitel}>
          {curLanguage.tasks.sideBar.goBack}
        </span>
      </button>
    </Link>
  );
};

export default BackToSprintsBtn;
