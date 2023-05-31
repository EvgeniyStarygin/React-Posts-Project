import React from 'react'
import styles from './user-info.module.scss';
import PropTypes from 'prop-types';

export const UserInfo = ({ userInfo }) => {
    return (
        <>
            <h2>Информация о пользователе</h2>
            <ul>
                <li><span className={styles.property}>Name : </span>{userInfo.name}</li>
                <li><span className={styles.property}>Username : </span>{userInfo.username}</li>
                <li><span className={styles.property}>Phone : </span>{userInfo.phone}</li>
                <li><span className={styles.property}>Email : </span>{userInfo.email}</li>
                <li><span className={styles.property}>Website : </span>{userInfo.website}</li>

                <li><span className={styles.property}>Company :</span>
                    <ul>
                        <li>name -  {userInfo.company.name}</li>
                        <li>catch phrase -  {userInfo.company.catchPhrase}</li>
                        <li>bs : {userInfo.company.bs}</li>
                    </ul>
                </li>

                <li><span className={styles.property}>Address :</span>
                    <ul>
                        <li>city -  {userInfo.address.city}</li>
                        <li>street -  {userInfo.address.street}</li>
                        <li>suite - {userInfo.address.suite}</li>
                        <li>zipcode - {userInfo.address.zipcode}</li>
                        <li> geo:
                            <ul>
                                <li>lat - {userInfo.address.geo.lat}</li>
                                <li>lng - {userInfo.address.geo.lng}</li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
        </>
    );
};

UserInfo.propTypes = {
    //text : PropTypes.string.isRequired
}

