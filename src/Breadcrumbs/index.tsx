import React, { forwardRef, Fragment } from "react";
import cx from "clsx";
import s from "./Breadcrumbs.module.scss";
import { BreadcrumbsProps } from "./types";

const Breadcrumbs = forwardRef<HTMLDivElement, BreadcrumbsProps>(
  ({ separator = "/", breadcrumbReplace = [] }, ref) => {
    const paths = window.location.pathname;
    const pathNames = paths
      .split("/")
      .filter((path: string) => path && path !== "iframe.html");

    const replaceBreadcrumb = (link: string) => {
      let replacedLink = link;
      breadcrumbReplace.forEach(({ find, replace }) => {
        if (link === find) {
          replacedLink = replace;
        }
      });
      return replacedLink
        .split("-")
        .map((str: string) => str.charAt(0).toUpperCase() + str.slice(1))
        .join(" ");
    };

    const shouldShowReplaceDirectly = pathNames.length === 0;

    return (
      <div ref={ref}>
        <ul className={s.root}>
          {shouldShowReplaceDirectly
            ? breadcrumbReplace.map(({ replace }, index) => (
                <Fragment key={index}>
                  <li
                    className={cx(s.list, {
                      [s.active]: index === breadcrumbReplace.length - 1,
                    })}
                  >
                    <span>{replace}</span>
                  </li>
                  {breadcrumbReplace.length !== index + 1 && (
                    <span>{separator}</span>
                  )}
                </Fragment>
              ))
            : pathNames.map((link: string, index: number) => {
                const href = `/${pathNames.slice(0, index + 1).join("/")}`;
                const isActive = paths === href;
                const itemClasses = cx(s.list, {
                  [s.active]: isActive,
                });
                const itemLink = replaceBreadcrumb(link);
                return (
                  <Fragment key={index}>
                    <li className={itemClasses}>
                      <a href={href}>{itemLink}</a>
                    </li>
                    {pathNames.length !== index + 1 && <span>{separator}</span>}
                  </Fragment>
                );
              })}
        </ul>
      </div>
    );
  },
);

Breadcrumbs.displayName = "Breadcrumbs";
export default Breadcrumbs;
