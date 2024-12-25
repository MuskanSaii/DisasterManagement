import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {Toaster} from 'react-hot-toast'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './providers/AuthProvider.tsx'
createRoot(document.getElementById('root')).render(
<AuthProvider>

    <BrowserRouter>
<Toaster/>
<App/>
</BrowserRouter>
</AuthProvider>
)
