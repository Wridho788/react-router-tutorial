import { Routes, Route } from "react-router-dom";
import About from "./components/About";
import FeaturedProducts from "./components/FeaturedProducts";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import NewProducts from "./components/NewProducts";
import NotFound from "./components/NotFound";
import OrderSummary from "./components/OrderSummary";
import Products from "./components/Products";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="order-summary" element={<OrderSummary />} />
        <Route path="products" element={<Products />}>
          <Route path="featured" element={<FeaturedProducts />} />
          <Route path="new" element={<NewProducts />} />

        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>

  );
}

export default App;
