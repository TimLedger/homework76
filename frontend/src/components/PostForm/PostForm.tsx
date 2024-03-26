import React, {useState} from 'react';
import {Post, BodyPost} from '../../types';
import {Button, TextField} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import './PostForm.css';

interface Props {
  onSubmit: (post: Post) => void;
}

const PostForm: React.FC<Props> = ({onSubmit}) => {
  const [post, setPost] = useState<BodyPost>({
    author: '',
    message: '',
  });

  const changePost = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setPost(prevState => ({
          ...prevState,
          [name]: value,
      }));
  };


  const onFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      id: Math.random().toString(),
      ...post,
      datetime: new Date().toISOString(),
    });
    setPost({author: '', message: ''});
  };

  return (
    <form onSubmit={onFormSubmit} className='form'>
      <TextField
          name="author"
          type="text"
          variant="outlined"
          value={post.author}
          onChange={changePost}
          label="Автор"
          required
      />
      <TextField
          name="message"
          type="text"
          variant="outlined"
          value={post.message}
          onChange={changePost}
          label="Сообщение"
          required
          fullWidth
      />
      <Button type="submit" variant="contained" endIcon={<SendIcon />}>
        Отправить
      </Button>
    </form>
  );
};

export default PostForm;





