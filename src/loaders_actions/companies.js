import { useState } from "react";
import { CompaniesAPI } from "../services/api/CompaniesAPI";

export const companiesLoader = async () => {
  const companies = await CompaniesAPI.getCompanies()
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err;
    });

  return companies;
};

export const companyLoader = async ({ params }) => {
  const companyLocation = await CompaniesAPI.getCompanyLocation({
    companyId: params.companyId,
  })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });

  const companyAssets = await CompaniesAPI.getCompanyAssets({
    companyId: params.companyId,
  })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err;
    });

  return companyLocation;
};
