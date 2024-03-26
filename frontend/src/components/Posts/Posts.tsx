import React from 'react';
import {Post} from '../../types';
import {Card, CardContent, Typography} from "@mui/material";
import './PostItem.css';

interface Props {
  posts: Post[];
}

const Posts: React.FC<Props> = ({posts}) => {
  return (
    <div className='post-list'>
      {posts.map((post) => (
        <Card key={post.id}>
          <CardContent>
            <Typography variant="h5" component="h2">
              {post.author}
            </Typography>
            <Typography variant="h6" color="textSecondary" className="small">
              {post.message}
            </Typography>
            <Typography variant="body2" color="textSecondary" className="small">
              {post.datetime}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Posts;