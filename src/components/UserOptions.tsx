import React, { ReactNode } from 'react'
import "../assets/styles/useroptions.css"

interface UserOptionsProps{
  isOpen: boolean,
  children: ReactNode
}

export const UserOptions: React.FC<UserOptionsProps> = ({isOpen, children}) => {
  if (!isOpen) return null
  return (
    <>
      <div className="op-menu">
        <div className="op-box">
          <div className="op-content">{children}</div>
        </div>
    </div>

  
    </>
  )
}
