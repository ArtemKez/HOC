import React from 'react';
import styles from './UserCard.module.scss';
import {WithUser} from "../HOCs/WithUser";


function UserCard(props) {
    return (
        <div className={styles.container}>
            <h2>UserCard</h2>
            <p>{props.user.fname} {props.user.sname}</p>
            <img src={props.user.imgSrc} className={styles.img}/>
        </div>
    );
}

// HOC
const UserCardWithUser = WithUser(UserCard)

export default UserCardWithUser;