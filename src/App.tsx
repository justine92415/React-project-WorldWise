import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Product from './pages/Product';
import Pricing from './pages/Pricing';
import Home from './pages/Home';
import PageNotFound from './pages/PageNotFound';
import AppLayout from './pages/AppLayout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="product" element={<Product></Product>}></Route>
        <Route path="pricing" element={<Pricing></Pricing>}></Route>
        <Route path="app" element={<AppLayout></AppLayout>}></Route>
        <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
