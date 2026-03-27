import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App, {Greeting} from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Greeting></Greeting>
    <App></App>
  </StrictMode>,
)
