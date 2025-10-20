import type { HeroCard } from "./src/interfaces/interfaces";
export const cards: HeroCard[] = [
  {
    image: "assets/icons/location.png",
    title: "Location",
    info: "Ahmedabad, India",
  },
  {
    image: "assets/icons/dollar-circle.png",
    title: "Price",
    info: "$1000 - $10,000",
  },
  {
    image: "assets/icons/house.png",
    title: "Type of Property",
    info: "Apartment",
  },
];

import type { ActionCardProps } from "./src/interfaces/interfaces";
export const actionCards: ActionCardProps[] = [
  {
    icon: "assets/icons/search.svg",
    title: "Search Apartment",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet tempus felis vitae.",
  },
  {
    icon: "assets/icons/select.svg",
    title: "Select Apartment",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet tempus felis vitae.",
    className: true,
  },
  {
    icon: "assets/icons/confirm.svg",
    title: "Confirm Apartment",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet tempus felis vitae.",
  },
];

import type { ApartmentCardProps } from "./src/interfaces/interfaces";
export const ApartmentCards: ApartmentCardProps[] = [
  {
    image: "assets/imgs/apartment1.png",
    price: "$300000",
    title: "Luxury Apartment in California",
    location: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
  },
  {
    image: "assets/imgs/apartment2.png",
    price: "$300000",
    title: "Luxury Apartment in California",
    location: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
  },
  {
    image: "assets/imgs/apartment3.png",
    price: "$300000",
    title: "Luxury Apartment in California",
    location: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
  },
  {
    image: "assets/imgs/apartment4.png",
    price: "$300000",
    title: "Luxury Apartment in California",
    location: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
  },
  {
    image: "assets/imgs/apartment5.png",
    price: "$300000",
    title: "Luxury Apartment in California",
    location: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
  },
  {
    image: "assets/imgs/apartment6.png",
    price: "$300000",
    title: "Luxury Apartment in California",
    location: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
  },
];

import type { FooterProps } from "./src/interfaces/interfaces";
export const FooterItems: FooterProps = {
  logo: "assets/imgs/logo.png",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet tempusfelis vitae sit est quisque.",
  columns: [
    {
      title: "Service",
      items: ["Payment & Tax", "Features", "View Booking", "Support"],
    },
    {
      title: "About",
      items: ["About us", "News", "Pricing", "New Property"],
    },
    {
      title: "Our Location",
      items: [
        "2972 Westheimer Rd. Santa Ana, Illinois 85486 ",
        [
          "assets/icons/facebook-fill.png",
          "assets/icons/twitter-fill.png",
          "assets/icons/linkedin-fill.png",
        ],
      ],
    },
  ],
  bottomLeft: "Copyright 2024 flora. All Rights Reserved",
  bottomRight: ["Terms & Conditions", "Privacy Policy"],
};

import type { Properties } from "./src/interfaces/interfaces";
export const PropertiesFilter: Properties[] = [
  {
    button: "Residential Property",
    images: [
      "assets/imgs/Img3D1.jpg",
      "assets/imgs/Img3D2.jpg",
      "assets/imgs/Img3D3.jpg",
    ],
  },
  {
    button: "Commercial Property",
    images: [
      "assets/imgs/Commercial-1.jpg",
      "assets/imgs/Commercial-2.jpg",
      "assets/imgs/Commercial-3.jpg",
    ],
  },
  {
    button: "Agriculture Property",
    images: [
      "assets/imgs/Agriculture-1.jpg",
      "assets/imgs/Agriculture-2.jpg",
      "assets/imgs/Agriculture-3.png",
    ],
  },
  {
    button: "Industrial Property",
    images: [
      "assets/imgs/Industrial-House-1.jpg",
      "assets/imgs/Industrial-House-2.jpg",
      "assets/imgs/Industrial-House-3.jpg",
    ],
  },
];
