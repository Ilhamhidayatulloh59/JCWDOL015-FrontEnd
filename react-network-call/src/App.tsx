import { Route, Routes } from "react-router-dom"
import Navbar from "./components/navbar"
import Users from "./pages/user"
import CreateUser from "./pages/create"

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={ <Users /> } />
        <Route path="/create" element={ <CreateUser /> } />
      </Routes>
    </>
  )
}

export default App
