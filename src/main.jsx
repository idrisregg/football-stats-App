import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import{createBrowserRouter,RouterProvider} from 'react-router-dom';
import App from './App.jsx';
import NotFound from './Screens/notfound.jsx';
import Bundesliga from './Screens/bundesliga.jsx';
import Seriea  from './Screens/seriea.jsx';
import Portugal from './Screens/portugal.jsx';
import Laliga from './Screens/laliga.jsx';
import Ligue1 from './Screens/ligue1.jsx';
import Epl from './Screens/epl.jsx';



const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/epl", element: <Epl /> },
  { path: "/seriea", element: <Seriea /> },
  { path: "/laliga", element: <Laliga /> },
  { path: "/ligue1", element: <Ligue1 /> },
  { path: "/portugal", element: <Portugal /> },
  { path: "/bundesliga", element: <Bundesliga /> },
  { path: "*", element: <NotFound /> } // catch-all 404
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
