import { RouteObject, createBrowserRouter } from "react-router-dom";
import { Page } from "./design-system/atoms/Page";
import { Dashboard } from "./pages/Dashboard";
import { forOwn } from "lodash";

export enum PageKeyEnum {
  HOME = "HOME",
}

export const pageConfiguration = {
  [PageKeyEnum.HOME]: {
    keyEnum: PageKeyEnum.HOME,
    path: "/",
    label: "HomePage",
    Content: <Dashboard />,
    withNavbar: true,
  },
};

const pageRouteList: RouteObject[] = [];

forOwn(pageConfiguration, (value, _key) => {
  pageRouteList.push({
    path: value.path,
    element: <Page withNavBar={value.withNavbar} Content={value.Content} />,
  });
});

export const router = createBrowserRouter(pageRouteList);
