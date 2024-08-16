import Launch from "../icons/Launch";

type ExternalLinkProps = {
  children: React.ReactNode;
  icon?: React.ReactElement;
};

export default function ExternalLink(
  props: ExternalLinkProps & React.AnchorHTMLAttributes<HTMLAnchorElement>
): JSX.Element {
  const { icon = <Launch />, children, ...rest } = props;

  return (
    <a target="_blank" rel="noreferrer" {...rest}>
      {children}{" "}
      {icon && <span className="inline-block align-top">{icon}</span>}
    </a>
  );
}
