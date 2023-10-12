import { FC, lazy } from 'react';

import { Navigate, useRoutes } from 'react-router-dom';

import { LOGIN_PATH, SIGN_UP_PATH } from '@/data';
import { routeList } from '@/data/constant/navs';
import LayoutComponent from '@/layout';
import { Login, SignUp } from '@/pages';

const NotFound = lazy(() => import('@/pages/not-found'));

const routes = [
  {
    path: LOGIN_PATH,
    element: <Login />,
  },
  {
    path: SIGN_UP_PATH,
    element: <SignUp />,
  },
  {
    path: '/',
    element: <LayoutComponent />,
    children: [
      {
        path: '',
        element: <Navigate to="home" />,
      },
      ...routeList,
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
];

const RenderRouter: FC = () => {
  const element = useRoutes(routes);

  return element;
};

export default RenderRouter;
