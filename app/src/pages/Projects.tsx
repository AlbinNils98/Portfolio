import Hero from '@/common/Hero';
import { titles } from '@/utils/titles';
import { usePageTitle } from '@/utils/usePageTitle';
import { FaCog } from 'react-icons/fa';
import content from '@/data/content.json'
import ContentRow from '@/common/ContentRow';
import Divider from '@/common/Divider';
import gaDiscover from '@/assets/images/gameArc/gameArcDiscover.png'
import portfolioPage from '@/assets/images/portfolio/portfolio.png'
import { IoIosArrowForward } from 'react-icons/io';
import { Colors } from '@/constants/Colors';

const Projects = () => {
  usePageTitle(titles.projects)
  return (
    <>
      <Hero title1={content.projects.heroTitle} title2={content.projects.heroText} full>
        <div className='flex flex-col items-center h-full lg:h-fit'>
          <FaCog fill={Colors.light.secondary} size={100} className='self-end animate-spinCounterClockwise' />
          <div className='flex'>
            <FaCog fill={Colors.light.secondary} size={100} className='animate-spinCounterClockwise ' />
            <FaCog fill={Colors.light.secondary} size={100} className=' rotate-90 animate-spinClockwise' />
          </div>
        </div>
      </Hero>
      <Divider />
      <ContentRow title={content.projects.gameArc.title} text={content.projects.gameArc.text} childrenOver>
        <div className='flex flex-col items-start w-full gap-1 px-2 py-2'>
          <div className='flex flex-row flex-wrap gap-1'>
            <img src={gaDiscover} alt="" />
          </div>
          <a href={content.projects.gameArc.github} className='font-primary font-bold text-xl border-solid border-black border-b-2 flex items-center'>Github <IoIosArrowForward fill='black' size={16} className='animate-leftToRight' /></a>
        </div>
      </ContentRow>
      <Divider />
      <ContentRow title={content.projects.portfolio.title} text={content.projects.portfolio.text} childrenOver reverse>
        <div className='flex flex-col items-start w-full gap-1 px-2 py-2'>
          <img src={portfolioPage} alt="" className='' />
          <a href={content.projects.portfolio.github} className='font-primary font-bold text-xl border-solid border-black border-b-2 flex items-center
          '>Github <IoIosArrowForward fill='black' size={16} className='animate-leftToRight' /></a>
        </div>
      </ContentRow>
    </>
  )
}

export default Projects;