import Navbar from "./components/navbar"

function App() {
  return (
    <div>
      <Navbar />
      <div>Hello World</div>
      <button className="bg-orange-500 p-1 rounded-md ml-10 border border-black hover:bg-orange-200 hover:border-green-500" >Submit</button>
    </div>
  )
}

export default App
