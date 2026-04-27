import type {AnchorHTMLAttributes, ReactNode} from "react";
import type {Locale, StaticRouteKey} from "@/lib/types";
import {getPath} from "@/lib/routes";

type LocalizedLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  locale: Locale;
  routeKey: StaticRouteKey;
  children: ReactNode;
};

export function LocalizedLink({
  locale,
  routeKey,
  children,
  ...props
}: LocalizedLinkProps) {
  return (
    <a href={getPath(locale, routeKey)} {...props}>
      {children}
    </a>
  );
}
