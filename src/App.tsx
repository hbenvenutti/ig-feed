import { useState } from 'react'
import {Header} from './components/Header/Header';
import { Post } from './components/Post/Post';
import styles from './App.module.css';

import './global.css'
import { Sidebar } from './components/Sidebar/Sidebar';

const posts = [
  {
    id: 1, 
    author: {
      avatarUrl: 'https://github.com/hbenvenutti.png',
      name: 'Huam Benvenutti',
      role: 'Arigó Profissional'
    },
    content: 'To mais perdido que cego em tiroteio!',
    publishedAt: new Date('2022-09-26 23:14:00')
  },
  {
    id: 2, 
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO @Rocketseat'
    },
    publishedAt: new Date('2022-09-26 23:14:00'),
    content: '<p>Fala galeraa 👋</p>' + 
    '<p>Acabei de subir mais um projeto no meu portifa.' +
    'É um projeto que fiz no NLW Return, evento da Rocketseat.' +
    'O nome do projeto é DoctorCare 🚀' +
    '</p>' +
    '<p><a href="#">  jane.design/doctorcare</a></p>' +
    '<p>'+
      '<a href="#">#novoprojeto</a>{" "}'+
      '<a href="#">#nlw </a>{" "}' +
      '<a href="#">#rocketseat</a>' +
    '</p>'
  }
];

function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {
            posts.map(post => {
              return (
                <Post 
                  key={post.id} 
                  author={post.author} 
                  content={post.content} 
                  publishedAt={post.publishedAt}/>
              )
            })
          }
        </main>

      </div>
    </>
  )
}

export { App }
