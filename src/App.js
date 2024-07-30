import './App.css';
import About from './components/about/About';
import Chair from './components/chair/Chair';
import Header from './components/header/Header';
import Products from './components/products/Products';
import SHop from './components/shop/SHop';
import Lookbook from './components/lookbook/lookbook';
import Shopping from './components/shopping/Shopping';
import Category from './components/category/Category';
import Articles from './components/articles/Articles';
import Cards from './components/cards/Cards';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <About />
      <Products />
      <Chair />
      <SHop />
      <Lookbook />
      <Shopping />
      <Category />
      <Articles />
      <Cards />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;