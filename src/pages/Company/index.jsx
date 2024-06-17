import { useEffect, useState } from "react";
import { Outlet, useLoaderData, useParams } from "react-router-dom";
import { useCompanies } from "../../contexts/companies";
import Tree from "../../components/Tree";
import { Box, Container } from "./styled";
import TreeHeader from "../../components/TreeHeader";

const Company = () => {
  const companyData = useLoaderData();
  const params = useParams();
  const { companies, setCompanies } = useCompanies();
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
    setCompanyDataFiltered(companyData);
  }, [companyData]);

  return (
    <Container>
      <Box>
        <TreeHeader
          companyDataFiltered={companyDataFiltered}
          setCompanyDataFiltered={setCompanyDataFiltered}
        />
        <Tree treeData={companyDataFiltered} />
      </Box>
    </Container>
  );
};

export default Company;
