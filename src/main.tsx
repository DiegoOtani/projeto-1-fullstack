import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ModalProvider } from './contexts/ModalContext.tsx'
import { SearchProvider } from './contexts/SearchContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SearchProvider>
      <ModalProvider>
        <App />
      </ModalProvider>
    </SearchProvider>
  </StrictMode>,
)
