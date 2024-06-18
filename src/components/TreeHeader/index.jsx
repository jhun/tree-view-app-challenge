import { useCompanies } from "../../contexts/companies";
import { useFilters } from "../../contexts/filters";
import Button from "../Button";
import { Breadcrumb, ButtonFilters, TreeHeaderContainer } from "./styled";

const TreeHeader = () => {
  const { filterEnergy, setFilterEnergy, filterAlert, setFilterAlert } =
    useFilters();
  const { companies } = useCompanies();

  return (
    <TreeHeaderContainer>
      <Breadcrumb>
        <span
          style={{
            fontSize: "var(--h2-font-size)",
            fontWeight: "var(--font-semi-bold)",
          }}
        >
          Assets
        </span>{" "}
        <span style={{}}> / </span>
        {companies?.filter((company) => company.selected)[0]?.name}
      </Breadcrumb>
      <ButtonFilters>
        <Button
          name={"Energy Sensor"}
          type={"energy"}
          selected={filterEnergy}
          onClick={() => {
            setFilterEnergy(!filterEnergy);
          }}
        />
        <Button
          name={"Alert"}
          type={"alert"}
          selected={filterAlert}
          onClick={() => {
            setFilterAlert(!filterAlert);
          }}
        />
      </ButtonFilters>
    </TreeHeaderContainer>
  );
};

export default TreeHeader;
