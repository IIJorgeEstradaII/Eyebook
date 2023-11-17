import React, { useState, useEffect } from 'react'
import "../assets/styles/friends-bar.css"
import Icons from '../assets/styles/icons.d';
import axios from 'axios';

interface UserData {
  id: number;
  email: string;
  created_at: string;
  updated_at: string;
}

export const FriendsBar = () => {

  const [data, setData] = useState<UserData[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/users");
        setData(response.data)
      } catch (error) {
        console.error("Error", error)
      }
    };
    fetchData();
  },[])

  const handleFriendsListScroll = (e: React.UIEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  return (
    <>
      <div className='friends-bar' onScroll={handleFriendsListScroll} >
        <div className='friend-list'>
          <div className='chats-header'>
            <h2 className='chats'>Contactos</h2>
              <div className='chats-header__icons'>{ <Icons.Search/> }</div>
              <div className='chats-header__icons'>{ <Icons.More/> }</div>
          </div>
          <h4>You don't have contacts</h4>
          <div>{data.map(item => (
          <div key={item.id}>
        <ul>
          <li>
            {item.id}
          </li>
          <li>
            {item.email}
          </li>
          <li>
            {item.created_at}
          </li>
          <li>
            {item.updated_at}
          </li>
          </ul>
        </div>
    ))}</div>
        </div>
      </div>
    </>
  )
}
