import { BrowserRouter as Router, Route, Routes } from "react-router";
import { ProductsListWithSearch } from "./features/products/ProductsListWithSearch";
import { Navbar } from "./components/Navbar";
import { CategoriesList } from "./features/categories/CategoriesList";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        {/* <CategoriesList /> */}
        <Routes>
          <Route path="/products" element={<ProductsListWithSearch />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
