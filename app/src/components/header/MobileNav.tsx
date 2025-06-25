import type { NavProps } from '@/components/header/Header';
import { Colors } from '@/constants/Colors';
import { useEffect, useRef, useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoMdClose } from 'react-icons/io';
import { NavLink } from 'react-router-dom';

const MobileNav: React.FC<NavProps> = ({ navItems }) => {
  const [isOpen, setIsOpen] = useState(false);

  const dropdownRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);


  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className='sm:hidden flex relative'>

      {isOpen ?
        <>
          <IoMdClose fill={Colors.light.secondary} size={40} onClick={toggleOpen} className='cursor-pointer' />
          <ul ref={dropdownRef} className='flex flex-col gap-4 w-40 items-center absolute top-10 -right-8 bg-primary p-5 z-50 animate-slideDown rounded-sm'>
            {navItems.map(({ name, to }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={to === '/'}
                  aria-label={`Link to ${name} page`}
                  className={({ isActive }) =>
                    'font-bold text-secondary py-1 px-4 border-2 border-solid ' +
                    (isActive ? 'border-secondary' : 'border-transparent')}
                  onClick={toggleOpen}
                >
                  {name}
                </NavLink>
              </li>
            ))}
          </ul>
        </> :
        <GiHamburgerMenu className='cursor-pointer' onClick={toggleOpen} fill={Colors.light.secondary} size={40} />
      }
    </div>
  )
}

export default MobileNav;
