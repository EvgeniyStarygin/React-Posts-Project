import React, { useState, useMemo } from 'react'
import styles from './post.module.scss';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image'
import { events } from '../../events';
import { PostComments } from '../post-comments/post-comments';


export const Post = ({ post }) => (
    <>
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
                <PostComments postId={post.id} />
            </Card.Body>
        </Card>
    </>

)




Post.propTypes = {
    post: PropTypes.shape({
        userId: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        body: PropTypes.string.isRequired,
    }).isRequired
}

