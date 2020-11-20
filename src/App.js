import React, { useContext } from 'react'
import { DataContext } from './context'
import './App.css';
import {Switch, Route} from 'react-router-dom'

import Home from './pages/Home';
import Home2 from './pages/Home-v2';
import Home3 from './pages/Home-v3';
import About from './pages/About';
import ComingSoon from './pages/ComingSoon';
import Service from './pages/Service';
import SingleService from './pages/SingleService';
import Blog from './pages/Blog';
import SingleBlog from './pages/SingleBlog';
import Contact from './pages/Contact';
import Error from './pages/Error';
import Navbar from './components/Navbar';
import Search from './components/Search';
import Sidebar from './components/Sidebar';

function App() {

  const context = useContext( DataContext );
  const { search, offcanvas, handleSearch, handleOffcanvas } = context;

  return (
    <>
      {search ? <Search search={handleSearch} /> : ''}
      {offcanvas ? <Sidebar offcanvas={handleOffcanvas} /> : ''}
      <Navbar handler={{handleSearch, handleOffcanvas}} />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/home-v2" component={Home2} />
        <Route path="/home-v3" component={Home3} />
        <Route path="/about" component={About} />
        <Route path="/coming-soon" component={ComingSoon} />
        <Route path="/service" component={Service} />
        <Route path="/single-service" component={SingleService} />
        <Route path="/blog" component={Blog} />
        <Route path="/single-blog" component={SingleBlog} />
        <Route path="/contact" component={Contact} />
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;