import { Outlet, useLoaderData, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { useEffect } from "react";
import { useCompanies } from "../../contexts/companies";

const Companies = () => {
  const companiesTemp = useLoaderData();
  const { companies, setCompanies } = useCompanies();
  const navigate = useNavigate();

  useEffect(() => {
    setCompanies(companiesTemp.sort((a, b) => (a.name > b.name ? 1 : -1)));
    navigate(`/companies/${companiesTemp[0].id}`);
  }, []);

  return <Outlet />;
};

export default Companies;
