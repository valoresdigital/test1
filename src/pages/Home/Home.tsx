import React, { useState, useEffect } from 'react';
import * as API from '../../utils/Services';
import { IUser } from '../../typing/UsersInterface';
import './Home.scss';
import { UserCard } from '../../components/UserCard/UserCard';
import { DotSpinner } from '@uiball/loaders';
import { weekAgo } from '../../utils/Helpers';



export const Home = () => {
  const [users, setUsers] = useState <Array<IUser>>([])
  const [ isLoading, setIsLoading ] = useState <boolean>(true);

  useEffect(() => {
    API.loadUsers()
    .then((data)=> {
      setUsers(data)
      setIsLoading(false) 
    })
    .catch(console.log)
  }, [])
  
  return (
    <div className='home'>
      <p className='home__title'>User's List active last week</p>
      {
      isLoading 
        ?
        <div className='home__spinner'>
          <DotSpinner /> 
        </div>
        : 
        <ul className='home__list'>
          {
          users.filter(user => !user.isBanned && user.lastActivityAt >= weekAgo())
          .map((user: IUser) => 
            <UserCard key={user.id} {...user}/>
          )}
        </ul>   
      }
    </div>
  );
};
