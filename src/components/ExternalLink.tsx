type ExternalLinkProps = {
  children: React.ReactNode;
  icon?: React.ReactElement;
  fill?: React.CSSProperties;
  href: string;
} & HTMLAnchorElement;

export default function ExternalLink(props: ExternalLinkProps) {
  const { href, icon, fill, children } = props;

  return (
    <a target="_blank" rel="noreferrer" href={href}>
      {icon && (
        <span className={`fill-[${fill}] mr-3 inline-block align-middle`}>
          {icon}
        </span>
      )}
      {children}
    </a>
  );
}
