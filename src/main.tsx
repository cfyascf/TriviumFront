import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import { RouterProvider } from 'react-router-dom'
import mainRouter from './routes/main.routes'
import { ToastContainer } from 'react-toastify'
import { SpeedInsights } from '@vercel/speed-insights/react';
import { GameProvider } from './contexts/gameContext';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GameProvider>
      <SpeedInsights/>
      <ToastContainer />
      <RouterProvider router={mainRouter}/>
    </GameProvider>
  </StrictMode>,
)
