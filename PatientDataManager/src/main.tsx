import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import DataManager from './DataManager'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <DataManager />
  </StrictMode>
)
