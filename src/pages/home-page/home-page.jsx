import React, { useEffect } from 'react'
import styles from './home-page.module.scss';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { getPostsFetch } from '../../redux/slices/posts-slice';
import { POSTS } from '../../constants/selectors';
import { Post } from '../../components/post/post';
import { LoadPage } from '../load-page/load-page';

export const HomePage = () => {

  const dispatch = useDispatch();
  const posts = useSelector(POSTS);

  useEffect(() => {
    dispatch(getPostsFetch());
  }, [dispatch])

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

HomePage.propTypes = {
  //text: PropTypes.string.isRequired
}
