import type { ReactNode } from 'react';
import type React from 'react';

type ContentRowProps = {
  title: string;
  titleIcon?: ReactNode;
  text?: string;
  reverse?: boolean;
  children?: ReactNode;
  childrenOver?: boolean;
}

const ContentRow: React.FC<ContentRowProps> = (
  { title, titleIcon, text, reverse = false, children, childrenOver }
) => {
  const titleClass = `flex items-center gap-2 bg-yellow-300 text-lg md:text-3xl font-semibold font-mono p-1 sm:p-2 rounded-sm opacity-0 min-w-32
    ${reverse ? 'animate-slideInRight' : 'animate-slideInLeft'}`;

  return (
    <div className={`flex ${reverse ? 'flex-row-reverse' : ''}`}>
      <div className="w-1/5 sm:w-2/5 relative">
        <div className={`absolute top-2 ${reverse ? '-left-24 sm:-left-10' : '-right-24 sm:-right-10'} max-w-xs md:max-w-lg flex flex-col items-start gap-2`}>
          <h2 className={titleClass}>
            {reverse && (titleIcon && titleIcon)}
            {title}
            {!reverse && (titleIcon && titleIcon)}
          </h2>
        </div>
      </div>
      <div className={`flex flex-col w-4/5 sm:w-3/5 ${reverse ? 'items-end' : 'items-start'} justify-center px-2 py-14 bg-secondary rounded-sm`}>
        {childrenOver && children}
        {text &&
          <p className="text-sm md:text-lg font-semibold font-mono p-1 sm:p-2 whitespace-pre-line rounded-sm">
            {text}
          </p>}
        {!childrenOver && children}
      </div>
    </div>
  );
};

export default ContentRow;