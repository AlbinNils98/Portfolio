import Hero from '@/common/Hero';
import { titles } from '@/utils/titles';
import { usePageTitle } from '@/utils/usePageTitle';
import { FaCog } from 'react-icons/fa';
import content from '@/data/content.json'
import ContentRow from '@/common/ContentRow';
import Divider from '@/common/Divider';
import gameArcLogo from '@/assets/images/gameArc/GameArcLogo.png'
import gaDiscover from '@/assets/images/gameArc/gameArcDiscover.png'

const Projects = () => {
  usePageTitle(titles.projects)
  return (
    <>
      <Hero title1={content.projects.heroTitle} title2={content.projects.heroText}>
        <div className='flex flex-col items-center h-full lg:h-fit'>
          <FaCog size={100} className='self-end animate-spinCounterClockwise' />
          <div className='flex'>
            <FaCog size={100} className='animate-spinCounterClockwise ' />
            <FaCog size={100} className=' rotate-90 animate-spinClockwise' />
          </div>
        </div>
      </Hero>
      <Divider />
      <ContentRow title={content.projects.gameArc.title} text={content.projects.gameArc.text} childrenOver reverse>
        <div className='flex flex-col items-start w-full gap-1 pt-2'>
          <img src={gameArcLogo} alt="" className='bg-gaBlue p-2 h-20' />
          <div className='flex flex-row flex-wrap gap-1'>
            <img src={gaDiscover} alt="" />
          </div>
        </div>
      </ContentRow>
      <Divider />
    </>
  )
}

export default Projects;