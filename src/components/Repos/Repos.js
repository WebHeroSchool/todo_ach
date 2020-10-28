import React, { useEffect, useState } from 'react';
import classnames from 'classnames';

import styles from './Repos.module.css';

const Repos = ({reposList}) => {
    const initData = {
        limit: reposList.length,
        prev: 0,
        next: 2
    }

    const [prev, setPrev] = useState(initData.prev);
    const [next, setNext] = useState(initData.next);

    const onClickPrevHandler = () => {
        setNext(next - 2);
        setPrev(prev - 2);
        console.log("onClickPrevHandler",next,prev)
        
    };

    const onClickNextHandler = () => {
        console.log("onClickNextHandler")
        setNext(next + 2);
        setPrev(prev + 2);
    };

    return (
        <section className={styles.section_repos}>
                <ul className={styles['repo-list']}>
                {reposList.slice(prev,next).map(repo => (
                <li className={styles.repo} key={repo.id}>
                    <h1 className={styles.heading}>
                    <a
                        rel='noopener noreferrer'
                        target='_blank'
                        href={repo.html_url}
                        className={styles.link}
                    >
                        {repo.name}
                    </a>
                    </h1>
                    <span
                    className={classnames({
                        [styles.language]: true,
                        [styles.html]: repo.language === 'HTML',
                        [styles.css]: repo.language === 'CSS',
                        [styles.php]: repo.language === 'PHP'
                    })}
                    >
                    {repo.language}
                    </span>
                    <span className={styles.stars}>{repo.stargazers_count}</span>
                    <span className={styles.forks}>{repo.forks_count}</span>
                    <span className={styles.updated}>{repo.updated_at}</span>
                </li>
                ))}
            </ul>
            <div className={styles.buttons}>
                <button
                className={styles['button-back'] + ' ' + styles.button}
                onClick={() => onClickPrevHandler()}
                disabled={prev < 2}
                >
                Назад
                </button>
                <button
                className={styles['button-next'] + ' ' + styles.button}
                onClick={() => onClickNextHandler()}
                disabled={(reposList.length - next) <= 0 }
                >
                Далее
                </button>
          </div>
            </section>
    );
}

export { Repos }