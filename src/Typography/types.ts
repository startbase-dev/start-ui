import type { AllHTMLAttributes, ReactNode } from 'react';

type TypographySize = 'small' | 'medium' | 'large' | 'lead';
type TypographyColor = 'default' | 'info' | 'warning' | 'error' | 'success';
type TypographyDecoration = 'underline' | 'overline' | 'linethrough';
type TypographyElement = 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export interface BaseTypographyProps
  extends Omit<AllHTMLAttributes<HTMLElement>, 'size'> {
  color?: TypographyColor;
  decoration?: TypographyDecoration;
  italic?: boolean;
  bold?: boolean;
  gradient?: boolean;
  children: ReactNode;
  className?: string;
}

export interface TitleProps extends BaseTypographyProps {
  size?: TypographySize;
}

export interface SubtitleProps extends BaseTypographyProps {
  elementType?: TypographyElement;
}

export interface ParagraphProps extends BaseTypographyProps {
  size?: TypographySize;
}

export interface MutedProps extends BaseTypographyProps {
  size?: TypographySize;
}

export interface QuoteProps extends BaseTypographyProps {
  size?: TypographySize;
}

type CombinedTypographyProps = TitleProps &
  SubtitleProps &
  ParagraphProps &
  MutedProps &
  QuoteProps;

type TypographyVariant = 'title' | 'subtitle' | 'paragraph' | 'muted' | 'quote';

export interface TypographyProps extends CombinedTypographyProps {
  variant: TypographyVariant;
}
