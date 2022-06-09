import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// hookyung's 컴포넌트
import LoginHooKyung from './pages/hookyung/Login/Login';
import MainHooKyung from './pages/hookyung/Main/Main';

// hyunbeom's 컴포넌트
import LoginHyunBeom from './pages/hyunbeom/Login/Login';
import MainHyunBeom from './pages/hyunbeom/Main/Main';

// jihyun's 컴포넌트
import LoginJiHyun from './pages/jihyun/Login/Login';
import MainJiHyun from './pages/jihyun/Main/Main';

// jrg's 컴포넌트
import LoginJrg from './pages/jrg/Login/Login';
import MainJrg from './pages/jrg/Main/Main';

// yeji's 컴포넌트
import LoginYeJi from './pages/yeji/Login/Login';
import MainYeJi from './pages/yeji/Main/Main';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login-hookyung" element={<LoginHooKyung />} />
        <Route path="/main-hookyung" element={<MainHooKyung />} />

        <Route path="/login-hyunbeom" element={<LoginHyunBeom />} />
        <Route path="/main-hyunbeom" element={<MainHyunBeom />} />

        <Route path="/login-jihyun" element={<LoginJiHyun />} />
        <Route path="/main-jihyun" element={<MainJiHyun />} />

        <Route path="/login-jrg" element={<LoginJrg />} />
        <Route path="/main-jrg" element={<MainJrg />} />

        <Route path="/login-yeji" element={<LoginYeJi />} />
        <Route path="/main-yeji" element={<MainYeJi />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
