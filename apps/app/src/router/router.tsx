import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';

import Index from '../screens/index';
import NotFound from '../screens/notfound';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route errorElement={<NotFound />} path="/" element={<Index />} />
  )
);

export default router;
