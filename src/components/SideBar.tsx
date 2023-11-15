import React from 'react'
import "../assets/styles/sidebar.css"
import Icons from '../assets/styles/icons.d'
export const SideBar = () => {
  return (
    <>
    <div className="sidebar">
      <ul className='sb-elements'>
          <li className='sb-li'>
            <div className='ico-sidebar'>{<Icons.Account />}</div>
            <span className='sb-span'>Jorge Alejandro Estrada Pinelo</span>
          </li>
          <li className='sb-li'>
            <div className='ico-sidebar'>{<Icons.Friends />}</div>
            <span className='sb-span'>Friends</span>
          </li>
          <li className='sb-li'>
            <div className='ico-sidebar'>{<Icons.Memories />}</div>
            <span className='sb-span'>Recuerdos</span>
          </li>
          <li className='sb-li'>
            <div className='ico-sidebar'>{<Icons.Saved />}</div>
            <span className='sb-span'>Guardado</span>
          </li>
          <li className='sb-li'>
            <div className='ico-sidebar'>{<Icons.Groups />}</div>
            <span className='sb-span'>Grupos</span>
          </li>
          <li className='sb-li'>
            <div className='ico-sidebar'> {<Icons.Videos/>}</div>
            <span className='sb-span'>Video</span>
          </li>
        </ul>
        <div className='sb-footer'>
          <ul className='sb-footer-ul'>
            <li>
              <a className="sb-footer-a" href="">Privacidad</a>
            </li>
            <li>
              <a className="sb-footer-a" href="">Condiciones</a>
            </li>
            <li>
              <a className="sb-footer-a" href="">Publicidad</a>
            </li>
            <li>
              <a className="sb-footer-a" href="">Opciones de Anuncios</a>
            </li>
            <li>
              <a className="sb-footer-a" href="">Cookies</a>
            </li>
            <li>
              <a className="sb-footer-a" href="">Más...</a>
            </li>
          </ul>
        </div>
    </div>
      </>
  )
}
