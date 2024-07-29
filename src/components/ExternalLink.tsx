type ExternalLinkProps = {
  children: React.ReactNode;
  icon?: React.ReactElement;
  href: string;
  className: string;
};

export default function ExternalLink(props: ExternalLinkProps) {
  const { icon, children, ...rest } = props;

  return (
    <a target="_blank" rel="noreferrer" {...rest}>
      {children}{" "}
      {icon && <span className="inline-block align-top">{icon}</span>}
    </a>
  );
}
