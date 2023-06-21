import {
  createRoutesFromElements,
  Route,
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import Layout from './layout/main';
import Home from './pages/Home';
import NoMatch from './pages/NoMatch';
import Page1 from './pages/Page1';

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="page1" element={<Page1 />} />
        <Route path="*" element={<NoMatch />} />
      </Route>,
    ),
  );
  return <RouterProvider router={router} />;
};

export default App;
