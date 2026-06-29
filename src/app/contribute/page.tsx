import React from 'react';
import { Box, Typography, Card, CardContent } from '@mui/material';
import { bigNumbers as globalBigNumbers } from '../../data/bigNumbers.ts';
import DonorboxEmbed from '../../components/DonorboxEmbed';

// Only show the relevant stats for Contribute page
const bigNumbers = [
  globalBigNumbers[0], // Students Taught
  globalBigNumbers[2], // Countries Reached
  globalBigNumbers[3], // Volunteer Hours
  globalBigNumbers[6], // Programs Run
];

const Contribute: React.FC = () => {
  return (
      <Box px={{ xs: 2, md: 6 }} pt={6} pb={3} sx={{ width: '100%', boxSizing: 'border-box' }}>
        {/* Three-column section: donation portal, text, partnership form */}
        <Box display="grid" gridTemplateColumns={{ xs: '1fr', md: '1fr 1fr 1fr' }} gap={4} mb={6} sx={{ width: '100%', boxSizing: 'border-box' }}>
          {/* Left: Donation portal */}
          <Box bgcolor="#473024" color="#fff" borderRadius={2} pt={4} px={4} pb={2} border="3px solid #f24c02" display="flex" flexDirection="column" alignItems="center" justifyContent="center" sx={{ width: { xs: '100%' }, boxSizing: { xs: 'border-box' }, maxWidth: { xs: '100vw' }, overflowX: 'auto' }}>
            <Typography variant="h4" fontWeight={700} fontFamily="Inter, Arial, sans-serif" mb={2} align="center">Make a Donation</Typography>
            <DonorboxEmbed />
          </Box>

          {/* Middle: Text content */}
          <Box display="flex" flexDirection="column" justifyContent="center" textAlign="center" gap={4}>
            <Box>
              <Typography variant="h4" fontWeight={700} fontFamily="Inter, Arial, sans-serif" mb={2} align="center">Make a Donation</Typography>
              <Typography color="text.secondary" fontFamily="Inter, Arial, sans-serif" align="center">
                Your donations support our programs by helping us reimburse volunteers, purchase materials, secure insurance, pay for online services, and have food at our programs. You can choose how you want your money to be spent.
              </Typography>
            </Box>
            <Box>
              <Typography variant="h4" fontWeight={700} fontFamily="Inter, Arial, sans-serif" mb={2} align="center">Partner with Us</Typography>
              <Typography color="text.secondary" fontFamily="Inter, Arial, sans-serif" align="center">
                If you or your organization would like to partner with us by hosting events together or sponsoring us with monetary or in-kind support, please fill out the Partnership Form and we will get back to you soon!
              </Typography>
            </Box>
          </Box>

          {/* Right: Partnership form */}
          <Box bgcolor="#303947" color="#fff" borderRadius={2} p={4} border="3px solid #4083cc" sx={{ width: { xs: '100%' }, boxSizing: { xs: 'border-box' }, maxWidth: { xs: '100vw' }, overflowX: 'auto' }}>
            <Typography variant="h4" fontWeight={700} fontFamily="Inter, Arial, sans-serif" mb={2} align="center">
              Partnership Form
            </Typography>
            <Box sx={{ borderRadius: 2, overflow: 'hidden', boxShadow: 2 }}>
              <iframe
                title="Sponsor Form"
                src="https://docs.google.com/forms/d/e/1FAIpQLSfThOoGtbO4ltvp2bOnRIBv-Ivj4qt_MjZdB12cdPIfDdjrnQ/viewform?embedded=true"
                width="100%"
                height="800"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                style={{ background: '#fff', borderRadius: 8, width: '100%', minHeight: 700, filter: 'invert(85%) hue-rotate(180.0deg)' }}
              >Loading…</iframe>
            </Box>
          </Box>
        </Box>

        {/* Big Numbers Section as responsive grid */}
        <Box
          display="grid"
          gridTemplateColumns={{ xs: '1fr 1fr', md: '1fr 1fr 1fr 1fr' }}
          gap={4}
          width="100%"
          sx={{ px: { xs: '7.5vw', md: '7.5vw' }, boxSizing: 'border-box' }}
        >
          {bigNumbers.map((item, idx) => {
            // Alternate between orange and blue colors
            const numberColor = idx % 2 === 0 ? '#f24c02' : '#4083cc';
            return (
              <Card key={idx} sx={{ background: '#473024', color: '#fff', textAlign: 'center', py: { xs: 1, md: 3 }, boxShadow: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <CardContent>
                  <Typography
                    variant="h2"
                    fontWeight={800}
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
  );
};

export default Contribute;
