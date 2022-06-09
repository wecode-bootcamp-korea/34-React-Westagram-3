import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Router = () => {
    return (
        <BrowserRouter>
        <Routes>
          <Route path="/" element={}></Route>
          <Route path="/main" element={}></Route>
        </Routes>
      </BrowserRouter>
    );
}

export default Router;
