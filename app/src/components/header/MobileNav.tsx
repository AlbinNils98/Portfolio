import type { NavProps } from '@/components/header/Header';
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
          <IoMdClose fill='#FEFEFE' size={54} onClick={toggleOpen} className='cursor-pointer' />
          <ul ref={dropdownRef} className='flex flex-col gap-4 w-40 items-center absolute top-16 -right-8 bg-nav p-5'>
            {navItems.map(({ name, to }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={to === '/'}
                  aria-label={`Link to ${name} page`}
                  onClick={toggleOpen}
                  className={({ isActive }) =>
                    'font-bold text-white py-1 px-4 border-2 border-solid ' +
                    (isActive ? 'border-white' : 'border-transparent')}
                >
                  {name}
                </NavLink>
              </li>
            ))}
          </ul>
        </> :
        <GiHamburgerMenu className='cursor-pointer' onClick={toggleOpen} fill='#FEFEFE' size={54} />
      }
    </div>
  )
}

export default MobileNav;