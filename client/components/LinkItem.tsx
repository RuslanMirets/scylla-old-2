import Link from 'next/link';
import React from 'react';

interface IProps {
  children: any;
  href: string;
  className?: any;
}

export const LinkItem: React.FC<IProps> = ({ children, href, className }) => {
  return (
    <Link href={href}>
      <a className={className}>{children}</a>
    </Link>
  );
};
