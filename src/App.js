import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import AddService from './components/AddService/AddService';
import Blog from './components/Blog/Blog';
import Error from './components/Error/Error';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import MyReviews from './components/MyReviews/MyReviews';
import Services from './components/Services/Services';
import Signup from './components/Signup/Signup';
import Spinner from './components/Spinner/Spinner';
import Main from './Layout/Main';
import ServiceDetails from './ServiceDetails/ServiceDetails';


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
        path: "/myReviews",
        element: <MyReviews></MyReviews>,
      },
      {
        path: "/addService",
        element:<AddService></AddService>,
      },
      {
        path: "/services",
        element: <Services></Services>,
        loader: () => fetch("https://take-a-trip-server.vercel.app/services")
      },
      {
        path: "/services/:id",
        loader: ({ params }) =>
          fetch(`https://take-a-trip-server.vercel.app/services/${params.id}`),
        element: <ServiceDetails></ServiceDetails>,
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
     <RouterProvider fallbackElement={<Spinner></Spinner>} router={router}></RouterProvider>
    </div>
  );
}

export default App;
