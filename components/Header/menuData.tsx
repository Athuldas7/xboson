import { Menu } from "@/types/menu";
import path from "path";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  
    {  id: 3,
      title: "CAAX",
      path: "/ProductCaax",
      newTab: false,
      // submenu: [
      //   {
      //     id: 31,
      //     title: "Earth",
      //     path: "/caax-earth",
      //     newTab: false,
      //   },
      //   {
      //     id: 32,
      //     title: "Space",
      //     path: "/caax-space",
      //     newTab: false,
      //   },
      // ],
      },
      {
        id: 50,
        title: "KrishiSat",
        path: '/krishisat',
        newTab: false,
      },
 {
    id: 2,
    title: "Enablers",
    path: "/about",
    newTab: false,
  },
  // {
  //   id: 38,
  //   title: "CAAX - Web Platform",
  //   path: "http://caax-website.42web.io/frontend_caax/caax_template/index.html",
  //   newTab: true,
  // },
  // {
  //   id: 39,
  //   title: "CAAX - Mobile App",
  //   path: "/caax-mobile",
  //   newTab: false,
  // },
  // {
  //   id: 42,
  //   title: "Contact Page",
  //   path: "/contact",
  //   newTab: false,
  // },
  // {
  //   id: 41,
  //   title: "CAAX - Mobile Farm",
  //   path: "/polyhouse-hardware",
  //   newTab: false,
  // },
  // {
  //   id: 3,
  //   title: "Products",
  //   newTab: false,
  //   submenu: [
  //     {
  //       id: 31,
  //       title: "CAAX - Web Platform",
  //       path: "/caax-web",
  //       newTab: false,
  //     },
  //     {
  //       id: 31,
  //       title: "CAAX - Mobile Platform",
  //       path: "/caax-mobile",
  //       newTab: false,
  //     },
  //     {
  //       id: 32,
  //       title: "CAAX - Polyhouse Hardware",
  //       path: "/polyhouse-hardware",
  //       newTab: false,
  //     },
  //   ],
  // },
  // {
  //   id: 4,
  //   title: "Marketplace",
  //   path: "/marketplace",
  //   newTab: false,
  // },
  // {
  //   id: 5,
  //   title: "Contact",
  //   path: "/contact",
  //   newTab: false,
  // },

  // {
  //   id: 4,
  //   title: "Pages",
  //   newTab: false,
  //   submenu: [
      // {
      //   id: 41,
      //   title: "About Page",
      //   path: "/about",
      //   newTab: false,
      // },
      // {
      //   id: 42,
      //   title: "Contact Page",
      //   path: "/contact",
      //   newTab: false,
      // },
      // {
      //   id: 43,
      //   title: "Blog Grid Page",
      //   path: "/blog",
      //   newTab: false,
      // },
      // {
      //   id: 44,
      //   title: "Blog Sidebar Page",
      //   path: "/blog-sidebar",
      //   newTab: false,
      // },
      // {
      //   id: 45,
      //   title: "Blog Details Page",
      //   path: "/blog-details",
      //   newTab: false,
      // },
      // {
      //   id: 46,
      //   title: "Sign In Page",
      //   path: "/signin",
      //   newTab: false,
      // },
      // {
      //   id: 47,
      //   title: "Sign Up Page",
      //   path: "/signup",
      //   newTab: false,
      // },
      // {
      //   id: 48,
      //   title: "Error Page",
      //   path: "/error",
      //   newTab: false,
      // },
    // ],
  // },
];
export default menuData;
