import { BrowserRouter, Routes, Route } from "react-router";
import BaseLayout from '../../Publicsite/src/layout/BaseLayout';
import LoginPage from './pages/LoginPage'
import Homepage from "./pages/Homepage";

function App() {
 
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route element={<BaseLayout />} />
            <Route path="/movies" index element={<Homepage />} />
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
