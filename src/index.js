import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import SearchPage from './Components/Pages/SearchPage/searchPage'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import CollectionsAllPage from './Components/Pages/AllCollectionsPage/Collections_all_page';
import Login from './Components/Pages/LoginPage/Login';
import Register from './Components/Pages/LoginPage/Register';
import CommunityPage from './Components/Pages/Community/CommunityPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "search",
    element: <SearchPage/>,
  },
  {
    path: "collections/all",
    element: <CollectionsAllPage/>
  },
  {
    path: "login",
    element: <Login/>
  },
  {
    path: "register",
    element: <Register/>
  },
  {
    path: "community",
    element: <CommunityPage/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
