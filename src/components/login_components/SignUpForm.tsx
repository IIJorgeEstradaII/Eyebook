import React from 'react'
import "../../assets/styles/styles.css"
import "../../assets/styles/sign-up.css"
import Icons from '../../assets/styles/icons.d'

interface ModalProps{
  isOpen: boolean
  onClose: () => void 
}
//ReactNode, Este tipo permite que el prop acepte cualquier cosa que pueda ser renderizada por React,
// como componentes, elementos JSX, cadenas de texto, números, etc.

export const SignUpForm = ({ isOpen, onClose }: ModalProps) => {

  const months =
    [
    'ene', 'feb', 'mar', 'abr', 'may',
    'jun', 'jul', 'ago', 'sep',
      'oct', 'nov', 'dic'
    ];

    const years: number[] = [];
    for (let year = 2023; year >= 1905; year--) {
      years.push(year);
    }
  
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className='sig-msg'>
          <div className='md-t'>Registrate</div>
          <div className='md-sb'>Es rápido y fácil.</div>
        </div>
        <div className='signup-form'>
          <form action="">
            <div className='fullname-field'>
              <div className='name-field'>
                <input className="n-f" type="text" placeholder='Nombre'/>
              </div>
              <div className='lastname-field'>
                <input className="ln-f" type="text" placeholder='Apellido'/>
              </div>
            </div>
            <div className='mail-field'>
              <input className="m-f" type="text" placeholder='Número de celular o correo electrónico '/>
            </div>
            <div className='password-field'>
              <input className='pw-f' type="password" placeholder='Contraseña Nueva' />
            </div>
            <div>
              <div className='birth-d-msg'>Fecha de Nacimiento <Icons.QuestionMark /></div>
            </div>
            <div className='birth-date-data'>
              <div>
              <select className='day-d' name="day" id="">
              {[...Array(31)].map((_, index) => (
                <option key={index + 1} value={index + 1}>{index + 1}</option>
                ))}
              </select>
              </div>
            <div className='month'>
              <select className='mth-d' name="" id="">
                {months.map((month, index) =>
                  <option key={index} value={month}>{ month }</option>
                )}
              </select>
            </div>
            <div className='year'>
              <select className='year-d' name="" id="">
                {years.map((year, index) => 
                  <option key={index} value={year}>{ year }</option>
                  ) }
              </select>
              </div>
            </div>
              <div className='gender-s'>
                <div>Sexo <Icons.QuestionMark /></div>
              </div>
              <div className='gender'>
              <div className='male'>
                  <label htmlFor="">Hombre</label>
                  <input value="male" type="radio" name="gender"/>
                </div>
                <div className='female'>
                  <label htmlFor="">Mujer</label>
                  <input value="female" type="radio" name="gender"/>
                </div>
                <div className='personalized'>
                  <label htmlFor="">Personalizado</label>
                  <input type="radio" name="gender"/>
                </div>
              </div>
              <div className='end-msg'>
                <div className='fst-msg'>
                  Es posible que las personas que usan nuestro
                  servicio hayan subido tu información de contacto
                  a Facebook. <a href="">Obtén más información</a>.
                </div>
                <div className='snd-msg'>
                  Al hacer clic en "Registrarte", aceptas nuestras
                    Condiciones, la <a href="">Política de privacidad</a> y la
                    <a href="">Política de cookies</a>. Es posible que te enviemos
                    notificacionespor SMS, que puedes desactivar cuando quieras.
                  </div>
                </div>
                <button className='rgst-sbm-btn' type='submit'>Registrarte</button>
            </form>
        </div>
      </div>
    </div>
  );
};
