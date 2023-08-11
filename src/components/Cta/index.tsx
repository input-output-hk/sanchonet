import Link from "@docusaurus/Link";
import clsx from "clsx";
import React from "react";
import styles from "./styles.module.css";
import ArrowIcon, { ArrowIconSmall } from "./ArrowIcon";

type Props = {
  className?: string;
  href?: string;
  onClick?: React.MouseEventHandler;
  size?: "large" | "default";
  appearance?: "primary" | "secondary";
  children: React.ReactNode
};

export const Cta: React.FC<Props> = ({
  className: _className,
  href,
  onClick,
  size = "default",
  appearance = "primary",
  children
}) => {
  const className = clsx(
    _className,
    styles.cta,
    styles[`cta--${appearance}`],
    styles[`cta--${size}`]
  );
  const icon = size === "large" ? <ArrowIcon />: <ArrowIconSmall />;
  return href ? (
    <Link href={href} className={className} onClick={onClick}>
      {children} {icon}
    </Link>
  ) : (
    <button className={className} onClick={onClick}>
      {children} {icon}
    </button>
  );
};
