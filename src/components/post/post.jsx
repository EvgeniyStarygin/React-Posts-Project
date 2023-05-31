import React, { useState } from 'react'
import styles from './post.module.scss';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { getCommentsFetch } from '../../redux/slices/comments-slice';
import { COMMENTS } from '../../constants/selectors';
import { NavLink } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image'
import { events } from '../../events';
import { Comment } from '../comment';

export const Post = ({ post }) => {

    const dispatch = useDispatch();
    const comments = useSelector(COMMENTS)?.data || null;
    const [commentsOpened, setCommentsOpened] = useState(false);

    const getComments = () => {
        if (!commentsOpened) {
            dispatch(getCommentsFetch(post.id));
            setCommentsOpened(true);
        } else setCommentsOpened(false);
    }


    return (
        <Card className={styles.post}>
            <Card.Body>
                <li>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                    <NavLink to={`/user/${post.userId}`} onClick={() => events.emit("closeMenu")}>
                        <Image
                            roundedCircle
                            className={styles.user__img}
                            src="https://hornews.com/upload/images/blank-avatar.jpg"
                            alt="Фото"
                        />
                    </NavLink>

                </li>
                <Button variant="warning" onClick={getComments}>Комментарии</Button>
                {
                    comments && commentsOpened && comments.map((comment) => <Comment key={comment.id} comment={comment} />)
                }
            </Card.Body>
        </Card>
    )
}

Post.propTypes = {
    post: PropTypes.shape({
        userId: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        body: PropTypes.string.isRequired,
    }).isRequired
}

