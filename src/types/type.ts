
export interface ModalData {
  id: string;
  visible: boolean;
  color: string;
}
export interface ModalProps {
  id: string;
  visible: boolean;
  paintDiv: (index: string, color: string) => void;

}
