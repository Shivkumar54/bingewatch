import "./App.css"
import axios from "axios"
import { Routes, Route } from "react-router-dom"
import Navbar from "./Components/Layout/Navbar/Navbar"
import TVShows from "./Components/Pages/TVShows/TVShows"
import Movies from "./Components/Pages/Movies/Movies"
import Home from "./Components/Pages/Home/Home"
import Login from "./Components/Pages/Login/Login"
import Details from "./Components/DetailsPage/Details"
import TVDetail from "./Components/TVDetailPage/TVDetail"

axios.defaults.baseURL = "https://api.themoviedb.org/3"
axios.defaults.params = {}
axios.defaults.params["api_key"] = process.env.REACT_APP_API_KEY

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="/tvshows" element={<TVShows />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/login" element={<Login />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/tvdetails/:id" element={<TVDetail />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
