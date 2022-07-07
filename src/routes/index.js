import React from "react";

const MainPage = React.lazy(() => import("../pages/MainPage"));
const ComicsPage = React.lazy(() => import("../pages/ComicsPage"));
const SingleComicPage = React.lazy(() => import("../pages/SingleComicPage"));
const NoMatch = React.lazy(() => import("../pages/404"));


export const routes = [
    {path: '/', element: <MainPage/>},
    {path: '/comics', element: <ComicsPage/>},
    {path: '/comics/:comicId', element: <SingleComicPage/>},
    {path: '*', element: <NoMatch/>}
];
