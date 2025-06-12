import Header from '@/components/header/Header';
import { Outlet } from 'react-router-dom';

const Layout = () => {

  return (
    <div className='flex flex-auto flex-col items-center'>
      <Header />
      <Outlet />
    </div>
  )
}

export default Layout;