import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from "./Pages/Header";
import Home from './Pages/Home';
import Cart from './Pages/Cart';


function App() {
  return (
    <div className="App">

      <Header></Header>

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/cart" element={<Cart></Cart>}></Route>
      </Routes>


    </div>
  );
}

export default App;
