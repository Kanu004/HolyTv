import { Outlet } from 'react-router-dom';
import AppTitle from './apptitle';
import Navs from './navs';

const MainLayout = () => {
  return (
    <div>
      <AppTitle />
      <Navs />

      <Outlet />
    </div>
  );
};

export default MainLayout;