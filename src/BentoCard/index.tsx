import React, { forwardRef, useMemo, useState } from "react";
import clsx from "clsx";
import s from "./BentoCard.module.scss";
import Plus from "../icons/Plus";
import ArrowForwardIos from "../icons/ArrowForwardIos";
import type { IndexProps } from "./types";

const Index = forwardRef<HTMLDivElement, IndexProps>((props, ref) => {
  const {
    rootClassName,
    rootActiveClassName,
    title,
    titleClassName,
    titleActiveClassName,
    firstContent,
    secondContent,
    buttonClassName,
    activeButtonClassName,
    isTitleVisibleInFirst = true,
    isTitleVisibleInSecond = true,
    redirectTo,
  } = props;
  const [isActive, setIsActive] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  const handleClick = () => {
    if (isActive) {
      setIsExiting(true);
      setTimeout(() => {
        setIsActive(false);
        setIsExiting(false);
      }, 600); // Duration of exit animation
    } else {
      setIsActive(true);
    }
  };

  const handleClickRedirectTo = () => {
    window.open(redirectTo, "_blank");
  };

  const titleHandler = useMemo(() => {
    if (!isActive && title && isTitleVisibleInFirst) {
      return title;
    } else if (isActive && title && isTitleVisibleInSecond) {
      return title;
    } else {
      return null;
    }
  }, [isActive, title, isTitleVisibleInFirst, isTitleVisibleInSecond]);

  return (
    <div
      data-active={isActive}
      className={clsx(s.root, rootClassName, {
        [rootActiveClassName as string]: isActive,
        [s.rootActive]: isActive,
      })}
      ref={ref}
      {...props}
    >
      <div
        className={clsx(s.title, titleClassName, {
          [titleActiveClassName as string]: isActive,
          [s.activeTitle]: isActive,
        })}
      >
        {titleHandler}
      </div>
      <div
        className={clsx(s.layer, s.firstLayer, {
          [s.exitingContent]: isExiting,
        })}
      >
        {!isActive && firstContent}
      </div>
      {isActive && (
        <div
          className={clsx(s.layer, s.secondLayer, {
            [s.hiddenLayer]: !isActive,
            [s.exitingContent]: isExiting,
          })}
        >
          <div
            className={clsx(s.content, {
              [s.exitingContent]: isExiting,
              [s.enteringContent]: !isExiting && isActive,
            })}
          >
            {secondContent}
          </div>
        </div>
      )}
      {!redirectTo && secondContent ? (
        <button
          className={clsx(s.button, buttonClassName, {
            [activeButtonClassName as string]: isActive,
            [s.activeButton]: isActive,
            [s.exitingButton]: isExiting,
          })}
          onClick={handleClick}
        >
          <Plus className={s.plusIcon} />
        </button>
      ) : (
        <button
          className={clsx(s.button, buttonClassName, {
            [activeButtonClassName as string]: isActive,
            [s.activeButton]: isActive,
            [s.exitingButton]: isExiting,
          })}
          onClick={handleClickRedirectTo}
        >
          <ArrowForwardIos className={s.plusIcon} />
        </button>
      )}
    </div>
  );
});

Index.displayName = "BentoCard";

export default Index;
