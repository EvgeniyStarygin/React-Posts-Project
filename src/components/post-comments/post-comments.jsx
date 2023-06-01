import React, { useState } from 'react'
import styles from './post-comments.module.scss';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { COMMENTS } from '../../constants/selectors';
import { deleteComments, getCommentsFetch } from '../../redux/slices/comments-slice';
import { Button } from 'react-bootstrap';
import { Comment } from '../comment';
import { LoadPage } from '../../pages/load-page';



export const PostComments = ({ postId }) => {

  const dispatch = useDispatch();
  const comments = useSelector(COMMENTS);
  const postComments = comments.data.filter((comment) => comment.postId === postId);
  const [commentsOpened, setCommentsOpened] = useState(false);

  const getComments = () => {
    if (!commentsOpened) {
      dispatch(getCommentsFetch(postId));
      setCommentsOpened(true);
    } else {
      dispatch(deleteComments(postId));
      setCommentsOpened(false);
    }
  }

  return (
    <>
      <Button variant="warning" onClick={getComments}>Комментарии</Button>

      {
        postComments && commentsOpened && postComments.map((comment) => <Comment key={comment.id} comment={comment} />)
      }
      {
        comments.isLoading && <LoadPage where="comments" />
      }
    </>
  );
};

PostComments.propTypes = {
  postId: PropTypes.number.isRequired
}
