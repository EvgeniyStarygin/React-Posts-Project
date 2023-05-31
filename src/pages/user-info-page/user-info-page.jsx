import React, { useEffect } from 'react'
import styles from './user-info-page.module.scss';
import PropTypes from 'prop-types';
import { useAsyncValue, useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { USER } from '../../constants/selectors';
import { getUserInfoFetch, getUserPostsFetch } from '../../redux/slices/user-slice';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';
import { Post } from '../../components/post/post';
import { LoadPage } from '../load-page/load-page';
import Card from 'react-bootstrap/Card';
import { UserInfo } from '../../components/user-info/user-info';


export const UserInfoPage = () => {

    const { id } = useParams();
    const dispatch = useDispatch();
    const user = useSelector(USER) || null;
    const userInfo = user.info;
    const userPosts = user.posts;


    useEffect(() => {
        dispatch(getUserInfoFetch(id));
        dispatch(getUserPostsFetch(id));
    }, [dispatch])


    return (
        <>
            {
                user.isLoading && <LoadPage />
            }
            <NavLink to="/" >
                <Button variant="warning" className={styles.back__btn}>Назад</Button>{' '}
            </NavLink>

            {
                userInfo && <UserInfo userInfo={userInfo} />
            }
            {
                userPosts && (
                    <>
                        <h2>Посты пользователя</h2>
                        <ul>
                            {
                                userPosts.map((post) => <Post key={post.id} post={post} />)
                            }
                        </ul>
                    </>
                )
            }

        </>

    );
};

UserInfoPage.propTypes = {
    //text : PropTypes.string.isRequired
}

