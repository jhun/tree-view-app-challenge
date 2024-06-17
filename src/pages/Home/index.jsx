import { Outlet } from "react-router-dom";
import Card from "../../components/Card";
import assetsIcon from "../../assets/images/assets-icon.svg";
import { Container } from "./styled";

const Home = () => {
  return (
    <Container>
      <Card
        link={"/companies"}
        image={assetsIcon}
        title={"Units Assets"}
        description={"Access to all Unit´s Assets Tree"}
      />
    </Container>
  );
};

export default Home;
