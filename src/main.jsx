import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import 'animate.css';
import 'remixicon/fonts/remixicon.css'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

import App from './App.jsx'
import { RouterProvider } from 'react-router-dom';
import { router } from './routers/router.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <PreLoader/> */}
    <div className='container mx-auto px-6' id='beranda'>
    <RouterProvider router={router}/>
    </div>
  </StrictMode>,
)
