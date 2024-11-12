import { useState, createContext } from "react";

interface ModalContextType {
  selectedShow: number
  setSelectedShow: (id: number) => void;
  detailModalOpen: boolean;
  setDetailModalOpen: (open: boolean) => void;
};

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [selectedShow, setSelectedShow] = useState<number>(0);
  const [detailModalOpen, setDetailModalOpen] = useState<boolean>(false);
  
  return (
    <ModalContext.Provider
      value={{
        selectedShow,
        setSelectedShow,
        detailModalOpen,
        setDetailModalOpen,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export { ModalContext };