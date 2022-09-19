import React from 'react';
import { Avatar } from '../avatar/Avatar';
import styles from './Post.module.css';
interface PostProps {
  author: string
  content: string
}

export const Post = (props: PostProps) => (
  <>
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar />
        
          <div className={styles.authorInfo}>
            <strong>Huam Benvenutti</strong>
            <span>Web Developer</span>
          </div>
        </div>
        
        <time 
          title='11 de maio às 08:25'
          dateTime='2022-05-11 08:25:53'
        >
            Publicado há 1h
        </time>
      </header>
      <div className={styles.content}>
        <p>Fala galeraa 👋</p>

        <p>Acabei de subir mais um projeto no meu portifa. 
           É um projeto que fiz no NLW Return, evento da Rocketseat. 
           O nome do projeto é DoctorCare 🚀
        </p>

        <p><a href="#">  jane.design/doctorcare</a></p>

        <p>
          <a href="#">#novoprojeto</a>{' '}
          <a href="#">#nlw </a>{' '}    
          <a href='#'>#rocketseat</a>
        </p>
      </div>
      <form className={styles.commentForm}>
        <strong>Deixe o seu feedback</strong>
        <textarea placeholder='Deixe um comentário'/>
        <footer>
          <button type='submit'>Publicar</button>
        </footer>
      </form>
    </article>
  </>
);
