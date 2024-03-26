import React, {useEffect} from 'react';
import './PostItem.css';
import {Post} from '../../types';

interface Props {
  post: Post;
}

const PostItem: React.FC<Props> = ({post}) => {
  console.log('[PostItem] render');

  useEffect(() => {
    console.log('[PostItem] mounted/updated');
  }, []);

  return (
    <div className="post-item">
      <h5 className="post-author">{post.author}</h5>
      <p className="post-message">{post.message}</p>
      <span className="post-datetime">{post.datetime}</span>
    </div>
  );
};

export default PostItem;