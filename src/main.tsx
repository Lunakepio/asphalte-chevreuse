import React from 'react'
import ReactDOM from 'react-dom/client'
import { Sketch } from './sketch'
import './index.css'
import { Ui } from './components/UI'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
    <div className="canvas-container">
        <Sketch />
        <Ui/>
      </div>
    </React.StrictMode>,
)
