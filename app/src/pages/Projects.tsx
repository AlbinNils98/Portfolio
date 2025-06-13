import { titles } from '@/utils/titles';
import { usePageTitle } from '@/utils/usePageTitle';


const Projects = () => {
  usePageTitle(titles.projects)
  return (
    <>
      <h1>Projects page</h1>
    </>
  )
}

export default Projects;