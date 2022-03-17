import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import HomeLayout from './layouts/Home';
import AuthLayout from './layouts/Auth';

// pages
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Details from './pages/Details';
import DetailLayout from './layouts/detail';
import AddNew from './pages/AddNew';
import Update from './pages/Update';

export default function Router() {
    return useRoutes([
        {
            path: '/app',
            element: <HomeLayout />,
            children: [
                { path: 'home', element: <Home /> },
                // { path: 'details', element: <Details /> },
                // { path: 'profile', element: <Profile /> },
                // { path: 'List', element: <ProfileList /> },
            ]
        },{
            path: '/movie',
            element: <DetailLayout />,
            children: [
                {path: ':movieId', element: <Details />},
                {path: 'addnew', element: <AddNew />},
                {path: 'update/:movieId', element: <Update />}
            ]
        },
        {
            path: '/',
            element: <AuthLayout />,
            children: [
                { path: '/', element: <Login /> },
                { path: 'login', element: <Login /> },
                { path: 'register', element: <Register /> },
                { path: 'details', element: <Details /> },
                //         //   { path: '404', element: <NotFound /> },
                //         //   { path: '*', element: <Navigate to="/404" /> }
            ]
        },
        // { path: '*', element: <Navigate to="/404" replace /> }
    ]);
}