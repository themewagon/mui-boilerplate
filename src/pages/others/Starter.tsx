import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Button, Stack, Typography } from '@mui/material';
import rocket from 'assets/illustrations/rocket.webp';

const Starter = () => {
  return (
    <Box display="grid" alignContent={{ md: 'center' }} height={1}>
      <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gridTemplateRows={{ md: '1fr' }}>
        <Paper
          sx={{
            gridColumn: { xs: '1/-1', md: '7/12', lg: '7/11', xl: '7/10' },
            gridRow: { md: '1/-1' },
            p: { xs: 3, lg: 5 },
            position: 'relative',
            order: { xs: 1, md: 0 },
          }}
          background={1}
        >
          <Paper sx={{ position: 'absolute', inset: 0, height: '25%', width: 1 }} />
          <Box
            sx={{
              width: 1,
              maxWidth: '25rem',
              margin: '0 auto',
              textAlign: 'center',
              position: 'relative',
            }}
          >
            <img src={rocket} alt="starter-rocket" style={{ width: '100%' }} />
            <Typography variant="h6" color="text.secondary" mb={2} fontWeight={500}>
              Edit me!
            </Typography>
            <Button variant="contained" color="primary" sx={{ width: 1 }}>
              Get Started
            </Button>
          </Box>
        </Paper>
        <Paper
          sx={{
            gridColumn: { xs: '1/-1', md: '2/7', lg: '3/7', xl: '4/7' },
            gridRow: { md: '1/-1' },
            p: { xs: 3, lg: 5 },
            position: 'relative',
          }}
        >
          <Paper
            background={1}
            sx={{
              position: 'absolute',
              inset: 0,
              height: '25%',
              width: 1,
              display: { xs: 'none', md: 'block' },
            }}
          />
          <Stack
            direction="column"
            justifyContent={{ md: 'flex-end' }}
            rowGap={1}
            sx={{ textAlign: { xs: 'center', md: 'end' }, height: 1, position: 'relative' }}
          >
            <Typography variant="h3" sx={{ fontWeight: 'light', color: 'primary.main' }}>
              Create
            </Typography>
            <Typography variant="h3" sx={{ fontWeight: 'light', color: 'text.secondary' }}>
              Something
            </Typography>
            <Typography variant="h3" sx={{ fontWeight: 'light', color: 'text.secondary' }}>
              Beautiful
            </Typography>
          </Stack>
        </Paper>
      </Box>
    </Box>
  );
};

export default Starter;
