import React from 'react';
import { Avatar } from '../avatar/Avatar';
import { Comment } from '../Comments/Comments';
import styles from './Post.module.css';
interface PostProps {
  author: {
    name: string;
    role: string;
    avatarUrl: string;
  }
  content: string;
  publishedAt: Date;
}

export const Post = (props: PostProps) => (
  <>
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={props.author.avatarUrl}/>
        
          <div className={styles.authorInfo}>
            <strong>{props.author.name}</strong>
            <span>{props.author.role}</span>
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
        {props.content}
      </div>
      <form className={styles.commentForm}>
        <strong>Deixe o seu feedback</strong>
        <textarea placeholder='Deixe um comentário'/>
        <footer>
          <button type='submit'>Publicar</button>
        </footer>
      </form>
      <div className={styles.commentList}>
        <Comment/>
        <Comment/>
        <Comment/>
      </div>
    </article>
  </>
);
