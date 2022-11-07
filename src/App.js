import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog/Blog';
import Error from './components/Error/Error';
import Home from './components/Home/Home';
import Main from './Layout/Main';

function App() {
  const router = createBrowserRouter([
   {
    path:'/',
    element:<Main></Main>,
    children: [ 
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
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
