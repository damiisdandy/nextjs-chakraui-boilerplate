import { buildUrl, extractPublicId, setConfig } from 'cloudinary-build-url';
import dayjs, { OpUnitType, QUnitType } from 'dayjs';

import config from './index';

setConfig({
  cloudName: config.cloudinaryCloudName,
});

export const dateDiff: (
  firstDate: Date,
  secondDate: Date,
  type?: QUnitType | OpUnitType
) => number = (firstDate, secondDate, type = "day") => {
  return Math.abs(dayjs(firstDate).diff(secondDate, type));
};

export const cloudinaryBuildUrl = (
  type: "TINY" | "SMALL" | "MEDIUM" | "LARGE" | "PLACEHOLDER",
  url: string
) => {
  const publicId = extractPublicId(url);
  switch (type) {
    case "TINY":
      return buildUrl(publicId, {
        transformations: {
          resize: {
            width: 100,
            height: 100,
            type: "thumb",
          },
        },
      });
    case "SMALL":
      return buildUrl(publicId, {
        transformations: {
          resize: {
            width: 150,
            height: 150,
            type: "fill",
          },
        },
      });
    case "MEDIUM":
      return buildUrl(publicId, {
        transformations: {
          resize: {
            width: 200,
            height: 200,
            type: "fill",
          },
        },
      });
    case "LARGE":
      return buildUrl(publicId, {
        transformations: {
          resize: {
            width: 300,
            height: 300,
            type: "fill",
          },
        },
      });
    case "PLACEHOLDER":
      return buildUrl(publicId, {
        transformations: {
          resize: {
            width: 200,
            height: 200,
            type: "fill",
          },
          effect: "blur:1000",
          quality: 1,
        },
      });
    default:
      return url;
  }
};

export const copyToClipboard: (value: any) => void = (value) => {
  const tempInput = document.createElement("input");
  tempInput.value = value;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand("copy");
  document.body.removeChild(tempInput);
};

export const getCookie: (name: string) => string = (name) => {
  let cookies = document.cookie;
  if (!cookies || !cookies.includes(name)) {
    return "/";
  } else {
    //@ts-ignore
    return cookies
      .split("; ")
      .find((row) => row.startsWith(name))
      .split("=")[1];
  }
};

export const setCookie: (name: string, value: any, expire?: number) => void = (
  name,
  value,
  expire = 0.015
) => {
  const date = new Date();
  date.setTime(date.getTime() + expire * 24 * 60 * 60 * 1000);
  const expires = `expires=${date.toUTCString()};`;
  typeof window !== "undefined" &&
    (document.cookie = `${name}=${value};${expires};path=/`);
};

export const deleteCookie: (name: string) => void = (name) => {
  const date = new Date(1);
  const expires = `expires=${date.toUTCString()};`;
  typeof window !== "undefined" &&
    (document.cookie = `${name}=;${expires};path=/`);
};
