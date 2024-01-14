interface LinkProps {
  children: React.ReactNode;
  href: string;
  icon?: React.ReactElement;
  className?: string;
}

const ExternalLink = ({ children, href, icon, className }: LinkProps) => (
  <a className={className} href={href} target="_blank" rel="noreferrer">
    {icon && (
      <span className="fill-white mr-3 inline-block align-middle">{icon}</span>
    )}
    {children}
  </a>
);

export default ExternalLink;