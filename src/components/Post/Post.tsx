import React from 'react';

interface PostProps {
  author: string
  content: string
}

export const Post = (props: PostProps) => (
  <>
    <h1>{props.author}</h1>
    <p>{props.content}</p>
  </>
);
