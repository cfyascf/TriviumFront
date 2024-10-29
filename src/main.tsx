import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import mainRouter from './routes/main.routes'
import {SpeedInsights} from '@vercel/speed-insights/react'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SpeedInsights/>
    <RouterProvider router={mainRouter}/>
  </StrictMode>,
)
