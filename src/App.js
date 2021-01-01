import React, { useContext } from 'react'
import { DataContext } from './context'
// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-modal-video/css/modal-video.min.css';
import './App.css';
import {Switch, Route} from 'react-router-dom'

import Home from './pages/Home';
import Home2 from './pages/Home-v2';
import Home3 from './pages/Home-v3';
import About from './pages/About';
import ComingSoon from './pages/ComingSoon';
import Services from './pages/Services';
import SingleService from './pages/SingleService';
import Blog from './pages/Blog';
import SingleBlog from './pages/SingleBlog';
import Contact from './pages/Contact';
import Error from './pages/Error';
import Search from './components/Search';
import Offcanvas from './components/Offcanvas';
import BackToTop from './components/BackToTop';

function App() {

  const context = useContext( DataContext );
  const { search, offcanvas, handleSearch, handleOffcanvas } = context;
  const offcanvasData = context.allData.offcanvas;

  return (
    <>
      {search ? <Search search={handleSearch} /> : ''}
      {offcanvas ? <Offcanvas data={offcanvasData} offcanvas={handleOffcanvas} /> : ''}

      <BackToTop />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/home-v2" component={Home2} />
        <Route path="/home-v3" component={Home3} />
        <Route path="/about" component={About} />
        <Route path="/coming-soon" component={ComingSoon} />
        <Route path="/service" component={Services} />
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