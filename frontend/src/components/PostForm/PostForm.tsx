import React, {useState} from 'react';
import {Post, BodyPost} from '../../types';
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
      <input
          name="author"
          type="text"
          className="form-input"
          value={post.author}
          onChange={changePost}
          placeholder='Автор'
          required
      />
      <input
          name="message"
          type="text"
          className="form-textarea"
          value={post.message}
          onChange={changePost}
          placeholder='Сообщение...'
          required
      />
      <button type="submit" className="btn-add-post"></button>
    </form>
  );
};

export default PostForm;





