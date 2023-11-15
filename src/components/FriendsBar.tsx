import React from 'react'
import "../assets/styles/friends-bar.css"

export const FriendsBar = () => {

  const handleFriendsListScroll = (e: React.UIEvent<HTMLDivElement>) => {
    e.stopPropagation();
    // Tu lógica adicional para el scroll de la lista de amigos, si es necesario
  };

  return (
    <>
      <div className='friends-bar' onScroll={handleFriendsListScroll} >
        <div className='friend-list'>
          <h2>Contacts</h2>
          <h4>You don't have contacts</h4>
          <h3>1 FRIEND</h3>
          <h3>1 FRIEND</h3>
          <h3>1 FRIEND</h3>
          <h3>1 FRIEND</h3>
          <h3>1 FRIEND</h3>
          <h3>1 FRIEND</h3>
          <h3>1 FRIEND</h3>
          <h3>1 FRIEND</h3>
          <h3>1 FRIEND</h3>
          <h3>1 FRIEND</h3>
          <h3>1 FRIEND</h3>
          <h3>1 FRIEND</h3>
          <h3>1 FRIEND</h3>
          <h3>1 FRIEND</h3>
          <h3>1 FRIEND</h3>
          <h3>1 FRIEND</h3>
          <h3>1 FRIEND</h3>
          <h3>1 FRIEND</h3>
          <h3>1 FRIEND</h3>
          <h3>1 FRIEND</h3>
          <h3>1 FRIEND</h3>
          <h3>1 FRIEND</h3>
          <h3>1 FRIEND</h3>
          <h3>1 FRIEND</h3>
          <h3>1 FRIEND</h3>
          <h3>1 FRIEND</h3>
          <h3>1 FRIEND</h3>
          <h3>1 FRIEND</h3>
          <h3>1 FRIEND</h3>
          <h3>7 FRIEND</h3>
          <h3>1 FRIEND</h3>
          <h3>1 FRIEND</h3>
          <h3>1 FRIEND</h3>
          <p>hello world</p>
        </div>
      </div>
    </>
  )
}
