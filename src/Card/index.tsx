import React, { forwardRef } from "react";
import cx from "clsx";
// eslint-disable-next-line css-modules/no-unused-class
import s from "./Card.module.scss";
import "../style/components/card.scss";

interface CardProps {
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  collapsible?: boolean;
  size?: "small" | "medium" | "large";
  fluid?: boolean;
  className?: string;
  children: React.ReactNode;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      title,
      description,
      collapsible = false,
      size = "medium",
      fluid = false,
      className = "",
      children,
    },
    ref,
  ) => {
    const [isCollapsed, setIsCollapsed] = React.useState(false);

    const handleToggleCollapse = () => {
      if (collapsible) {
        setIsCollapsed(!isCollapsed);
      }
    };

    return (
      <div
        ref={ref}
        className={cx(s.card, s[size], { [s.fluid]: fluid }, className)}
      >
        {(title || description) && (
          <div className={s.header} onClick={handleToggleCollapse}>
            {title && <h3 className={s.title}>{title}</h3>}
            {description && <p className={s.description}>{description}</p>}
          </div>
        )}
        <div
          className={cx(s.body, {
            [s.collapsed]: collapsible && isCollapsed,
          })}
        >
          {children}
        </div>
      </div>
    );
  },
);

Card.displayName = "Card";

export default Card;
