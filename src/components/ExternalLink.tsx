import { forwardRef } from "react";

interface ExternalLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  icon?: React.ReactElement;
}

export const ExternalLink = forwardRef<HTMLAnchorElement, ExternalLinkProps>(
  ({ children, icon, ...props }, ref) => (
    <div className="flex flex-row gap-1 nowrap">
      <a ref={ref} target="_blank" rel="noreferrer" {...props}>
        {children}
      </a>
      {icon && <span className="inline-block align-top">{icon}</span>}
    </div>
  )
);
