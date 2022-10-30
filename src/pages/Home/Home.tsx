import React, { useState, useEffect } from 'react';
import * as API from '../../utils/Services';
import { IUser } from '../../typing/UsersInterface';
import './Home.scss';
import { UserCard } from '../../components/UserCard/UserCard';




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
    <>
      <p>User's List active last week</p>
      {
      isLoading 
        ?
          'Cargando...' 
        : 
        <ul>
        {users.map((user: IUser) => 
          <UserCard key={user.id} {...user}/>
        )}
      </ul>   
      }
      

    </>
  )
}
