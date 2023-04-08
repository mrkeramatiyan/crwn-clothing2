import { useNavigate } from "react-router";
import * as S from "./directory-item.styles";

var DirectoryItem = ({ category }) => {
  var { id, title, imageUrl, route } = category;
  const navigate = useNavigate();
  const onNavigateHandler = () => navigate(route);

  return (
    <S.DirectoryItemContainer key={id} onClick={onNavigateHandler}>
      <S.BackgroundImage imageUrl={imageUrl} />
      <S.Body>
        <h2>{title.toUpperCase()}</h2>
        <p>Shop Now</p>
      </S.Body>
    </S.DirectoryItemContainer>
  );
};

export default DirectoryItem;
