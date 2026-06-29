import React from 'react';
// Image paths as constants - Next.js serves files from public directory
const discordImg = '/img/discord.png';
const cursorImg = '/img/cursor.png';
import { Box, Typography } from '@mui/material';

const Join: React.FC = () => (
    <Box px={{ xs: 2, md: 6 }} pt={6} pb={3}>
      {/* Two-column section: Discord box on left, Volunteer form on right */}
      <Box display="grid" gridTemplateColumns={{ xs: '1fr', md: '1fr 1fr' }} gap={4} mb={6}>
        {/* Left: Discord box */}
        <Box bgcolor="#303947" color="#fff" borderRadius={2} p={4} border="3px solid #4083cc">
          <Typography variant="h4" fontWeight={700} fontFamily="Inter, Arial, sans-serif" mb={2} align="center">
            Join Our Discord Server
          </Typography>
          <Box display="flex" flexDirection="row" alignItems="center" justifyContent="space-between" sx={{ flexWrap: { xs: 'wrap', md: 'nowrap' } }}>
            <Box flex={1} display="flex" justifyContent="flex-start" alignItems="center" sx={{ minWidth: 0 }}>
              <iframe
                title="Discord widget"
                src="https://discord.com/widget?id=750366801430577263&theme=dark"
                frameBorder="0"
                sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
                style={{ background: '#fff', borderRadius: 8, width: '100%', minWidth: 200, minHeight: 300, maxWidth: 350 }}
              ></iframe>
            </Box>
            <Box flex={1} display={{ xs: 'none', md: 'flex' }} flexDirection="column" justifyContent="center" alignItems="center" sx={{ minWidth: 0 }}>
              <img src={cursorImg} alt="Click cursor" style={{ width: 80, height: 80, marginBottom: -120, marginLeft: 20, pointerEvents: 'none', zIndex: 2, position: 'relative' }} />
              <a href="https://discord.gg/ecJhHVd" target="_blank" rel="noopener noreferrer">
                <img src={discordImg} alt="Join Discord" style={{ maxWidth: 120, width: '100%', height: 'auto', cursor: 'pointer', border: 'none', background: 'none', boxShadow: 'none', borderRadius: 0 }} />
              </a>
            </Box>
          </Box>
          <Typography color="text.secondary" fontFamily="Inter, Arial, sans-serif" mt={15} align="center">
            Our organization operates through Discord, a popular communication platform. Please join our Discord server to begin volunteering, or email <a href="mailto:info@projectnextech.org" style={{ color: '#4083cc' }}>info@projectnextech.org</a> if you would like to volunteer but don&apos;t have access to Discord.
          </Typography>
        </Box>

        {/* Right: Volunteer form */}
        <Box bgcolor="#473024" color="#fff" borderRadius={2} p={4} border="3px solid #f24c02">
          <Typography variant="h4" fontWeight={700} fontFamily="Inter, Arial, sans-serif" mb={2} align="center">
            Enroll as a Volunteer
          </Typography>
          <Box sx={{ borderRadius: 2, overflow: 'hidden', boxShadow: 2 }}>
            <iframe
              title="Volunteer Registration Form"
              src="https://docs.google.com/forms/d/e/1FAIpQLScpE2rJqM4gI4q5C2Ry7PtYJZobi8DX6wITFvSlhmXKadXA_A/viewform?embedded=true"
              width="100%"
              height="500"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              style={{ background: '#fff', borderRadius: 8, width: '100%', minHeight: 400, filter: 'invert(85%) hue-rotate(180.0deg)' }}
            >Loading…</iframe>
          </Box>
        </Box>
      </Box>

      {/* Slideshow Section - Impact Map Style */}
      <Box mb={6} textAlign="center">
        <Typography variant="h4" fontWeight={700} mb={2} fontFamily="Inter, Arial, sans-serif" align="center">
          Slideshow For Prospective Volunteers
        </Typography>
        <Box display="flex" justifyContent="center">
          <iframe
            title="Slideshow embed"
            src="https://docs.google.com/presentation/d/e/2PACX-1vTMRe5ohfcSK208TugQNBneEb-0pdRfM-7Z-aY55nKSu9zUDd3wyK40giYneeY5UR0wI4Uh5oulXvMB/pubembed?start=false&loop=false&delayms=3000"
            frameBorder="0"
            width="1055"
            height="630"
            allowFullScreen
            style={{ border: 0, maxWidth: '100%', aspectRatio: '16/9', background: '#fff', borderRadius: 12, boxShadow: '0 2px 12px rgba(0,0,0,0.10)' }}
          ></iframe>
        </Box>
      </Box>
    </Box>
);

export default Join;