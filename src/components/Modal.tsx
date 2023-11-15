import React, { ReactNode } from 'react';
import "../assets/styles/modal.css";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  return (
    <>
      {isOpen && (
        <div className="modal-overlay" onClick={onClose}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-btn" onClick={onClose}>
              &times;
            </span>
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;