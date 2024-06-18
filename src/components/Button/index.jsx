import { ButtonContainer, ButtonIcon } from "./styled";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { FiAlertCircle } from "react-icons/fi";

const Button = ({ name, type, selected, onClick }) => {
  return (
    <ButtonContainer className={selected ? "selected" : ""} onClick={onClick}>
      {type === "energy" ? (
        <AiOutlineThunderbolt size={25} style={{ margin: "0px 5px 0px 0px" }} />
      ) : type === "alert" ? (
        <FiAlertCircle size={25} style={{ margin: "0px 5px 0px 0px" }} />
      ) : (
        <></>
      )}
      {name}
    </ButtonContainer>
  );
};

export default Button;
