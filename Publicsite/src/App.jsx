import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import { BrowserRouter, Routes, Route } from "react-router";
import Home from './pages/Home';
import DetailMovie from './pages/DetailMovie';
import BaseLayout from './layout/BaseLayout';

function App() {

  return (
      <>
        <BrowserRouter>
          <Routes>
            <Route element={<BaseLayout />}>
              <Route path="/" index element={<Home />} />
              <Route path="/:id" index element={<DetailMovie />} />
            </Route>
          </Routes>
        </BrowserRouter>
  </>

  )
}

export default App
