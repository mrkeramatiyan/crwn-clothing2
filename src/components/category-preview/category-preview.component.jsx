import ProductCard from "../productCard/productCard.component";
import * as S from "./category-preview.styles";

const CategoryPreview = ({ title, products }) => {
  return (
    <S.CategoryPreviewContainer>
      <h2>
        <S.Titel to={title}>{title.toUpperCase()}</S.Titel>
      </h2>
      <S.Preview>
        {products
          .filter((_, index) => index < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </S.Preview>
    </S.CategoryPreviewContainer>
  );
};

export default CategoryPreview;
