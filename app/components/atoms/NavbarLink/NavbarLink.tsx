import React from "react";
import Link from "next/link";

interface NavbarLinkProps {
  href: string;
  label: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

const NavbarLink: React.FC<NavbarLinkProps> = ({
  href,
  label,
  className,
  style,
  onClick
}) => {
  console.log("list", label)

  return (
    <Link 
      href={href} 
      className={className}
      style={style}
      onClick={onClick}
    >
      {label}
    </Link>
  );
};

export default NavbarLink; 