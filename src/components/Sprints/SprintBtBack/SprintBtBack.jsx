import { Link } from 'react-router-dom';
import Svg from '../../Svg/Svg';
import s from './SprintBtBack.module.scss';
import { routes } from '../../../routes/routes';
import { useSelector } from 'react-redux';
import { getCurrentLanguage } from '../../../redux/userSettings/userSettingsSelectors';

const SprintBtBack = () => {
  const curLanguage = useSelector(getCurrentLanguage);
  return (
    <Link to={routes.projects} className={s.btGoBackLink}>
      <button className={s.btGoBack}>
        <Svg icon={'#icon-arrow'} className={s.arrow} />
        <span className={s.btGoBackTitel}>
          {curLanguage.sprints.sideBar.goBack}
        </span>
      </button>
    </Link>
  );
};

export default SprintBtBack;
