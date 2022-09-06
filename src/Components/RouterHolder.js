import React from 'react'

import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import App from '../App';
import Explore from '../pages/Explore';




export default function RouterHandeler() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App/>}>
          </Route>
          <Route path="/Explore" element={<Explore/>}>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
