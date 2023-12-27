interface LinkProps {
  children: React.ReactNode;
  href: string;
  icon?: React.ReactElement;
  className?: string;
}

function Link({ children, href, icon, className }: LinkProps) {
  return (
    <a className={className} href={href} target="_blank" rel="noreferrer">
      {icon && (
        <span className="fill-white mr-3 inline-block align-middle">
          {icon}
        </span>
      )}
      <span>{children}</span>
    </a>
  );
}

export default Link;
