import { useState } from 'react'
import {Header} from './components/Header/Header';
import { Post } from './components/Post/Post';
import styles from './App.module.css';

import './global.css'
import { Sidebar } from './components/Sidebar/Sidebar';

function App() {

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post author="Author 1" content="content 1" />
          <Post author="Author 2" content="content 2" />
        </main>

      </div>
    </>
  )
}

export { App }
