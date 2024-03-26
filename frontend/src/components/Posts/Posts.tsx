import React from 'react';
import {Post} from '../../types';
import './PostItem.css';

interface Props {
  posts: Post[];
}

const Posts: React.FC<Props> = ({posts}) => {
  return (
    <div className='post-list'>
      {posts.map((post) => (
        <div className="post-item" key={post.id}>
          <h5 className="post-author">{post.author}</h5>
          <p className="post-message">{post.message}</p>
          <span className="post-datetime">{post.datetime}</span>
        </div>
      ))}
    </div>
  );
};

export default Posts;