import { createRoot } from 'react-dom/client'
import { products } from './data/data.js'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App products={products} />
  </BrowserRouter>
)
