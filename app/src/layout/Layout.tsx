import Divider from '@/common/Divider';
import Footer from '@/components/Footer';
import Header from '@/components/header/Header';
import { Outlet } from 'react-router-dom';

const Layout = () => {

  return (
    <div className='flex flex-auto flex-col items-center bg-primary'>
      <Header />
      <main className='flex flex-1 flex-col w-full max-w-9xl'>
        <Outlet />
      </main>
      <Divider />
      <Footer />
    </div>
  )
}

export default Layout;