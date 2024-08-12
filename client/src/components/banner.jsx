import React, { usestate, useEffect } from "react";

import { Counter } from "./counter";

const Banner = () => {
  const [bannerData, setBannerData] = useState({});

  useEffect(() => {
    fetch("/api/banner")
      .then((res) => res.json())
      .then((data) => {
        setBannerData(data[0]);
      });
  }, []);

  const imageUrl = bannerData.ImageUrl ? bannerData.ImageUrl : "/banner.jpg";

  return (
    <>
      <section
        className="bg-center bg-no-repeat   bg-blend-multiply"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div className="px-4  max-w-screen-xl  py-20 lg:py-36 md:w-[50%] ">
          <h1 className="text-4xl font-bold  text-white text-center my-6">
            {bannerData.title ? bannerData.title : "Google Pixel"}
          </h1>
          <h1 className="text-2xl font-bold  text-white text-center truncate">
            {bannerData.description
              ? bannerData.description
              : "Get ready for a whole new era of phones."}
          </h1>

          <Counter />

          <div className="flex justify-center mt-6">
            <a
              href={
                bannerData.link
                  ? bannerData.link
                  : "https://store.google.com/us/category/phones?hl=en-US"
              }
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4  focus:ring-blue-900"
            >
              Buy
              <svg
                className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
