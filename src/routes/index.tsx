import { Navigate, useRoutes } from 'react-router-dom';
import { Home } from './elements';

export default function Router() {
  return useRoutes ([
		{ 
			path: 'dashboard',
			element: <Home />
		}
	])
}