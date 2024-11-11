import './App.css'
import MovieSection from './Sections/MoviesSection'
import DetailsModal from './components/DetailsModal'
import ReactDOM from 'react-dom';
import { useContext } from 'react';
import { ModalContext } from './contexts/ModalContext';

function App() {
  const context = useContext(ModalContext);

  if (!context) throw new Error('Context problem');

  const { detailModalOpen, setDetailModalOpen } = context;

  const handleCloseModal = () => {
    setDetailModalOpen(false);
  }

  return <main>
    <MovieSection />
    {detailModalOpen && (
    ReactDOM.createPortal(
      <DetailsModal onClick={handleCloseModal}/>,
      document.getElementById('modal-root') as HTMLElement
    )
  )}
  </main>
}

export default App
