import React, { useState, MouseEvent } from 'react';
import './Modal.css';
import { ModalProps } from '../types/type';

const Modal: React.FC<ModalProps> = ({ id, visible, paintDiv }) => {
  return (
    <>
      {
        visible && (
          <div className='modal' >
            <button onClick={() => paintDiv(id, 'red')} className='colors' id='red'></button>
            <button onClick={() => paintDiv(id, 'green')} className='colors' id='green'></button>
            <button onClick={() => paintDiv(id, 'blue')} className='colors' id='blue'></button>
          </div >
        )}

    </>
  );
};

export default Modal;
