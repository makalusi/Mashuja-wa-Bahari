import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
<<<<<<< HEAD
import { BrowserRouter } from 'react-router-dom'
=======
>>>>>>> da0dd3e4979742688a8eb74898452fc6e16f7275
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
<<<<<<< HEAD
    <BrowserRouter>
      <App />
    </BrowserRouter>
=======
    <App />
>>>>>>> da0dd3e4979742688a8eb74898452fc6e16f7275
  </StrictMode>,
)
