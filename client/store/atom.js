import { atom } from "recoil";

export const BannerData = atom({
  key: "BannerData",
  default: {
    Title: "",
    Description: "",
    link: "",
    ImageUrl: "",
  },
});

export const BannerSwitch = atom({
  key: "BannerSwitch",
  default: true,
});

export const ProductData = atom({
  key: "ProductData",
  default: {
    title: "",
    price: "",
    ImageUrl: "",
  },
});
