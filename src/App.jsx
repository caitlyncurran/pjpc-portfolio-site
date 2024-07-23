import { BrowserRouter, Link } from "react-router-dom"
import Pages from "./pages/Pages"
import Header from "./components/Header"
import Footer from "./components/Footer"

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Pages/>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
