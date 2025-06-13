import { titles } from '@/utils/titles';
import { usePageTitle } from '@/utils/usePageTitle';
import profilePic from '@/assets/images/profilePic.png'
import content from '@/data/content.json';
import { NavLink } from 'react-router-dom';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { Colors } from '@/constants/Colors';


const About = () => {

  usePageTitle(titles.about);
  return (
    <>
      <div className='flex min-h-[200px] max-h-[500px] relative bg-primary'>
        <div className='absolute bottom-10 sm:bottom-0 sm:top-20 left-5 sm:left-20 xl:left-72 max-w-xs md:max-w-lg flex flex-col items-start gap-2'>
          <h1
            className='bg-yellow-300 text-lg md:text-3xl font-semibold font-mono p-1 sm:p-2 animate-slideInLeft opacity-0 rounded-sm'
            style={{ animationDelay: '0.2s' }} >
            {content.about.heroTitle}
          </h1>
          <h1
            className='bg-yellow-300 text-sm md:text-lg  font-semibold font-mono p-1 sm:p-2 whitespace-pre-line animate-slideInLeft opacity-0 rounded-sm'
            style={{ animationDelay: '0.6s' }}>
            {content.about.heroText}
          </h1>
        </div>
        <div className='bg-primary  w-2/5'></div>
        <div className=' flex w-3/5 items-center lg:justify-center justify-end pt-10 bg-secondary rounded-sm'>
          <img src={profilePic} alt="Profile picture of me" className='max-h-96' />
        </div>
      </div >
      <div className='flex items-center justify-center bg-primary p-8 max-h-[500px] gap-1'>
        <IoIosArrowForward fill={Colors.light.secondary} size={40} className='animate-leftToRight' />

        <NavLink
          to={'/projects'}
          className='px-4 sm:px-8 py-2 sm:py-4 border-solid border-4 sm:border-8 border-secondary text-secondary text-2xl sm:text-4xl font-bold font-primary rounded-sm'>
          PROJECTS
        </NavLink>
        <IoIosArrowBack fill={Colors.light.secondary} size={40} className='animate-rightToLeft' />
      </div>
      <div className='bg-secondary'>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>

      </div>
    </>
  )
}

export default About;