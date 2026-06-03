import { ViewType } from "../types";

export const VIEW_PATHS: Record<ViewType, string> = {
  "nikhil-home": "/",
  "studio-home": "/studio",
  "selected-works": "/work",
  about: "/about",
  contact: "/contact",
};

const PATH_VIEWS = Object.entries(VIEW_PATHS).reduce(
  (acc, [view, path]) => {
    acc[path] = view as ViewType;
    return acc;
  },
  {} as Record<string, ViewType>,
);

export function viewFromPath(pathname: string): ViewType {
  return PATH_VIEWS[pathname] ?? "nikhil-home";
}

export function pathFromView(view: ViewType): string {
  return VIEW_PATHS[view];
}
