import { Badge, BadgeOwnProps, styled } from '@mui/material';

interface OutlineOptions {
  color?: string;
  width?: number;
}

interface OutlinedBadgeProps extends BadgeOwnProps {
  outlineOptions?: OutlineOptions;
}

const OutlinedBadge = styled((props: OutlinedBadgeProps) => <Badge {...props} />, {
  shouldForwardProp: (prop) => prop !== 'outlineOptions',
})(({ theme, outlineOptions }) => {
  const borderWidth = outlineOptions?.width || 2;
  const borderColor = outlineOptions?.color || theme.palette.background.paper;
  return {
    '.MuiBadge-badge': {
      '&::after': {
        position: 'absolute',
        content: "''",
        top: -borderWidth,
        left: -borderWidth,
        right: -borderWidth,
        bottom: -borderWidth,
        borderWidth: outlineOptions?.width || 2,
        borderColor: borderColor,
        borderStyle: 'solid',
        borderRadius: '50%',
      },
    },
  };
});

export default OutlinedBadge;
