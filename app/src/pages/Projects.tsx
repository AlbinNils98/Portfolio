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
import { useEffect, useRef, useState } from 'react';

const Projects = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const lastFocusedElement = useRef<HTMLElement | null>(null);

  const openOverlay = (imageUrl: string) => {
    // Save currently focused element
    lastFocusedElement.current = document.activeElement as HTMLElement;
    setSelectedImage(imageUrl);
  };

  const closeOverlay = () => {
    setSelectedImage(null);
    // Restore focus after overlay unmounts
    setTimeout(() => {
      lastFocusedElement.current?.focus({ preventScroll: true });
    }, 0);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedImage(null);
        closeOverlay();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  usePageTitle(titles.projects);
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
              <div className="flex flex-wrap gap-2 w-full justify-center">
                {project.images.map((imageUrl: string, index: number) => (
                  <button
                    key={index}
                    onClick={() => openOverlay(imageUrl)}
                    className={`group cursor-pointer rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-400
              ${project.images.length === 1
                        ? "w-full max-h-[600px]"
                        : "flex-shrink w-[45%] sm:w-[30%] md:w-[200px] max-h-[250px]"}`}
                    aria-label={`Enlarge image of project ${project.title}`}
                  >
                    <img
                      src={imageUrl}
                      alt={`Image of project named ${project.title}`}
                      className="object-contain w-full h-full transition-transform group-hover:scale-105"
                    />
                  </button>
                ))}
              </div>
              {selectedImage && (
                <div
                  className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
                  onClick={closeOverlay}
                  role="dialog"
                  aria-modal="true"
                >
                  <img
                    src={selectedImage}
                    alt="Enlarged project"
                    className="max-h-[90vh] max-w-[90vw] rounded-lg object-contain shadow-lg"
                  />
                  <button
                    className="absolute top-4 right-4 text-white text-3xl font-bold focus:outline-none focus:ring-2 focus:ring-white"
                    onClick={closeOverlay}
                    autoFocus
                  >
                    &times;
                  </button>
                </div>
              )}
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