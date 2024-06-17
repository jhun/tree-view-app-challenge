import { api } from "./configs/axiosConfigs";
import { defineCancelApiObject } from "./configs/axiosUtils";

export const CompaniesAPI = {
  getCompanies: async function (cancel = false) {
    const response = await api.request({
      url: `/companies`,
      method: "GET",
      signal: cancel
        ? cancelApiObject[this.get.name].handleRequestCancellation().signal
        : undefined,
    });
    return response;
  },
  getCompanyLocation: async function ({ companyId }, cancel = false) {
    const response = await api.request({
      url: `/companies/${companyId}/locations`,
      method: "GET",
      signal: cancel
        ? cancelApiObject[this.get.name].handleRequestCancellation().signal
        : undefined,
    });

    return response;
  },
  getCompanyAssets: async function ({ companyId }, cancel = false) {
    const response = await api.request({
      url: `/companies/${companyId}/assets`,
      method: "GET",
      signal: cancel
        ? cancelApiObject[this.get.name].handleRequestCancellation().signal
        : undefined,
    });

    return response;
  },
};

// defining the cancel API object for ProductAPI
const cancelApiObject = defineCancelApiObject(CompaniesAPI);
