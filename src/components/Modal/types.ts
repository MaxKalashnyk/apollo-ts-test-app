import { Styles } from 'react-modal';

export interface IProps {
  isOpen: boolean;
  modalContents: () => React.ReactNode;
  onClose?: () => void;
  customStyles?: Styles;
}
