import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Lazy-loaded components
const LazyHome = lazy(() => import("../pages/homePage/Home"));
const LazyRegister = lazy(() => import("../pages/registerPage/Register"));
const LazyLogin = lazy(() => import("../pages/loginPage/Login"));
const LazyMyVideosPage = lazy(() =>
  import("../pages/myVideosPage/MyVideosPage")
);
const LazySearchedList = lazy(() =>
  import("../pages/searchListPage/searchedList")
);
const LazyVideoPage = lazy(() => import("../pages/videoPage/VideoPage"));
const LazyPageNotFound = lazy(() =>
  import("../components/PageNotFound")
);

const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback="Loading...">
              <LazyHome />
            </Suspense>
          }
        />
        <Route
          path="/register"
          element={
            <Suspense fallback="Loading...">
              <LazyRegister />
            </Suspense>
          }
        />
        <Route
          path="/myvideos"
          element={
            <Suspense fallback="Loading...">
              <LazyMyVideosPage />
            </Suspense>
          }
        />
        <Route
          path="/searchlist"
          element={
            <Suspense fallback="Loading...">
              <LazySearchedList />
            </Suspense>
          }
        />
        <Route
          path="/searchlist/video/:videoId"
          element={
            <Suspense fallback="Loading...">
              <LazyVideoPage />
            </Suspense>
          }
        />
        <Route
          path="*"
          element={
            <Suspense fallback="Loading...">
              <LazyPageNotFound />
            </Suspense>
          }
        />
        <Route
          path="/login"
          element={
            <Suspense fallback="Loading...">
              <LazyLogin />
            </Suspense>
          }
        />
        <Route
          path="/home/video/:videoId"
          element={
            <Suspense fallback="Loading...">
              <LazyVideoPage />
            </Suspense>
          }
        />
      </Routes>
      <ToastContainer theme="dark" />
    </BrowserRouter>
  );
};

export default AppRouter;
