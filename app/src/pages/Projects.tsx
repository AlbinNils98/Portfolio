import Hero from '@/common/Hero';
import { titles } from '@/utils/titles';
import { usePageTitle } from '@/utils/usePageTitle';
import { FaCog } from 'react-icons/fa';
import ContentRow from '@/common/ContentRow';
import Divider from '@/common/Divider';
import { IoIosArrowForward } from 'react-icons/io';
import { Colors } from '@/constants/Colors';
import { content } from '@/data/content';
import ChipList from '@/common/ChipList';

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
      {content.projects.projects.map((project, index) =>
        <>
          <ContentRow
            title={project.title}
            text={project.text}
            reverse={index % 2 == 0}
            childrenOver>
            <div className='flex flex-col items-start w-full gap-1 p-2'>
              <div className="flex flex-wrap gap-2 w-full">
                {project.images.map((imageUrl, index) => (
                  <img
                    key={index}
                    src={imageUrl}
                    alt={`Image of project named ${project.title}`}
                    className={`rounded-sm object-fill
        ${project.images.length === 1
                        ? "w-full h-auto"
                        : "flex-auto min-w-[150px] max-w-[450px] h-auto"}
      `}
                  />
                ))}
              </div>
              <a href={project.github} aria-label={`Link to ${project.title} github repository`} className='font-primary font-bold text-xl border-solid border-black border-b-2 flex items-center'>Github <IoIosArrowForward fill='black' size={16} className='animate-leftToRight' /></a>
              {project.deployLink.trim() &&
                <a href={project.deployLink} aria-label={`Link to ${project.title} deployment`} className='font-primary font-bold text-xl border-solid border-black border-b-2 flex items-center'>Deployment <IoIosArrowForward fill='black' size={16} className='animate-leftToRight' /></a>
              }
            </div>
            {
              (project.frontEnd.length > 0 || project.backEnd.length > 0) &&
              <div className='flex flex-col items-start w-full gap-2 p-2 '>
                {project.frontEnd.length > 0 &&
                  <div className='w-full'>
                    <h3 className='font-primary font-bold text-lg'>Frontend</h3>
                    <ChipList items={project.frontEnd} />
                  </div>
                }
                {project.backEnd.length > 0 &&
                  <div className='w-full'>
                    <h3 className='font-primary font-bold text-lg mb-2'>Server</h3>
                    <ChipList items={project.backEnd} />
                  </div>
                }
              </div>}
          </ContentRow>
          <Divider />
        </>
      )}
    </>
  )
}

export default Projects;