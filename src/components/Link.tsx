interface LinkProps {
  children: React.ReactNode;
  href: string;
  icon?: React.ReactElement;
  className?: string;
}

const Link = ({ children, href, icon, className }: LinkProps) => (
  <a className={className} href={href} target="_blank" rel="noreferrer">
    {icon && (
      <span className="fill-white mr-3 inline-block align-middle font-medium">
        {icon}
      </span>
    )}
    {children}
  </a>
);

export default Link;
