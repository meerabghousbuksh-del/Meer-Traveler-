import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* BrowserRouter poori app ko routing ki power deta hai */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
)