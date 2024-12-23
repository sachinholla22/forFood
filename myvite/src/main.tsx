import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

import Recepies from './MyComponents/Recepies'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    
    {/* <App /> */}
    <Recepies />
    
  </StrictMode>,
)
