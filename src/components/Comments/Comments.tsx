import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'

export const Comment = () => {
  return (
    <div className={styles.comment}>
      <img src="https://github.com/hbenvenutti.png"/>
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Huam Benvenutti</strong>
              <time title='11 de maio as 18:35h' dateTime='2022-05-11 18:35:32'>Cerca de 1h atrás</time>
            </div>

            <button title='Deletar comentário'>
              <Trash size={24}/>
            </button>
          </header>
          <p>Muito bom Devon, Parabens!!</p>
        </div>

        <footer>
          <button>
            <ThumbsUp/>
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}
