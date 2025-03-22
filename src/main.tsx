import React from 'react'
import ReactDOM from 'react-dom/client'
import { Sketch } from './sketch'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
    <div className="canvas-container">
        <Sketch />
      </div>
    </React.StrictMode>,
)
