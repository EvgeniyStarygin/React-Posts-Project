import React from 'react'
import styles from './comment.module.scss';
import PropTypes from 'prop-types';


const Comment = ({ comment }) => {
    return (
        <div className={styles.comment}>
            <p>{comment.body}</p>
            <p className={styles.comment__author}>{comment.email}</p>
        </div>
    );
};

Comment.propTypes = {
    //  text : PropTypes.string.isRequired
}

export default Comment;