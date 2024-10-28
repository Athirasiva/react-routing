import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About';
import Contact from './Components/Contact'
import Header from './Components/Header';
import Home from './Components/Home';
import Images from './Components/Images';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/images' element={<Images/>}/>
      </Routes>
    </div>
  );
}

export default App;
