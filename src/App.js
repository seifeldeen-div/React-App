import "./App.css"
import Navbar from "./Components/Navbar"
import Content from "./Components/Content"
import SideBar from "./Components/SideBar"


function App() {
  return (
    <>
      <Navbar />
      <div className="row">
        <div className="col-2 sideBar">
          <SideBar />
        </div>
        <div className="col-10">
          <Content />
        </div>
      </div>
    </>
  )
}

export default App