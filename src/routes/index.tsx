import { Navigate, useRoutes } from 'react-router-dom';
import { Home, AboutUs, Account, Sale, LimitlessWax, Error } from './elements';

export default function Router() {
  return useRoutes ([
		{ 
			path: '/',
			element: <Home />			
		},
		{
			path: '/about',
			element: <AboutUs />
		},
		{
			path: 'account',
			element: <Account />
		},
		{
			path: 'sale',
			element: <Sale />
		},
		{
			path: 'limitlesswax',
			element: <LimitlessWax />
		},
		{
			path: 'error',
			element: <Error />
		}
	])
}