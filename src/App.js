import Home from './pages/Main/home';
import logo from './logo.svg';
import './App.css';
import $ from 'jquery';
import React, { useEffect , useState , useRef} from 'react';
import './assets/css/style.css'
import { BrowserRouter  as Router, Route, Routes } from 'react-router-dom';
import ProductDetails from './pages/ItemDetails/ProductDetails';
import productsData from './items/item_12.json';
import ScrollToTop from './pages/Sections/AutoScrollToTop';
import ViewCart from './pages/ViewCart/ViewCart';
import MenuMain from './pages/MenuMain/MenuMain';

function App() {
  const [shouldReload, setShouldReload] = useState(true);
  const pointerRingRef = useRef(null);
  const pointerDotRef = useRef(null);
  useEffect(() => {
    const hasReloaded = localStorage.getItem('hasReloaded');

    if (shouldReload && !hasReloaded) {
      // Reload the page on component mount (effectively on each navigation)
      window.location.reload();
      localStorage.setItem('hasReloaded', 'true');
    }
  }, [shouldReload]);

  useEffect(() => {
    const isAndroid = /Android/i.test(navigator.userAgent);

    if (isAndroid) {
      const pointerRingElement = document.getElementById('pointer-ring');

      // Check if the element exists before attempting to hide it
      if (pointerRingElement) {
        pointerRingElement.style.display = 'none';
      }
  
      // Alternatively, using a ref
      if (pointerRingRef.current) {
        pointerRingRef.current.style.display = 'none';
      }
      const pointerdotElement = document.getElementById('pointer-dot');

    // Check if the element exists before attempting to hide it
    if (pointerdotElement) {
      pointerdotElement.style.display = 'none';
    }

    // Alternatively, using a ref
    if (pointerDotRef.current) {
      pointerDotRef.current.style.display = 'none';
    }
    } else {
      console.log('Not running on Android');
      // Perform actions for other platforms
    }
  }, []);
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home products={productsData} />} />
        <Route exact path="/product/:productId" element={<ProductDetails products={productsData} />} />
        <Route path="/ProductDescription" element={<ProductDetails products={productsData} />} />
        <Route path="/Cart" element={<ViewCart />} />
        <Route path="/Menu" element={<MenuMain productsList={productsData} />} />
      </Routes>
    </Router>
  );
}

export default App;
