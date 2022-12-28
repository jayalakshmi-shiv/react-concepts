import React from 'react'

import './App.css';
import { Route, Routes } from "react-router-dom";
import NotFound from '../common/NotFound'
import NavBar from '../common/NavBar';
import About from '../containers/about';
import Blog from '../containers/blog';
import Contact from '../containers/contact';
import Home from '../containers/home';
import PromptProvider from '../common/Context/promptProvider'
import NameProvider from '../common/Context/nameProvider'
function App() {
  return (
    <div className="App" >
      <PromptProvider>
        <NameProvider>
          <NavBar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/prompt" element={<Contact />} />
            <Route element={<NotFound />} />
          </Routes>
        </NameProvider>
      </PromptProvider>
    </div>
  );
}

export default App;