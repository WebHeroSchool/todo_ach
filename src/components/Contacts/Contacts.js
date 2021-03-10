import React from 'react';
import styles from './Contacts.module.css';

const Contacts = ({name,bio,login, avatarURL, gitUrl}) => {
    return (<section className={styles.section_about}>
        <img src={avatarURL} className={styles.about_image} />
        <h1 className={styles.heading}>{ name ? name: login }</h1>
        <p className={styles.paragraph}>{bio ? bio : 'Frontend developer'}</p>
        <p className={styles.paragraph}>
            <a className={styles.link + ' ' + styles.mail} href='mailto: chudaeva.alina.alekseevna@gmail.com'>
            chudaeva.alina.alekseevna@gmail.com
            </a>
            <a
            className={styles.link + ' ' + styles.telegram}
            href='tg://resolve?domain=alina_chudaeva'
            >
            +7 (927) 6717797
            </a>
        </p>
        <div className={styles.social}>
            <a rel='noopener noreferrer' target='_blank' href={gitUrl} className={styles.link + ' ' + styles.github}>
            <img src={require('../../img/github.svg')} alt='github' />
            </a>
            <a rel='noopener noreferrer' target='_blank' href='http://vk.com' className={styles.link + ' ' + styles.vk}>
            <img src={require('../../img/vk.svg')} alt='vk' />
            </a>
            <a
            rel='noopener noreferrer' target='_blank' href='https://www.linkedin.com/'
            className={styles.link + ' ' + styles.linkedin}
            >
            <img src={require('../../img/linkedin.svg')} alt='linkedin' />
            </a>
            <a
            rel='noopener noreferrer' target='_blank' href='https://www.facebook.com/'
            className={styles.link + ' ' + styles.facebook}
            >
            <img src={require('../../img/facebook.svg')} alt='facebook' />
            </a>
        </div>
            </section>
    );
}

export { Contacts };