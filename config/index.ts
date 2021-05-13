import Axios from 'axios';

import data from './data';

const config = {
  siteData: data,
  siteUrl: "http://localhost:3000",
  apiUrl: "http://localhost:8000",
  name: "tool box",
  contactEmail: "us@toolbox.com",
  address: "somewhere in lagos, nigeria",
  phone: "080-3309-5524",
  cloudinaryCloudName: "toolbox-cloud",
  SEO: {
    title: "[title here] - Tool Box",
    description: "tool box description",
    keywords: "tool box keywords",
    image: "toolbox.png",
    name: "tool box",
    contactEmail: "us@toolbox.com",
    address: "somewhere in lagos, nigeria",
    phone: "080-3309-5114",
    author: "",
    authorEmail: "",
    themeColor: "",
    twitterUsername: "",
  },
};

const restInstance = Axios.create({
  baseURL: `${config.apiUrl}/api/v1/`,
});
restInstance.defaults.withCredentials = true;

export const restAPI = restInstance;
export default config;
