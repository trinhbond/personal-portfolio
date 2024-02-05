interface LinkProps {
  children: React.ReactNode;
  href: string;
  icon?: React.ReactElement;
  className?: string;
}

const ExternalLink = ({ children, icon, ...props }: LinkProps) => (
  <a {...props} target="_blank" rel="noreferrer">
    {icon && (
      <span className="fill-white mr-3 inline-block align-middle">{icon}</span>
    )}
    {children}
  </a>
);

export { ExternalLink };
