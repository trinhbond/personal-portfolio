interface LinkProps extends React.HTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  icon?: React.ReactElement;
  fill?: React.CSSProperties;
  href: string;
}

const ExternalLink: React.FC<LinkProps> = ({
  children,
  icon,
  fill = "#ffffff",
  href,
}) => (
  <a target="_blank" rel="noreferrer" href={href}>
    {icon && (
      <span className={`fill-[${fill}] mr-3 inline-block align-middle`}>
        {icon}
      </span>
    )}
    {children}
  </a>
);

export { ExternalLink };
