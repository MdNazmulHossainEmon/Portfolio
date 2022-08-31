import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './pages/Shared/Header/Header';
import NotFound from './pages/NotFound/NotFound';
import About from './pages/About/About';
import Blogs from './pages/Blogs/Blogs';
import Contact from './pages/Contact/Contact';
import Resume from './pages/Resume/Resume';
import Footer from './pages/Shared/Footer/Footer';
import Explore from './pages/Explore/Explore';
function App() {
  return (
    <div className="App">

   <BrowserRouter>
         <Header></Header>
          
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              
              <Route path="/about" element={<About />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/explore/:id" element={<Explore />} />




              <Route path="*" element={<NotFound />} />
              </Routes>
              <Footer></Footer>
        </BrowserRouter>
    </div>
  );
}

export default App;