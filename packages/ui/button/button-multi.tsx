import { ButtonHTMLAttributes } from 'react';
import React from 'react';
import { Link } from 'remix';
import cx from 'clsx'

export interface ButtonType
  extends ButtonHTMLAttributes<HTMLButtonElement | HTMLAnchorElement> {
  children: React.ReactNode;
  path?: string;
  type: 'button' | 'submit' | 'reset';
  className?: string;
  size?: 'md' | 'lg' | 'xl';
  shape?: 'rounded' | 'square' | 'square20xl' | 'square2xl' | 'square22xl';
  color?: 'primary' | 'secondary';
  image?: { large?: string; small?: string };
}

export  const CustomButton = ({
  children,
  path,
  className,
  size,
  shape,
  color,
  image,
  type,
  ...props
}: ButtonType) => {
  const btnstyle = {
    size: size || 'md',
    shape: shape || 'square22xl',
    color: color || 'primary',
  };
  const sizeStyle = {
    md: `leading-11 h-12 w-32 sm:h-15 sm:w-40 sm:leading-12`,
    lg: `text-22base h-73 w-230 leading-73`,
    xl: `h-15 w-50 text-xl leading-3`,
  };
  const shapeStyle = {
    rounded: `rounded`,
    square: `rounded-4xl`,
    square20xl: `rounded-20`,
    square2xl: `rounded-2xl`,
    square22xl: `rounded-22`,
  };
  const colorStyle = {
    primary: `bg-blue-500`,
    secondary: `bg-red-500`,
  };

  const buttonClasses = cx([
    className,
    'font-exo',
    'inline-block',
    'text-center',
    'font-bold',
    'group',
    'hover:opacity-80',
    sizeStyle[btnstyle.size],
    shapeStyle[btnstyle.shape ?? 'square22xl'],
    colorStyle[btnstyle.color ?? 'primary'],
  ]);

  const btnImageSm = {
    backgroundImage: `url(${image?.small})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };
  const btnImageLg = {
    backgroundImage: `url(${image?.large})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };

  if (path) {
    const internal = /^\/(?!\/)/.test(path);
    const isHash = path.startsWith('#');

    if (internal) {
      return (
        <Link
          to={path}
          style={size ? btnImageLg : btnImageSm}
          className={buttonClasses}
          {...props}
        >
          {children}
        </Link>
      );
    }
    if (isHash) {
      return (
        <a href={path}>
          <button
            type={type}
            style={size ? btnImageLg : btnImageSm}
            className={buttonClasses}
            {...props}
          >
            {children}
          </button>
        </a>
      );
    }
    return (
      <a
        href={path}
        target='_blank'
        style={size ? btnImageLg : btnImageSm}
        className={buttonClasses}
        rel='noopener noreferrer'
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button {...props} type={type} className={buttonClasses}>
      {children}
    </button>
  );
};


// export {};
