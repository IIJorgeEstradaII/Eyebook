import { useState} from 'react'
import "../assets/styles/navbar.css"
import Icons from "../assets/styles/icons.d"
import "../assets/styles/icon.css"
import Modal from './Modal'

export const Navbar: React.FC = () => {

  const [isModalOpen, setModalOpen] = useState(false);

  const handleIconClick = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

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
            <li className='icon'>{<Icons.Home />}</li>
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
              <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
                Este es el children
              </Modal>
          <a className='icon ic-sections' onClick={ isModalOpen == true ? handleCloseModal : handleIconClick}>{<Icons.Account />}</a>
        </div>
      </div>
    </>
  )
}
