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
  let companyLocation = await CompaniesAPI.getCompanyLocation({
    companyId: params.companyId,
  })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err;
    });

  companyLocation.sort((a, b) => (a.parentId !== null ? 1 : -1));

  const companyAssets = await CompaniesAPI.getCompanyAssets({
    companyId: params.companyId,
  })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err;
    });

  ///// Handle data /////

  let assetsClassification = companyAssets.reduce((result, obj, index) => {
    (result[obj.sensorType] = result[obj.sensorType] || []).push(obj);
    return result;
  }, {});
  const assetsArray = assetsClassification.null;
  delete assetsClassification.null;
  const componentsArray = [].concat(...Object.values(assetsClassification));

  assetsArray.map((asset) => {
    if (asset.children === undefined) {
      asset.children = [];
    }
    componentsArray.map((component) => {
      if (component.parentId === asset.id) {
        asset.children.push(component);
      }
    });
  });

  companyLocation.map((loc) => {
    if (loc.children === undefined) {
      loc.children = [];
    }
    componentsArray.map((component) => {
      if (component.locationId === loc.id) {
        loc.children.push(component);
      }
    });
    assetsArray.map((asset) => {
      if (asset.locationId === loc.id) {
        loc.children.push(asset);
      }
    });
  });

  const groupedLocationsObj = companyLocation.reduce((result, obj, index) => {
    (result[obj.parentId] = result[obj.parentId] || []).push(obj);
    return result;
  }, {});

  const treeArray = groupedLocationsObj.null;
  delete groupedLocationsObj["null"];

  treeArray.map((loc) => {
    for (const [key, value] of Object.entries(groupedLocationsObj)) {
      if (loc.id === key) {
        loc.children = value;
      }
    }
  });

  return treeArray;
};
