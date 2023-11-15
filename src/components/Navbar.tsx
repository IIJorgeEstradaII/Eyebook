import React from 'react'
import "../assets/styles/navbar.css"
import Icons from "../assets/styles/icons.d"
import "../assets/styles/icon.css"

export const Navbar: React.FC = () => {

  const handleClick = () => {
    alert("Un saludo para la Gordis!!")
  }

  return (
    <>
      <div className='navbar'>
        <div className='logo-input'>
          <a className='ic-main'>{<Icons.MainIcon />}</a>
          <div>
            <input className='search-input' type="text" name="" id="" placeholder='Search Eyebook' />  
          </div>
        </div>
        
        <div>
          <ul  className='options'>  
            <li className='icon' onClick={ handleClick}>{ <Icons.Home/> }</li>
            <li className='icon'>{ <Icons.Video/> }</li>
            <li className='icon'>{ <Icons.Store/> }</li>
            <li className='icon'>{ <Icons.Group/> }</li>
            <li className='icon'>{ <Icons.Games/> }</li>
          </ul>
        </div>
      
        <div className='sections'>
          <a className='icon ic-sections'>{ <Icons.Menu/> }</a>
          <a className='icon ic-sections'>{ <Icons.Messenger/> }</a>
          <a className='icon ic-sections'>{<Icons.Notification />}</a>
          <a className='icon ic-sections'>{ <Icons.Account/> }</a>
        </div>
      </div>
    </>
  )
}
