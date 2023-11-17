import React from 'react'
import "./login-page.css"

export const LoginPage = () => {

  return (
    <>
      <div className='login-box'>
        <div className='login-form'>
          <form action="">
            <div className='cre-inputs'>
              <div className='in-ce'>
                <input className='input-log' type="text" placeholder='Correo electrónico o número de teléfono' />
              </div>
              <div className='in-ce'>
                <input className='input-log' type="password" placeholder='Contraseña' />
              </div>
            </div>
            <div className='sb-b'>
              <button className='b-log' type='submit'>Iniciar sesión</button>
            </div>
          </form>
        <div className='a-recover'>
          <a href="">¿Olvidaste tu contraseña?</a>
        </div>
          <div className='line-b'></div>
          <div>
            <button className='su-b'>Crear cuenta nueva</button>
          </div>
        </div>
      </div>
    </>
  )
}
