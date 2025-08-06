import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

const rootElement = document.getElementById('root')

if (!rootElement) {
  throw new Error('Root element not found')
}

try {
  createRoot(rootElement).render(
    <StrictMode>
      <App />
    </StrictMode>,
  )
} catch (error) {
  console.error('Failed to render app:', error)
  rootElement.innerHTML = `
    <div style="
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%);
      color: #f8fafc;
      font-family: Inter, sans-serif;
      text-align: center;
      padding: 2rem;
    ">
      <div>
        <h1 style="font-size: 2rem; margin-bottom: 1rem;">CV-Nettisivu</h1>
        <p>Loading...</p>
      </div>
    </div>
  `
}
