import { createRoot } from 'react-dom/client'
import { products } from './data/data.js'
import App from './App.jsx'
import './index.css'


createRoot(document.getElementById('root')).render(
  <App products={products} />
)
