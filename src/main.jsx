import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,

} from "react-router-dom"
import Homepage from './Routes/Homepage.jsx'
import ListaPost from './Routes/ListaPost.jsx'
import Login from './Routes/Login.jsx'
import Registro from './Routes/Registro.jsx'
import PostSolo from './Routes/PostSolo.jsx'
import MainLayout from './layouts/MainLayout.jsx'


const router = createBrowserRouter([{
  
element: <MainLayout/>,
children:[
  {
  path: "/",
  element: <Homepage />, 

},
{path:"/post",
  element: <ListaPost />,

},

{path:"/:slug",
  element: <PostSolo />,

},
{path:"/login",
  element: <Login />,

},

{path:"/Registro",
  element: <Registro />,

}
]
}

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
