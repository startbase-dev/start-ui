import React, { forwardRef } from "react";
import clsx from "clsx";
// eslint-disable-next-line css-modules/no-unused-class
import s from "./Avatar.module.scss";
import "../style/components/avatar.scss";

export interface AvatarProps extends Omit<React.AllHTMLAttributes<HTMLDivElement>, "size"> {
  picture?: string;
  chars?: string;
  size?: "small" | "medium" | "large";
  variant?: "circular" | "square";
  defaultPicture?: string;
  className?: string;
}

const Avatar = forwardRef<HTMLDivElement, AvatarProps>(
  (
    {
      picture = "",
      chars = "SU",
      size = "medium",
      variant = "circular",
      defaultPicture = "",
      className = "",
      ...rest
    },
    ref,
  ) => {
    const imageSrc = picture || defaultPicture || "";

    return (
      <div
        ref={ref}
        className={clsx(s.root, s[size], s[variant], className)}
        {...rest}
      >
        <div className={s.container}>
          <div className={clsx(s.circular, s[variant])}>
            {imageSrc ? (
              <img alt="avatar" src={imageSrc} className={s.image} />
            ) : (
              <span className={s.chars}>{chars}</span>
            )}
          </div>
        </div>
      </div>
    );
  },
);

Avatar.displayName = "Avatar";

export default Avatar;
