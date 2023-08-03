'use client';
import Image from 'next/image';
import styles from './page.module.scss';
import Link from 'next/link';

const projects = [
  {
    img: require('@/assets/images/projects/nexuspro.png'),
    title: 'NexusPro',
    demo: 'https://nexuspro.kz',
    github: undefined,
  },
  {
    title: 'Molnisoft',
    demo: 'https://molnisoft.netlify.app/',
    github: 'https://github.com/azikulov/molnisoft',
  },
  {
    title: 'Благотворительный Хакатон',
    demo: 'https://charity-hackathon.netlify.app/',
    github: 'https://github.com/azikulov/charity-hackathon',
  },
  {
    title: 'ApartX Хакатон',
    demo: 'https://apartx-cleaning.netlify.app/',
    github: 'https://github.com/azikulov/apartx-hackathon',
  },
  {
    title: '«В МИРЕ ДЕТСКОЙ ЛИТЕРАТУРЫ»',
    demo: 'https://childrens-literature.netlify.app/annotations',
    github: 'https://github.com/azikulov/childrens-literature',
  },
];

export default function Home() {
  return (
    <div>
      <header className={styles.header}>
        <nav className={styles.navigation}>
          <div className={styles.logo}>
            <Link href='/'>
              Azikulov.<span>M</span>
            </Link>
          </div>

          <input
            className={styles.menuInput}
            type='checkbox'
            id='menu-toggle'
            hidden
          />

          <label htmlFor='menu-toggle' className={styles.menuIcon}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='currentColor'
            >
              <path
                fillRule='evenodd'
                d='M3 9a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 9zm0 6.75a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z'
                clipRule='evenodd'
              />
            </svg>
          </label>

          <ul className={styles.menu}>
            <li>
              <Link href={'#'}>Главная</Link>
            </li>
            <li>
              <Link href={'#'}>Навыки</Link>
            </li>
            <li>
              <Link href={'#'}>Проекты</Link>
            </li>
            <li>
              <Link href={'#'}>Контакты</Link>
            </li>
          </ul>
        </nav>
      </header>

      <div className={styles.main}>
        <div className={styles.left}>
          <p className={styles.profession}>Frontend Developer</p>
          <h1 className={styles.fullname}>
            Azikulov <span>Maulen</span>
          </h1>
          <p className={styles.description}>
            Я создаю красивые и функциональные веб-интерфейсы с использованием
            современных технологий, таких как HTML, CSS и JavaScript
            (TypeScript). Мой опыт включает работу с популярными фреймворками и
            библиотеками, такими как React и Vue.js. Я стремлюсь к оптимизации
            производительности и совместимости веб-приложений, чтобы обеспечить
            отличный пользовательский опыт на всех устройствах.
          </p>

          <Link className={styles.button} href={'/#projects'}>
            Смотреть мои работы
          </Link>
        </div>

        <div className={styles.right}>
          <Image
            src={require('@/assets/images/vectors/programmer-cuate.png')}
            alt=''
          />
        </div>
      </div>
    </div>
  );
}
