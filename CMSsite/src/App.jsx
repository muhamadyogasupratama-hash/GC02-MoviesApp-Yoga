import { BrowserRouter, Routes, Route } from "react-router";
import BaseLayout from '../../Publicsite/src/layout/BaseLayout';
import LoginPage from './pages/LoginPage'
import Homepage from "./pages/Homepage";
import GenrePage from "./pages/GenrePage";
import AddMoviePage from "./pages/AddMoviePage";
import AddGenrePage from "./pages/AddGenrePage";
import AddUser from "./pages/AddUserPage";
import EditMoviePage from "./pages/EditMoviePage";
import EditGenrePage from "./pages/EditGenrePage";

function App() {
 
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route element={<BaseLayout />} />
            <Route path="/movies" index element={<Homepage />} />
            <Route path="/genres" index element={<GenrePage />} />
            <Route path="/addMovie" index element={<AddMoviePage />} />
            <Route path="/addGenre" index element={<AddGenrePage />} />
            <Route path="/addUser" index element={<AddUser />} />
            <Route path="/editMovie/:id" index element={<EditMoviePage />} />
            <Route path="/editGenre/:id" index element={<EditGenrePage />} />
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
