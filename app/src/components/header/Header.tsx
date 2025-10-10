import ANLogo from '@/assets/icons/AnLogo';
import DesktopNav from '@/components/header/Desktop';
import MobileNav from '@/components/header/MobileNav';
import { Colors } from '@/constants/Colors';
import { content } from '@/data/content';
import { NavLink } from 'react-router-dom';

type NavItem = {
  readonly name: string;
  readonly to: string;
}

export type NavProps = {
  readonly navItems: readonly NavItem[]
}

const Header = () => {

  return (
    <header aria-label='Main navigation' className='w-full bg-primary flex justify-center'>
      <nav className='w-full px-8 py-2 bg-primary flex justify-between items-center font-primary max-w-9xl'>
        <NavLink to={'/'} aria-label='Logo link to about me page' className='flex items-end gap-2'>
          <ANLogo size={64} fill={Colors.light.secondary} />
          <h1 className='font-primary text-secondary'>Code</h1>
        </NavLink>
        <DesktopNav navItems={content.pages} />
        <MobileNav navItems={content.pages} />
      </nav>
    </header>
  )
}

export default Header;