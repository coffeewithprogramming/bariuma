import { Routes,Route } from 'react-router-dom';
import Home from './Pages/Home';
import NavBar from './Components/Navbar';
import './App.css'

const App = () =>{
  return(
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path='/'  element = {<Home/>}/>
      </Routes>
  
  
    </div>
  )
}
export default App;