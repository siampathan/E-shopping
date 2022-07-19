import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase";
import { setCategories } from "../../store/categories/category-action";
import CategoriesPreview from "../category-preview/category-preview";
import Category from "../../components/category-component/category-component";
import "./shop-style.scss";

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoriesArray = await getCategoriesAndDocuments();
      console.log(categoriesArray);
      dispatch(setCategories(categoriesArray));
    };
    getCategoriesMap();
  }, []);

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
