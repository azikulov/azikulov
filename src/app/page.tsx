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
    <div className=''>
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

          <label
            onClick={() => {
              window.navigator.vibrate(200);
            }}
            htmlFor='menu-toggle'
            className={styles.menuIcon}
          >
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

      {/* <div className={styles.container}>
        <h1 className={styles.title}>Projects</h1>

        <div className={styles.cards}>
          {projects.map((project, key) => (
            <div className={styles.card} key={key}>
              <Image className={styles.image} src={project.img} alt='' />

              <p className={styles.title}>{project.title}</p>

              <div className={styles.nav}>
                <Link className={styles.link} href={project.demo}>
                  Demo
                </Link>
                <Link className={styles.link} href={project.github || '#'}>
                  GitHub
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div> */}
    </div>
  );
}
