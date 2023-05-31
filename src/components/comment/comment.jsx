import React from 'react'
import styles from './comment.module.scss';
import PropTypes from 'prop-types';


export const Comment = ({ comment }) => (
    <div className={styles.comment}>
        <p>{comment.body}</p>
        <span className={styles.comment__author}>{comment.email}</span>
    </div>
)



Comment.propTypes = {
    comment: PropTypes.shape({
        postId: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        email: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired,
    }).isRequired
}

