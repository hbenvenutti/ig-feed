import React from 'react';
import {PencilSimpleLine} from 'phosphor-react';

import styles from './Sidebar.module.css'

export const Sidebar = () => (
  <aside className={styles.sidebar}>
    <img 
      className={styles.cover}
      src="https://images.unsplash.com/photo-1537498425277-c283d32ef9db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" 
      alt="" 
    />
    
    <div className={styles.profile}>
      <img className={styles.avatar} src="https://github.com/hbenvenutti.png" alt="user avatar" />

      <strong>Huam Benvenutti</strong>
      <span>Web Developer</span>
    </div>
    
    <footer>
      <a href="#">
        <PencilSimpleLine size={20} />
        Editar seu perfil
      </a>
    </footer>
  </aside>
)
