type ExternalLinkProps = {
  children: React.ReactNode;
  icon?: React.ReactElement;
};

export default function ExternalLink(
  props: ExternalLinkProps & React.AnchorHTMLAttributes<HTMLAnchorElement>
): JSX.Element {
  const { icon, children, ...rest } = props;

  return (
    <div className="flex flex-row gap-1 nowrap">
      <a target="_blank" rel="noreferrer" {...rest}>
        {children}
      </a>
      {icon && <span className="inline-block align-top">{icon}</span>}
    </div>
  );
}
