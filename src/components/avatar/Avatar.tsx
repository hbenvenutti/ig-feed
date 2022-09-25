import React from 'react';

import styles from './Avatar.module.css';

interface AvatarProps {
  src: string;
  hasBorder?: boolean;
}

export const Avatar = ({hasBorder = true, src}: AvatarProps) => (
  <img 
    className={hasBorder ? styles.avatarWithBorders : styles.avatar}
    src={src} 
    alt="avatar" 
  />
)
