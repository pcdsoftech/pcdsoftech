import { Suspense, lazy, ElementType } from 'react';

import LoadingScreen from '../components/loading-screen';

const Loadable = (Component: ElementType) => (props: any) => 
  (
		<Suspense fallback={<LoadingScreen />}>
			<Component {...props} />
		</Suspense>
  );

// DASHBOARD
export const Home = Loadable(lazy(() => import('../pages/Home')));
export const AboutUs = Loadable(lazy(() => import('../pages/AboutUs')));
export const Account = Loadable(lazy(() => import('../pages/Account')));
export const Sale = Loadable(lazy(() => import('../pages/Sale')));