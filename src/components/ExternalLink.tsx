type ExternalLinkProps = {
  children: React.ReactNode;
  icon?: React.ReactElement;
  fill?: React.CSSProperties;
  href: string;
  className: string;
};

export default function ExternalLink(props: ExternalLinkProps) {
  const { icon, fill, children, ...rest } = props;

  return (
    <a target="_blank" rel="noreferrer" {...rest}>
      {children}{" "}
      {icon && (
        <span className={`fill-[${fill}] inline-block align-middle`}>
          {icon}
        </span>
      )}
    </a>
  );
}
