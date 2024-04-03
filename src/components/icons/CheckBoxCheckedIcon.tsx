import { SvgIcon, SvgIconProps } from '@mui/material';

const CheckBoxCheckedIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props}>
      <rect width="16" height="16" rx="4" fill="currentColor" />
      <path
        d="M6.30013 11.7669C6.22235 11.7669 6.15291 11.753 6.0918 11.7252C6.03069 11.6974 5.9668 11.6558 5.90013 11.6002L2.88346 8.58353C2.77235 8.47242 2.7168 8.33353 2.7168 8.16686C2.7168 8.0002 2.77235 7.86131 2.88346 7.7502C2.99457 7.63908 3.12791 7.58353 3.28346 7.58353C3.43902 7.58353 3.57235 7.63908 3.68346 7.7502L6.30013 10.3669L12.3001 4.36686C12.4112 4.25575 12.5446 4.2002 12.7001 4.2002C12.8557 4.2002 12.9946 4.25575 13.1168 4.36686C13.2279 4.47797 13.2835 4.61408 13.2835 4.7752C13.2835 4.93631 13.2279 5.07242 13.1168 5.18353L6.70013 11.6002C6.63346 11.6558 6.56957 11.6974 6.50846 11.7252C6.44735 11.753 6.37791 11.7669 6.30013 11.7669Z"
        fill="white"
      />
    </SvgIcon>
  );
};

export default CheckBoxCheckedIcon;
