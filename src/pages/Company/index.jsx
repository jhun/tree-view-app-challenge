import { useEffect } from "react";
import { Outlet, useLoaderData, useParams } from "react-router-dom";
import { useCompanies } from "../../contexts/companies";

const Company = () => {
  const companyData = useLoaderData();

  useEffect(() => {
    console.log(companyData);
  }, []);

  return <Outlet />;
};

export default Company;
