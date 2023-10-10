import React, { useState } from "react";
import { useThumbnailsListQuery } from "../../generated/graphql";

const ThumbnailsList = () => {
  const [offset, setOffset] = useState<number>(0); // Initial offset value
  const { data, refetch } = useThumbnailsListQuery({
    variables: { limit: 6, offset },
  });

  const prevImage = () => {
    setOffset((prevState) => (prevState === 1 ? 1 : prevState - 1));

    refetch();
  };

  const nextImage = () => {
    setOffset((prevState) => prevState + 1);
  };

  return (
    <div className="h-screen flex items-center justify-center bg-black ">
      <button
        onClick={prevImage}
        className="bg-customColor h-[48px] w-[48px] flex items-center justify-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="17"
          height="35"
          viewBox="0 0 17 35"
          fill="none"
        >
          <g clipPath="url(#clip0_1_3)">
            <path
              d="M16.3413 28.8838C16.7581 29.3167 16.992 29.9017 16.992 30.5113C16.992 31.1208 16.7581 31.7058 16.3413 32.1388C16.1358 32.3527 15.8911 32.5226 15.6213 32.6385C15.3516 32.7544 15.0622 32.8141 14.7699 32.8141C14.4776 32.8141 14.1882 32.7544 13.9184 32.6385C13.6487 32.5226 13.404 32.3527 13.1985 32.1388L0.650331 19.1319C0.233519 18.6989 -0.000326157 18.114 -0.000326157 17.5044C-0.000326157 16.8948 0.233519 16.3099 0.650331 15.8769L13.2091 2.86125C13.4146 2.64762 13.6592 2.47804 13.9287 2.36231C14.1982 2.24657 14.4874 2.18699 14.7795 2.18699C15.0715 2.18699 15.3607 2.24657 15.6302 2.36231C15.8998 2.47804 16.1443 2.64762 16.3498 2.86125C16.7666 3.29425 17.0005 3.87917 17.0005 4.48875C17.0005 5.09833 16.7666 5.68325 16.3498 6.11625L5.36358 17.5044L16.3413 28.8838Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_1_3">
              <rect
                width="17"
                height="35"
                fill="white"
                transform="matrix(-1 0 0 -1 17 35)"
              />
            </clipPath>
          </defs>
        </svg>
      </button>
      {!!data?.thumnail && (
        <div className="flex overflow-x-hidden">
          {data?.thumnail.map((item, index) => (
            <div className="flex flex-col m-3">
              <div
                key={index}
                className="relative bg-cover bg-no-repeat bg-center h-[266px] w-[200px] flex-shrink-0"
                style={{
                  backgroundImage: "url(" + item.url + ")",
                  borderRadius: "8px",
                }}
              >
                <button
                  className="absolute bottom-0 right-0  bg-customColor m-2 flex-shrink-0 items-center p-2"
                  style={{
                    borderRadius: "8px",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M13.333 10.667H18.667C19.0205 10.667 19.3596 10.8074 19.6096 11.0574C19.8596 11.3074 20 11.6465 20 12C20 12.3535 19.8596 12.6926 19.6096 12.9426C19.3596 13.1926 19.0205 13.333 18.667 13.333H13.333V18.667C13.333 19.0205 13.1926 19.3596 12.9426 19.6096C12.6926 19.8596 12.3535 20 12 20C11.6465 20 11.3074 19.8596 11.0574 19.6096C10.8074 19.3596 10.667 19.0205 10.667 18.667V13.333H5.333C4.97947 13.333 4.64041 13.1926 4.39043 12.9426C4.14044 12.6926 4 12.3535 4 12C4 11.6465 4.14044 11.3074 4.39043 11.0574C4.64041 10.8074 4.97947 10.667 5.333 10.667H10.667V5.333C10.667 4.97947 10.8074 4.64041 11.0574 4.39043C11.3074 4.14044 11.6465 4 12 4C12.3535 4 12.6926 4.14044 12.9426 4.39043C13.1926 4.64041 13.333 4.97947 13.333 5.333V10.667Z"
                      fill="white"
                    />
                  </svg>
                </button>
              </div>
              <p className="text-white text-center font-inte text-sm font-semibold leading-normal  mt-3">
                Coucou {item.id}
              </p>
            </div>
          ))}
        </div>
      )}

      <button
        onClick={nextImage}
        className="bg-customColor h-[48px] w-[48px] flex items-center justify-center "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="17"
          height="31"
          viewBox="0 0 17 31"
          fill="none"
        >
          <path
            d="M0.659158 3.93037C0.242345 3.49737 0.0085 2.91245 0.0085 2.30287C0.0085 1.69329 0.242345 1.10837 0.659158 0.675371C0.864687 0.461412 1.10941 0.29155 1.37915 0.175622C1.64889 0.0596927 1.93829 0 2.2306 0C2.5229 0 2.8123 0.0596927 3.08204 0.175622C3.35178 0.29155 3.5965 0.461412 3.80203 0.675371L16.3502 13.6822C16.767 14.1152 17.0008 14.7002 17.0008 15.3097C17.0008 15.9193 16.767 16.5042 16.3502 16.9372L3.79141 29.9529C3.58591 30.1665 3.34133 30.3361 3.07178 30.4518C2.80224 30.5675 2.51308 30.6271 2.22103 30.6271C1.92898 30.6271 1.63983 30.5675 1.37028 30.4518C1.10074 30.3361 0.85615 30.1665 0.650658 29.9529C0.233845 29.5199 0 28.935 0 28.3254C0 27.7158 0.233845 27.1309 0.650658 26.6979L11.6369 15.3097L0.659158 3.93037Z"
            fill="white"
          />
        </svg>
      </button>
    </div>
  );
};

export default ThumbnailsList;
