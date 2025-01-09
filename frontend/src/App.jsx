import { BrowserRouter as Router, Route, Routes } from "react-router";
import { ProductsList } from "./features/products/ProductsList";
import { Navbar } from "./components/Navbar";
import { CategoriesList } from "./features/categories/CategoriesList";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        {/* <CategoriesList /> */}
        <Routes>
          <Route path="/products" element={<ProductsList />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
