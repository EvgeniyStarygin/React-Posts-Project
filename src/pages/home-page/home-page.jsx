import React, { useEffect } from 'react'
import styles from './home-page.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getPostsFetch } from '../../redux/slices/posts-slice';
import { POSTS } from '../../constants/selectors';
import { LoadPage } from '../load-page/load-page';
import { Post } from '../../components/post/post';

export const HomePage = () => {

  const dispatch = useDispatch();
  const posts = useSelector(POSTS);

  useEffect(() => {
    dispatch(getPostsFetch());
  }, [])

  return (
    <>
      {
        posts.isLoading && <LoadPage />
      }
      {
        posts.data && (
          <>
            <h2>Все посты</h2>
            <ul>
              {
                posts.data.map((post) => (
                  <Post
                    key={post.id}
                    post={post}
                  />
                )
                )
              }
            </ul>
          </>
        )
      }
    </>
  )
};
