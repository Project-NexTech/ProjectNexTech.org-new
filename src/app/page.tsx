import React from 'react';
import { Box, Typography, Button, Card, CardContent } from '@mui/material';
import Link from 'next/link';
import { bigNumbers as globalBigNumbers } from '../data/bigNumbers';
import HomeCarousel from '../components/HomeCarousel';

const carouselImages = [
  '/img/carousel_1.png',
  '/img/carousel_2.png',
  '/img/carousel_3.png',
  '/img/carousel_4.png',
  '/img/carousel_5.png',
  '/img/carousel_6.png',
  '/img/carousel_7.png',
  '/img/carousel_8.png',
];

const buttons = [
  { label: 'About us', to: '/about', color: 'primary' },
  { label: 'Attend programs', to: '/programs', color: 'secondary' },
  { label: 'Volunteer', to: '/join', color: 'primary' },
  { label: 'Host a program', to: '/programs', color: 'secondary' },
  { label: 'Contribute', to: '/contribute', color: 'primary' },
  { label: 'Meet the team', to: '/team', color: 'secondary' },
];

// Only show the relevant stats for Home page
const bigNumbers = [
  globalBigNumbers[0], // Students Taught
  globalBigNumbers[2], // Countries Reached
  globalBigNumbers[3], // Volunteer Hours
  globalBigNumbers[6], // Programs Run
];

export default function Home() {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" sx={{ mt: 0 }}>
      <Box
        display="flex"
        flexDirection={{ xs: 'column', md: 'row' }}
        alignItems="center"
        justifyContent="center"
        minHeight="60vh"
        width="100%"
        maxWidth={1800}
        sx={{ px: { xs: '7.5vw', md: '7.5vw' }, mt: 0 }}>
        {/* Left: Title, Subtitle, Buttons */}
        <Box
          flex={1}
          display="flex"
          flexDirection="column"
          alignItems={{ xs: 'center', md: 'flex-start' }}
          justifyContent="center"
          mb={{ xs: 0.1, sm: 0.1, md: 0, lg: 0, xl: 0 }}
          sx={{ minWidth: 0 }}
        >
          <Typography
            variant="h2"
            sx={{
              fontFamily: 'Inter, Arial, sans-serif',
              fontWeight: 550,
              color: '#fff',
              mb: 1.2,
              fontSize: { xs: 40, sm: 48, md: 56 },
              textAlign: 'left',
            }}
          >
            Free and effective STEM education
          </Typography>
          <Typography variant="h5" sx={{ fontFamily: 'Inter, Arial, sans-serif', color: '#b0b0b0', mb: 2 }}>
            Join our global community for interactive, accessible, and high-quality STEM education.
          </Typography>
          <Box display="grid" gridTemplateColumns={{ xs: '1fr', sm: '1fr 1fr' }} gap={2} sx={{ mb: 0 }}>
            {buttons.map((btn) => (
              <Box key={btn.label}>
                <Button
                  fullWidth
                  variant={btn.color === 'primary' ? 'contained' : 'contained'}
                  color={btn.color === 'primary' ? 'primary' : undefined}
                  size="large"
                  component={Link}
                  href={btn.to}
                  sx={{
                    fontFamily: 'Inter, Arial, sans-serif',
                    fontWeight: 500,
                    mb: 1,
                    textTransform: 'none',
                    fontSize: 20,
                    backgroundColor: btn.color === 'secondary' ? '#4083cc' : undefined,
                    color: btn.color === 'secondary' ? '#fff' : undefined,
                    '&:hover': btn.color === 'secondary' ? { backgroundColor: '#3366a3' } : {},
                  }}
                >
                  {btn.label}
                </Button>
              </Box>
            ))}
          </Box>
        </Box>
        {/* Spacer between left content and carousel (desktop only) */}
        <Box display={{ xs: 'none', md: 'block', lg: 'block' }} sx={{ width: '7.5vw', minWidth: '7.5vw' }} />
        {/* Right: Carousel (desktop, >1200px), below buttons (900px-1200px and mobile) */}
        <Box
          flex={1.1}
          display={{ xs: 'none', md: 'none', lg: 'flex' }}
          justifyContent="flex-end"
          alignItems="center"
          minWidth={0}
          sx={{ width: '100%' }}
        >
          <Box sx={{ width: '100%', maxWidth: `calc(100vw - 2 * 7.5vw - 7.5vw - 400px)` }}>
            <HomeCarousel images={carouselImages} />
          </Box>
        </Box>
      </Box>
      {/* Carousel for mobile and 900px-1200px view (below buttons) */}
      <Box display={{ xs: 'block', md: 'block', lg: 'none' }} width="100%" sx={{ px: '7.5vw', mt: { xs: 0, sm: 0, md: 0, lg: 0.5, xl: 0.5 }, mb: { xs: 3, sm: 3, md: 3, lg: 2.5, xl: 2.5 } }}>
        <Box sx={{ width: '100%', aspectRatio: '16/9', maxHeight: '60vw', maxWidth: 600, mx: 'auto' }}>
          <HomeCarousel images={carouselImages} />
        </Box>
      </Box>
      {/* Big Numbers Section as responsive grid */}
      <Box mt={{ xs: 3, sm: 3, md: 0.5, lg: 2 }} mb={{ xs: 1.2, md: 1.2 }} width="100%" sx={{ px: { xs: '7.5vw', md: '7.5vw' } }}>
        <Box
          display="grid"
          gridTemplateColumns={{ xs: '1fr 1fr', md: '1fr 1fr 1fr 1fr' }}
          gap={4}
          width="100%"
        >
          {bigNumbers.map((item, idx) => {
            // Alternate between orange and blue colors
            const numberColor = idx % 2 === 0 ? '#f24c02' : '#4083cc';
            return (
              <Card key={idx} sx={{ background: '#473024', color: '#fff', textAlign: 'center', py: { xs: 1, md: 3 }, boxShadow: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <CardContent>
                  <Typography
                    variant="h2"
                    fontWeight={700}
                    fontFamily="Inter, Arial, sans-serif"
                    sx={{
                      color: numberColor,
                      fontSize: {
                        xs: 36,
                        md: 64,
                        lg: 64,
                        xl: 72,
                      },
                      '@media (max-width:1500px)': {
                        fontSize: '4vw',
                      },
                      '@media (max-width:900px)': {
                        fontSize: '8vw',
                      },
                    }}
                  >
                    {item.number}
                  </Typography>
                  <Typography
                    color="text.secondary"
                    fontFamily="Inter, Arial, sans-serif"
                    sx={{
                      fontSize: {
                        xs: 18,
                        md: 24,
                      },
                      '@media (max-width:1500px)': {
                        fontSize: '1.3vw',
                      },
                      '@media (max-width:900px)': {
                        fontSize: '3vw',
                      },
                    }}
                  >
                    {item.label}
                  </Typography>
                </CardContent>
              </Card>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
}
