import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog/Blog';
import Error from './components/Error/Error';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Services from './components/Services/Services';
import Signup from './components/Signup/Signup';
import Main from './Layout/Main';


function App() {
  const router = createBrowserRouter([
   {
    path:'/',
    element:<Main></Main>,
    children: [ 
      {
        path:'/',
        element:<Home></Home>,
        loader: () => fetch("https://take-a-trip-server.vercel.app/homeDetails")
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/services",
        element: <Services></Services>,
        loader: () => fetch("https://take-a-trip-server.vercel.app/services")
      },
    ]
   },
   {
    path: "*",
    element: <Error></Error>,
  },

  ])
  return (
    <div >
     <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
