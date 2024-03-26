import {useEffect, useState} from 'react';
import Header from './components/Header/Header';
import PostForm from './components/PostForm/PostForm';
import Posts from './components/Posts/Posts';
import {Post} from './types';
import axiosApi from "./axiosApi";
import dayjs from 'dayjs';
import './App.css';

let datetime: string | null = null;

function App() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      let url = '/messages';

      if (datetime !== null) {
        url += `?datetime=${encodeURIComponent(datetime)}`;
      }

      try {
        const response = await axiosApi.get(url);

        if (response.status !== 200) {
          throw new Error('Network error: ' + response.status);
        }

        const newPosts: Post[] = response.data.map((post: Post) => ({
          ...post,
          datetime: dayjs(post.datetime).format('DD.MM.YYYY HH:mm'),
        }));

        setPosts(newPosts);

        if (newPosts.length > 0) {
          const lastPost = newPosts[newPosts.length - 1];
          datetime = lastPost.datetime;
        }
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };
    void fetchData();
    const intervalId = setInterval(fetchData, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const createPost = async (post: Post) => {

    try {
      const response = await axiosApi.post('/messages', post);

      if (response.status === 200) {
        console.log('Post created successfully!');
      } else {
        console.error('Failed to create post');
      }
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  return (
    <div>
      <Header />
      <main className="container">
        <PostForm onSubmit={createPost}/>
        <Posts posts={posts}/>
      </main>
    </div>
  );
}

export default App;