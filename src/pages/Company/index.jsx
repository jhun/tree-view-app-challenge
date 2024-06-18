import { useEffect, useState } from "react";
import { Outlet, useLoaderData, useParams } from "react-router-dom";
import _ from "lodash";
import { useCompanies } from "../../contexts/companies";
import Tree from "../../components/Tree";
import { Box, Container } from "./styled";
import TreeHeader from "../../components/TreeHeader";
import { useFilters } from "../../contexts/filters";
import { filterNestedObjectsByString } from "../../utils/functions";
import AssetData from "../../components/AssetData";

const Company = () => {
  const companyData = useLoaderData();
  const params = useParams();
  const { companies, setCompanies } = useCompanies();
  const { filterEnergy, filterAlert, searchString } = useFilters();
  const [companyDataFiltered, setCompanyDataFiltered] = useState(companyData);

  useEffect(() => {
    setCompanies(
      companies.map((company) =>
        company.id === params.companyId
          ? { ...company, selected: true }
          : { ...company, selected: false }
      )
    );
  }, [params.companyId]);

  useEffect(() => {
    if (companies.length > 0 && companies[0].selected === undefined) {
      setCompanies(
        companies.map((company) =>
          company.id === params.companyId
            ? { ...company, selected: true }
            : { ...company, selected: false }
        )
      );
    }
  }, [companies]);

  useEffect(() => {
    let filteredData = _.cloneDeep(companyData);
    if (filterEnergy) {
      const searchStr = "energy";
      filteredData = filterNestedObjectsByString(filteredData, searchStr);
    }
    if (filterAlert) {
      const searchStr = "alert";
      filteredData = filterNestedObjectsByString(filteredData, searchStr);
    }
    if (searchString && searchString !== "") {
      const searchStr = searchString;
      filteredData = filterNestedObjectsByString(filteredData, searchStr);
    }
    if (!filteredData) {
      filteredData = [{ name: "No data found!" }];
    }
    setCompanyDataFiltered(filteredData);
  }, [companyData, filterEnergy, filterAlert, searchString]);

  return (
    <Container>
      <Box>
        <TreeHeader
          companyDataFiltered={companyDataFiltered}
          setCompanyDataFiltered={setCompanyDataFiltered}
        />
        <Tree treeData={companyDataFiltered} />
        <AssetData />
      </Box>
    </Container>
  );
};

export default Company;
