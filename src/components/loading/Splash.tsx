import { Box, Stack, StackOwnProps } from '@mui/material';


const Splash = (props: StackOwnProps) => {
  return (
    <Stack alignItems="center" justifyContent="center" height="100vh" {...props}>
      <Box height={50} width={50}>
      //loading component
      </Box>
    </Stack>
  );
};

export default Splash;
