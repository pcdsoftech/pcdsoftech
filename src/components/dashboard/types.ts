import { SxProps, Theme } from '@mui/material';

export interface ActionButton {
  label: string;
  href: string;
}

export interface CardProps {
  title: string;
  description: string;
  weight: number;
}

export interface MainSectionProps {
  className?: string;
  sx?: SxProps<Theme>;
}

export const THEME = {
  colors: {
    primary: '#882140',
    secondary: '#85203f',
    background: {
      dark: '#241f20',
      gradient: 'linear-gradient(90deg, #241f20 0%, #85203f 100%)'
    },
    text: {
      primary: '#fff',
      secondary: '#bbb'
    }
  }
}; 