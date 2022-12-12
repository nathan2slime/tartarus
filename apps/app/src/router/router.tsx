import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';

import Index from '../screens/index';

const router = createBrowserRouter(
  createRoutesFromElements(<Route path="/" element={<Index />} />)
);

export default router;
