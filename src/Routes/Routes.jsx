import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../Components/Home";
import MyListings from "../../Pages/MyListings";
import BrowseListings from "../../Pages/BrowseListings";
import FindRoommate from "../../Pages/AddToFindRoommate";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        path: "/",
        index: true,
        Component: Home,
      },
      {
        path: "my-listings",
        Component: MyListings,
      },
      {
        path: "browse-listings",
        Component: BrowseListings,
      },
      {
        path: "add-to-find-roommate",
        Component: FindRoommate,
      },
    ],
  },
]);
