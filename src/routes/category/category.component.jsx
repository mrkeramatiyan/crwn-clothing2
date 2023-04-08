import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { useParams } from "react-router";
import ProductCard from "../../components/productCard/productCard.component";

import { CategoriesContext } from "../../contexts/categories.context";

import * as S from "./category.styles";

const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <>
      <S.CategoryTitle>{category}</S.CategoryTitle>
      <S.CategoryContainer>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </S.CategoryContainer>
    </>
  );
};

export default Category;
