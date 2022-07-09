import { Routes, Route } from "react-router-dom";
import CategoriesPreview from "../category-preview/category-preview";
import Category from "../../components/category-component/category-component";
import "./shop-style.scss";

const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;

//import ProductCard from "../../components/product-card/product-card";
// const products = categoriesMap[title];
// const { categoriesMap } = useContext(CategoriesContext);
//products
//         return;
//         <CategoryPreview key={title} title={title} products={products} />;

/* {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))} */

// <div key={title}>
//   <h2> {title} </h2>
//   <div className="products-container">
//     {products
//       .filter((product, item) => item < 4)
//       .map((product) => (
//         <ProductCard key={product.id} product={product} />
//       ))}
//   </div>
// </div>
