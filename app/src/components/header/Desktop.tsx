import type { NavProps } from '@/components/header/Header';
import type React from 'react';
import { NavLink } from 'react-router-dom';

const DesktopNav: React.FC<NavProps> = ({ navItems }) => {

  return (
    <ul className='hidden sm:flex gap-4'>
      {navItems.map(({ name, to }) => (
        <li key={to}>
          <NavLink
            to={to}
            end={to === '/'}
            aria-label={`Link to ${name} page`}
            className={({ isActive }) =>
              'font-bold text-white py-1 px-4 border-2 border-solid ' +
              (isActive ? 'border-white' : 'border-transparent')}
          >
            {name}
          </NavLink>
        </li>
      ))}
    </ul>
  )
}

export default DesktopNav;