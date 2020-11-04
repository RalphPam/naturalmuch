import './App.css';
import Navbar from './components/Navbar'
import Main from './components/Main'
import Features from './components/Features'
import FeaturedProducts from './components/FeaturedProducts'
import Reviews from './components/Reviews'
import Blogs from './components/Blogs'
import Footer from './components/Footer'

function App() {
  return (
    <div className='app'>
      <div className='nav-main-container'>
        <Navbar />
        <Main />
        <Features />
      </div>
      <FeaturedProducts />
      <Reviews />
      <Blogs />
      <Footer />
    </div>
  );
}

export default App;
