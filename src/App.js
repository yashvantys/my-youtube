import React from 'react';
import './App.css';
import Head from './components/Head';
import Body from './components/Body';
import { Provider } from 'react-redux';
import store from './utils/store';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainContainer from './components/MainContainer';
import WatchVideo from './components/WatchVideo';
import Demo from './components/Demo';
import Demo2 from './components/Demo2';

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />
      },
      {
        path: "/watch",
        element: <WatchVideo />
      },
      {
        path: "/demo",
        element: <><Demo />
          <Demo2 /></>
      }
    ]
  }

])

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <Head />
        <RouterProvider router={appRouter} />
        {/* 
    
    Header
    Body
      Sidebar
        Menu Items
      MainContainer
        Button List
        Video Container
          Video card
      
    */}
      </Provider>
    </div>
  )
}

export default App;
