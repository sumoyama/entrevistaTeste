import { ReactEventHandler, useState } from "react";
import "./Teste1.css";
import Modal from "./Components/Modal";
import { ModalData } from "./types/type";

export const Teste1 = () => {
  const [modals, setModals] = useState<ModalData[]>([
    { id: '1', visible: false, color: 'black ' },
    { id: '2', visible: false, color: 'black' },
    { id: '3', visible: false, color: 'black' },
    { id: '4', visible: false, color: 'black' },
    { id: '5', visible: false, color: 'black' },
  ]);

  const paintDiv = (index: string, color: string) => {
    setModals(prevItems =>
      prevItems.map(item => {
        if (item.id === index) {
          return { ...item, color };
        }
        return { ...item };
      }
      )
    );
  }
  const handleModal = (index: string, visible: boolean) => {
    setModals(prevItems =>
      prevItems.map(item => {
        if (item.id === index) {
          return { ...item, visible: !item.visible };
        }

        return { ...item };
      }
      )
    );
  }
  return (
    <div className="teste1">
      {
        modals.map((item) => (
          <div className="items" key={item.id}>
            <Modal id={item.id} visible={item.visible} paintDiv={paintDiv} />
            <div className="teste1__rect" id={item.id} onClick={() => handleModal(item.id, true)} style={{ backgroundColor: item.color }}>
            </div>
          </div>
        ))
      }
    </div>
  );
};