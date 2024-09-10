import React, { forwardRef } from "react";
import clsx from "clsx";
// eslint-disable-next-line css-modules/no-unused-class
import s from "./Typography.module.scss";
import "../style/components/typography.scss";

type TypographySize = "small" | "medium" | "large" | "lead";
type TypographyColor = "default" | "info" | "warning" | "error" | "success";
type TypographyDecoration = "underline" | "overline" | "linethrough";
type TypographyElement = "h2" | "h3" | "h4" | "h5" | "h6";

interface BaseTypographyProps {
  color?: TypographyColor;
  decoration?: TypographyDecoration;
  italic?: boolean;
  bold?: boolean;
  gradient?: boolean;
  children: React.ReactNode;
  className?: string;
}

interface TitleProps extends BaseTypographyProps {
  size?: TypographySize;
}

interface SubtitleProps extends BaseTypographyProps {
  elementType?: TypographyElement;
}

interface ParagraphProps extends BaseTypographyProps {
  size?: TypographySize;
}

interface MutedProps extends BaseTypographyProps {
  size?: TypographySize;
}

interface QuoteProps extends BaseTypographyProps {
  size?: TypographySize;
}

type CombinedTypographyProps = TitleProps &
  SubtitleProps &
  ParagraphProps &
  MutedProps &
  QuoteProps;

const Title = forwardRef<HTMLHeadingElement, TitleProps>((props, ref) => {
  const {
    size = "lead",
    color = "default",
    decoration = false,
    italic = false,
    bold = false,
    gradient = false,
    children,
    className,
    ...rest
  } = props;

  const typographyClass: string = clsx(
    s.root,
    s.title,
    s[size],
    s[color],
    {
      [s[decoration || ""]]: decoration,
      [s.italic]: italic,
      [s.bold]: bold,
      [s.gradient]: gradient,
    },
    className,
  );

  return (
    <h1 className={typographyClass} ref={ref} {...rest}>
      {children}
    </h1>
  );
});
Title.displayName = "Title";

const Subtitle = forwardRef<HTMLHeadingElement, SubtitleProps>((props, ref) => {
  const {
    color = "default",
    decoration = false,
    italic = false,
    bold = false,
    gradient = false,
    elementType = "h3",
    children,
    className,
    ...rest
  } = props;

  const typographyClass: string = clsx(
    s.root,
    s.subtitle,
    s[color],
    {
      [s[decoration || ""]]: decoration,
      [s.italic]: italic,
      [s.bold]: bold,
      [s.gradient]: gradient,
    },
    className,
  );

  const Component = elementType;

  return (
    <Component className={typographyClass} ref={ref} {...rest}>
      {children}
    </Component>
  );
});
Subtitle.displayName = "Subtitle";

const Paragraph = forwardRef<HTMLParagraphElement, ParagraphProps>(
  (props, ref) => {
    const {
      size = "small",
      color = "default",
      decoration = false,
      italic = false,
      bold = false,
      gradient = false,
      children,
      className,
      ...rest
    } = props;

    const typographyClass: string = clsx(
      s.root,
      s.paragraph,
      s[size],
      s[color],
      {
        [s[decoration || ""]]: decoration,
        [s.italic]: italic,
        [s.bold]: bold,
        [s.gradient]: gradient,
      },
      className,
    );

    return (
      <p className={typographyClass} ref={ref} {...rest}>
        {children}
      </p>
    );
  },
);
Paragraph.displayName = "Paragraph";
const Muted = forwardRef<HTMLParagraphElement, MutedProps>((props, ref) => {
  const {
    size = "medium",
    color = "default",
    decoration = false,
    italic = false,
    bold = false,
    gradient = false,
    children,
    className,
    ...rest
  } = props;

  const typographyClass: string = clsx(
    s.root,
    s.muted,
    s[size],
    s[color],
    {
      [s[decoration || ""]]: decoration,
      [s.italic]: italic,
      [s.bold]: bold,
      [s.gradient]: gradient,
    },
    className,
  );

  return (
    <p className={typographyClass} ref={ref} {...rest}>
      {children}
    </p>
  );
});
Muted.displayName = "Muted";

const Quote = forwardRef<HTMLQuoteElement, QuoteProps>((props, ref) => {
  const {
    size = "small",
    color = "default",
    decoration = false,
    italic = false,
    bold = false,
    gradient = false,
    children,
    className,
    ...rest
  } = props;

  const typographyClass: string = clsx(
    s.root,
    s.quote,
    s[size],
    s[color],
    {
      [s[decoration || ""]]: decoration,
      [s.italic]: italic,
      [s.bold]: bold,
      [s.gradient]: gradient,
    },
    className,
  );

  return (
    <blockquote className={typographyClass} ref={ref} {...rest}>
      {children}
    </blockquote>
  );
});
Quote.displayName = "Quote";

type TypographyVariant = "title" | "subtitle" | "paragraph" | "muted" | "quote";

export interface TypographyControllerProps extends CombinedTypographyProps {
  variant: TypographyVariant;
}

const Typography = forwardRef<HTMLElement, TypographyControllerProps>(
  ({ variant, ...props }, ref) => {
    switch (variant) {
      case "title":
        return <Title ref={ref as React.Ref<HTMLHeadingElement>} {...props} />;
      case "subtitle":
        return (
          <Subtitle ref={ref as React.Ref<HTMLHeadingElement>} {...props} />
        );
      case "paragraph":
        return (
          <Paragraph ref={ref as React.Ref<HTMLParagraphElement>} {...props} />
        );
      case "muted":
        return (
          <Muted ref={ref as React.Ref<HTMLParagraphElement>} {...props} />
        );
      case "quote":
        return <Quote ref={ref as React.Ref<HTMLQuoteElement>} {...props} />;
      default:
        return (
          <Paragraph ref={ref as React.Ref<HTMLParagraphElement>} {...props} />
        );
    }
  },
);

Typography.displayName = "Typography";

export default Typography;
