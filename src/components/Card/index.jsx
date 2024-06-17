import { useNavigate } from "react-router-dom";
import {
  CardComponent,
  CardContainer,
  CardDescription,
  CardImage,
  CardTitle,
} from "./styled";

const Card = ({ link, title, description, image }) => {
  const navigate = useNavigate();
  return (
    <CardComponent onClick={() => navigate(link)}>
      {image !== null ? <CardImage src={image} alt="Card image" /> : <></>}
      <CardContainer>
        <CardTitle>
          <b>{title}</b>
        </CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardContainer>
    </CardComponent>
  );
};

export default Card;
