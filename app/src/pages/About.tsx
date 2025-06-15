import { titles } from '@/utils/titles';
import { usePageTitle } from '@/utils/usePageTitle';
import profilePic from '@/assets/images/profilePic.png'
import content from '@/data/content.json';
import { NavLink } from 'react-router-dom';
import { IoIosArrowBack, IoIosArrowForward, IoMdSchool } from 'react-icons/io';
import { Colors } from '@/constants/Colors';
import Divider from '@/common/Divider';
import ContentRow from '@/common/ContentRow';
import { BsPersonRaisedHand } from 'react-icons/bs';
import Hero from '@/common/Hero';
import { GiMaterialsScience } from 'react-icons/gi';


const About = () => {

  usePageTitle(titles.about);
  return (
    <>
      <Hero title1={content.about.heroTitle} title2={content.about.heroText}>
        <img src={profilePic} alt="Profile picture of me" className='max-h-96' />
      </Hero>
      <div className='flex items-center justify-center bg-primary p-8 max-h-[500px] gap-1'>
        <IoIosArrowForward fill={Colors.light.secondary} size={40} className='animate-leftToRight' />

        <NavLink
          to={'/projects'}
          className='px-4 sm:px-8 py-2 sm:py-4 border-solid border-4 sm:border-8 border-secondary text-secondary text-2xl sm:text-4xl font-bold font-primary rounded-sm'>
          PROJECTS
        </NavLink>
        <IoIosArrowBack fill={Colors.light.secondary} size={40} className='animate-rightToLeft' />
      </div>
      <ContentRow title={content.about.about.title} titleIcon={<BsPersonRaisedHand />
      } text={content.about.about.text} reverse />
      <Divider />
      <ContentRow title={content.about.profession.title} titleIcon={<GiMaterialsScience />
      } text={content.about.profession.text} />
      <Divider />
      <ContentRow title={content.about.school.title} titleIcon={<IoMdSchool />
      } text={content.about.school.text} reverse />
    </>
  )
}

export default About;