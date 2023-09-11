import React, { useState, MouseEvent } from 'react';
import './Modal.css';
import { ModalProps } from '../types/type';

const Modal: React.FC<ModalProps>  = ({id, visible, paintDiv}) => {
  const [color, setColor] = useState('');


  return (
    <>
    {
      visible && (   
      <div className='modal' style={{backgroundColor: color}}>
        <button onClick={(event)=> paintDiv(id, 'red')}>Vermelho</button>
        <button onClick={(event)=> paintDiv(id, 'green')}>Verde</button>
        <button onClick={(event)=> paintDiv(id, 'blue')}>Azul</button>

    </div>
    )}
  
  </>
  );
};

export default Modal;
