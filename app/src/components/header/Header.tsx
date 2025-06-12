import ANLogo from '@/assets/icons/AnLogo';
import DesktopNav from '@/components/header/Desktop';
import MobileNav from '@/components/header/MobileNav';
import { NavLink } from 'react-router-dom';

type NavItem = {
  name: string;
  to: string;
}

export type NavProps = {
  navItems: NavItem[]
}

const navItems = [
  { name: 'About me', to: '/' },
  { name: 'Projects', to: '/projects' },
]

const Header = () => {

  return (
    <nav aria-label='Main navigation' className='w-full px-8 py-2 bg-nav flex justify-between items-center'>
      <NavLink to={'/'} aria-label='Logo link to about me page'>
        <ANLogo size={64} />
      </NavLink>
      <DesktopNav navItems={navItems} />
      <MobileNav navItems={navItems} />
    </nav>
  )
}

export default Header;