import React, { forwardRef } from "react";
import clsx from "clsx";
// eslint-disable-next-line css-modules/no-unused-class
import s from "./Avatar.module.scss";
import "../style/components/avatar.scss";

interface AvatarProps {
  picture?: string;
  name?: string;
  size?: "small" | "medium" | "large";
  variant?: "circular" | "square";
  defaultPicture?: string;
  className?: string;
}

const Avatar = forwardRef<HTMLDivElement, AvatarProps>(
  (
    {
      picture = "",
      name = "",
      size = "medium",
      variant = "circular",
      defaultPicture = "",
      className = "",
      ...rest
    },
    ref,
  ) => {
    const getInitials = (name: string) => {
      const nameParts = name.trim().split(" ");
      if (nameParts.length > 2) {
        return `${nameParts[0]![0]!.toUpperCase()}${nameParts[1]![0]!.toUpperCase()}${nameParts[2]![0]!.toUpperCase()}`;
      } else if (nameParts.length === 2) {
        return `${nameParts[0]![0]!.toUpperCase()}${nameParts[1]![0]!.toUpperCase()}`;
      } else {
        return name[0]!.toUpperCase();
      }
    };

    const initials = name ? getInitials(name) : "SU";
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
              <span className={s.initials}>{initials}</span>
            )}
          </div>
        </div>
      </div>
    );
  },
);

Avatar.displayName = "Avatar";

export default Avatar;
