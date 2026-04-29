import React from 'react';
import { Box, Typography } from '@mui/material';

interface TeamMember {
  name: string;
  role: string;
}

interface TeamGridCompactProps {
  team: TeamMember[];
}

export const TeamGridCompact: React.FC<TeamGridCompactProps> = ({ team }) => {
  return (
    <Box
      mb={{ xs: 1, md: 4 }}
      sx={{
        display: 'grid',
        gridTemplateRows: 'repeat(2, 1fr)',
        gridAutoFlow: 'column',
        gridAutoColumns: 'minmax(220px, 1fr)',
        gap: { xs: 1, md: 2 },
        '@media (max-width: 800px)': {
          gridTemplateRows: 'auto',
          gridAutoFlow: 'row',
          gridAutoColumns: 'auto',
          gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
        },
      }}
    >
      {team.map((member, idx) => (
        <Box
          key={idx}
          bgcolor="#303947"
          color="#fff"
          borderRadius={2}
          px={2}
          py={2}
          display="flex"
          flexDirection="column"
          alignItems="flex-start"
          justifyContent="center"
        >
          <Typography
            variant="subtitle1"
            fontWeight={700}
            fontFamily="Inter, Arial, sans-serif"
            sx={{ lineHeight: 1.25, mb: 0.5 }}
          >
            {member.name}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            fontFamily="Inter, Arial, sans-serif"
            sx={{ lineHeight: 1.3 }}
          >
            {member.role}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};
