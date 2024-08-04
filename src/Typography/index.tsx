import React, { forwardRef } from "react";
import clsx from "clsx";
import s from "./Typography.module.scss";

type TypographySize = "sm" | "md" | "lg" | "lead";
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
      size = "sm",
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
    size = "md",
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
    size = "sm",
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

interface TypographyControllerProps extends CombinedTypographyProps {
  variant: TypographyVariant;
}

const Typography: React.FC<TypographyControllerProps> = ({
  variant,
  ...props
}) => {
  switch (variant) {
    case "title":
      return <Title {...props} />;
    case "subtitle":
      return <Subtitle {...props} />;
    case "paragraph":
      return <Paragraph {...props} />;
    case "muted":
      return <Muted {...props} />;
    case "quote":
      return <Quote {...props} />;
    default:
      return null;
  }
};

Typography.displayName = "Typography";

export default Typography;
