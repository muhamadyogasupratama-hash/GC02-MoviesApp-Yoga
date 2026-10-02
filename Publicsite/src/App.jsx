import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import { BrowserRouter, Routes, Route } from "react-router";
import Home from './pages/Home';
import DetailMovie from './pages/DetailMovie';

function App() {

  return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:id" element={<DetailMovie />} />
          </Routes>
        </BrowserRouter>
  </>

  )
}

export default App
