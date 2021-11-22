import React from 'react';
import { useSelector } from 'react-redux';

import Container from '../../components/Container/Container.jsx';
import Svg from '../../components/Svg/Svg.jsx';
import {
  getCurrentLanguage,
  getLanguage,
} from '../../redux/userSettings/userSettingsSelectors.js';
import Sasha from '../../icons/Saha.jpg';
import Dima from '../../icons/Dima.jpg';
import Taras from '../../icons/Taras.jpg';
import Alina from '../../icons/Alina.jpg';
import Masha from '../../icons/Masha.jpg';
import Illiya from '../../icons/Illiya.jpg';

import s from './OurTeamPage.Module.scss';

const teamArr = [
  {
    nameEn: 'Alexander Lyakhotskiy',
    nameUa: 'Олександр Ляхоцький',
    nameRu: 'Александр Ляхоцкий',
    position: 'Team lead',
    preview: Sasha,
    linkedin: 'https://www.linkedin.com/in/alexander-lyakhotskiy-a64904155/',
    github: 'https://github.com/AlexLyakhotskiy',
  },
  {
    nameEn: 'Dmitry Ignatev ',
    nameUa: 'Дмитро Ігнатьєв',
    nameRu: 'Дмитрий Игнатьев',
    position: 'Full-Stack developer, Scrum master',
    preview: Dima,
    linkedin: 'https://www.linkedin.com/in/дмитрий-игнатьев-b83395a0/',
    github: 'https://github.com/IgnatevD',
  },
  {
    nameEn: 'Taras Dovbyus',
    nameUa: 'Тарас Довбіус',
    nameRu: 'Тарас Довбиус',
    position: 'Full-Stack developer',
    preview: Taras,
    linkedin: 'https://www.linkedin.com/in/taras-dovbyus-07bb79207/',
    github: 'https://github.com/dstaras',
  },
  {
    nameEn: 'Alina Oksentiuk',
    nameUa: 'Аліна Оксентюк',
    nameRu: 'Алина Оксентюк',
    position: 'Full-Stack developer',
    preview: Alina,
    linkedin: '#',
    github: 'https://github.com/mandarinka99',
  },
  {
    nameEn: 'Masha Shytykova',
    nameUa: 'Маша Шитикова',
    nameRu: 'Маша Шитикова',
    position: 'Full-Stack developer',
    preview: Masha,
    linkedin: 'https://www.linkedin.com/in/masha-shytykova-a28b8b15b/',
    github: 'https://github.com/Masha-Shytykova',
  },
  {
    nameEn: 'Illia Shpylʹovyy',
    nameUa: 'Ілля Шпильовий',
    nameRu: 'Илья Шпилевой',
    position: 'Full-Stack developer',
    preview: Illiya,
    linkedin: '#',
    github: 'https://github.com/vip-master',
  },
];

export default function OurTeamPage() {
  const curLanguage = useSelector(getCurrentLanguage);
  const userLanguage = useSelector(getLanguage);
  return (
    <Container className={s.teamContainer}>
      <h1 className={s.title}>{curLanguage.teamTitle}</h1>
      <ul className={s.list}>
        {teamArr.map(
          ({ preview, nameEn, nameUa, nameRu, position, github, linkedin }) => (
            <li className={s.item} key={github}>
              <img className={s.images} src={preview} alt={nameEn} />
              <div className={s.desc}>
                {userLanguage === 'ukrainian' && (
                  <h3 className={s.name}>{nameUa}</h3>
                )}
                {userLanguage === 'russian' && (
                  <h3 className={s.name}>{nameRu}</h3>
                )}
                {userLanguage === 'english' && (
                  <h3 className={s.name}>{nameEn}</h3>
                )}
                <p className={s.position}>{position}</p>

                <ul className={s.listLink}>
                  <li className={s.itemLink}>
                    <a
                      href={github}
                      className={s.iconLink}
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <Svg icon="#github" className={s.icon} />
                    </a>
                  </li>

                  <li className={s.itemLink}>
                    <a
                      href={linkedin}
                      className={s.iconLink}
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <Svg icon="#linkedin" className={s.icon} />
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          ),
        )}
      </ul>
    </Container>
  );
}
