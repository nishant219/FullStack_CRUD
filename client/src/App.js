import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter,Route, Routes} from "react-router-dom";

import Create from './components/Create';
import Read from './components/Read';
import Update from './components/Update';


function App() {

  return (
    <div className="App">

<BrowserRouter>
    <Navbar/>
  <Routes>
    <Route exact path="/" element={ <Create/> } />
    <Route exact path="/read" element={ <Read/> } />
    <Route exact path="/update" element={ <Update/> } />
  </Routes>
</BrowserRouter>

      <button className="btn btn-success">	&#10084; </button>

    </div>
  );
}


export default App;
