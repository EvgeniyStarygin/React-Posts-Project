import React, { useEffect } from 'react'
import styles from './user-info-page.module.scss';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { USER } from '../../constants/selectors';
import { getUserInfoFetch, getUserPostsFetch } from '../../redux/slices/user-slice';
import { Post } from '../../components/post/post';
import { LoadPage } from '../load-page/load-page';
import { UserInfo } from '../../components/user-info/user-info';
import { BackBtn } from '../../components/back-btn';


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
            <BackBtn />
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

