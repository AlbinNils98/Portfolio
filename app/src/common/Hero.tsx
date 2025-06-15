import type { ReactNode } from 'react';


type HeroProps = {
  title1?: string;
  title2?: string;
  children?: ReactNode;
  full?: boolean;
}

const Hero: React.FC<HeroProps> = (
  { title1, title2, children, full = false }
) => {
  return (
    <div className='flex relative'>
      <div className='w-2/5 '>
        <div className='absolute bottom-5 lg:top-20 left-5 md:left-20 xl:left-72 max-w-xs md:max-w-lg flex flex-col items-start gap-2'>
          {title1 && <h1
            className='bg-yellow-300 text-lg md:text-3xl font-semibold font-mono p-1 sm:p-2 animate-slideInLeft opacity-0 rounded-sm z-50'
            style={{ animationDelay: '0.2s' }} >
            {title1}
          </h1>}
          {title2 && <h1
            className='bg-yellow-300 text-sm md:text-lg  font-semibold font-mono p-1 sm:p-2 whitespace-pre-line animate-slideInLeft opacity-0 rounded-sm z-50'
            style={{ animationDelay: '0.6s' }}>
            {title2}
          </h1>}
        </div>
      </div>
      <div className={`flex w-3/5 items-center justify-center lg:justify-center pt-10 min-h-96 rounded-sm ${!full && 'bg-secondary'}`}>
        {children}
      </div>
    </div >
  )
}

export default Hero;