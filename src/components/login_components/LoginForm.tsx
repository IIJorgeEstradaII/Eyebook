import axios from 'axios'
import React, { useState } from 'react'

export const LoginForm = () => {
  
  const [formData, setFormData] = useState(
    { 
      user: {
        email: "",
        password: ""
      }
    }
  )

  const handleSubmit = async(event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); 
    try {
      const response = await axios.post("http://127.0.0.1:3000/users/sign_in", formData);
      const token = response.data.token
      localStorage.setItem("token", token)
      window.location.reload()
      
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        console.log("Error response:", error.response);
      } else {
        console.error("Error desconocido:", error);
      }
    }
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      user: {
        ...prevFormData.user,
        [name]: value
      }
    }));
  };
  console.log(formData)
  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <div className='cre-inputs'>
            <div className='in-ce'>
                <input className='input-log' name="email" type="email" value={formData.user.email} onChange={handleChange} placeholder='Correo electrónico o número de teléfono' />
                  </div>
                    <div className='in-ce'>
                    <input className='input-log' name="password" type="password" value={formData.user.password} onChange={handleChange} placeholder='Contraseña' />
                  </div>
                </div>
              <div className='sb-b'>
            <button className='b-log' type='submit'>Iniciar sesión</button>
        </div>
      </form>
    </>
  )
}
