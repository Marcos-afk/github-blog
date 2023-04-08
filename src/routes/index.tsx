import { DefaultLayout } from '@layouts/Default';
import { Home } from '@pages/Home';
import { Publication } from '@pages/Publication';
import { Route, Routes } from 'react-router-dom';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/publication/:id" element={<Publication />} />
        <Route path="*" element={<h1>404 - Not Found</h1>} />
      </Route>
    </Routes>
  );
};
