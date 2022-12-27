import './App.css';
import {  Route, Routes } from "react-router-dom";
import NotFound from '../common/NotFound'
import NavBar from '../common/NavBar';
import About from '../containers/about';
import Blog from '../containers/blog';
import Contact from '../containers/contact';
import Home from '../containers/home';


function App() {
  return (
    <div className="App" >
      <NavBar/>
        <Routes>
          <Route exact path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/blog" element={<Blog/>} />
            <Route path="/contact" element={<Contact/>} />
          <Route element={<NotFound/>}/>
        </Routes>
    </div>
  );
}

export default App;