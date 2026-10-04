import { BrowserRouter, Routes, Route } from "react-router";
import BaseLayout from '../../Publicsite/src/layout/BaseLayout';
import LoginPage from './pages/LoginPage'
import Homepage from "./pages/Homepage";
import GenrePage from "./pages/GenrePage";
import AddMoviePage from "./pages/AddMoviePage";

function App() {
 
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route element={<BaseLayout />} />
            <Route path="/movies" index element={<Homepage />} />
            <Route path="/genres" index element={<GenrePage />} />
            <Route path="/add" index element={<AddMoviePage />} />
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
