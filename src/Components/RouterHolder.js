import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Explore from "../pages/Explore";
import Home from "../pages/Home";
import Shorts from "../pages/Shorts";
import Subscripitions from "../pages/Subscripitions";
import All from "../tagpages/All";

export default function RouterHandeler() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/explore" element={<Explore />}></Route>
          <Route path="/shorts" element={<Shorts />}></Route>
          <Route path="/subscripitions" element={<Subscripitions />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
