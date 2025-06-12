import type React from 'react';

type ANLogoProps = {
  fill?: string;
  size?: number;
}

const ANLogo: React.FC<ANLogoProps> = ({
  fill = "#FEFEFE",
  size = 100
}) => {
  return (
    <svg width={size} height={size} viewBox="0 0 250 224" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="94.6972" width="53" height="220" transform="rotate(23 94.6972 0)" fill={fill} />
      <path d="M120.349 12.761L105.691 9.81618L94.6972 3.84714e-06H146L136.839 9.81618L120.349 12.761Z" fill={fill} />
      <rect x="94.6672" y="23.9369" width="56.6396" height="219.884" transform="rotate(-25 94.6672 23.9369)" fill={fill} />
      <rect x="209.762" y="3.05176e-05" width="40" height="223.22" fill={fill} />
      <path d="M197.394 216.307L204.373 214.417L211.644 211.945V223.22H187.743L187.129 219.72L197.394 216.307Z" fill={fill} />
      <path d="M8.81897 202.395L57.5231 202.395V223.22L0.595734 223.22L8.81897 202.395Z" fill={fill} />
    </svg>
  )
}

export default ANLogo;