import { useCallback, useEffect, useState } from "react";
import { ViewType } from "../types";
import { pathFromView, viewFromPath } from "../utils/routes";

export function useViewRouter() {
  const [currentView, setCurrentViewState] = useState<ViewType>(() =>
    viewFromPath(window.location.pathname),
  );

  const setCurrentView = useCallback((view: ViewType) => {
    const path = pathFromView(view);
    if (window.location.pathname !== path) {
      window.history.pushState({ view }, "", path);
    }
    setCurrentViewState(view);
  }, []);

  useEffect(() => {
    const path = pathFromView(currentView);
    if (window.location.pathname !== path) {
      window.history.replaceState({ view: currentView }, "", path);
    }
  }, [currentView]);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentViewState(viewFromPath(window.location.pathname));
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  return { currentView, setCurrentView };
}
