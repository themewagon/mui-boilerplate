import { Box, Button, Stack, Typography } from '@mui/material';
import illustration5 from 'assets/illustrations/5.webp';

const Page404 = () => {
  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      sx={{ minHeight: '100vh', p: { xs: 2.5, sm: 5 } }}
    >
      <Stack direction="column" alignItems="center" justifyContent="center" textAlign="center">
        <Box
          component="img"
          src={illustration5}
          sx={{
            width: 1,
            maxWidth: 800,
            mb: 10,
          }}
        />
        <Box textAlign="center">
          <Typography variant="h2" color="text.disabled" fontWeight="medium" mb={2}>
            Page not found
          </Typography>
          <Typography variant="h5" color="text.secondary" fontWeight="normal" sx={{ mb: 5 }}>
            No worries! Let’s take you back
            <Box
              component="br"
              sx={{
                display: {
                  xs: 'none',
                  sm: 'block',
                },
              }}
            />
            while our bear is searching everywhere
          </Typography>

          <Button variant="contained" href="/" size="large" sx={{ px: 7 }}>
            Go Back Home{' '}
          </Button>
        </Box>
      </Stack>
    </Stack>
  );
};

export default Page404;
