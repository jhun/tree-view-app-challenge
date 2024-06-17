import {
  Outlet,
  useLoaderData,
  useNavigate,
  useParams,
} from "react-router-dom";
import { useEffect } from "react";
import { useCompanies } from "../../contexts/companies";

const Companies = () => {
  const companiesTemp = useLoaderData();
  const { companies, setCompanies } = useCompanies();
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    setCompanies(companiesTemp.sort((a, b) => (a.name > b.name ? 1 : -1)));
    if (!params.companyId) {
      navigate(`/companies/${companiesTemp[0].id}`);
    }
  }, []);

  return <Outlet />;
};

export default Companies;
