import React from 'react';
import { IUser } from '../../typing/UsersInterface';
import './UserCard.scss';

export const UserCard = ({fullName,avatarUrl,role,isBanned,lastActivityAt,id}:IUser) => {
  return (
    <li>
        <img src={avatarUrl} />
        <p>{fullName}</p>
        <small>{role}</small>
    </li>
  )
}
