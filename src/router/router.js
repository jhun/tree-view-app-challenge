import {
  Navigate,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

//pages
import Root from "../pages/Root";
import Home from "../pages/Home";
import Companies from "../pages/Companies";
import Company from "../pages/Company";

//loaders and actions
import { companiesLoader, companyLoader } from "../loaders_actions/companies";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Home />} />
      <Route path="/companies" loader={companiesLoader} element={<Companies />}>
        <Route path=":companyId" loader={companyLoader} element={<Company />} />
      </Route>
    </Route>
  )
);
