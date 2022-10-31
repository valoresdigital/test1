import React from 'react';
import { IUser } from '../../typing/UsersInterface';
import './UserCard.scss';

export const UserCard = ({fullName,avatarUrl,role}:IUser) => {
  
  
  return (
    <li className='list__item'>
        <img src={avatarUrl} alt='avatar' className='list__item--avatar'/>
        <p className='list__item--fullname'>{fullName} <small className='list__item--role'>{role}</small></p>
    </li>
  )
}
