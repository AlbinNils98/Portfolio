import { Colors } from '@/constants/Colors';
import Content from '@/data/content.json';
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io';
import { MdOutlineEmail } from 'react-icons/md';
import { NavLink } from 'react-router-dom';

const socialLinks = [
  {
    icon: IoLogoGithub,
    to: 'https://github.com/AlbinNils98',
    label: 'Link to github profile'
  },
  {
    icon: IoLogoLinkedin,
    to: 'https://www.linkedin.com/in/albin-nilsson-b94065310/',
    label: 'Link to LinkedIn account'
  },
  {
    icon: MdOutlineEmail,
    to: 'mailto:albinchnilsson@gmail.com',
    label: 'Link to email'
  },
];

const Footer = () => {
  return (
    <footer className='w-full bg-primary flex pt-4 pb-8 px-8 min-h-20 items-center justify-between max-w2xl sm:px-20'>
      <div>
        <ul className='flex gap-4'>
          {socialLinks.map(({ icon: Icon, to, label }, i) => (
            <li key={i}>
              <a href={to} aria-label={label}>
                <Icon fill={Colors.light.secondary} size={30} />
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div></div>
      <nav>
        <ul className='flex flex-col items-start'>
          {Content.pages.map(({ name, to }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={to === '/'}
                aria-label={`Link to ${name} page`}
                className={({ isActive }) =>
                  'text-xs sm:text-md font-semibold text-secondary border-b-2 border-solid ' +
                  (isActive ? 'border-secondary' : 'border-transparent')}
              >
                {name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  )
}

export default Footer;