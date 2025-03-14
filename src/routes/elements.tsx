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