'use client';

import React from 'react';
import { Box } from '@mui/material';
import { TeamMemberCard } from './TeamMemberCard';

interface TeamMember {
  name: string;
  role: string;
}

interface TeamGridProps {
  team: TeamMember[];
}

export const TeamGrid: React.FC<TeamGridProps> = ({ team }) => {
  return (
    <Box
      mb={{ xs: 1, md: 4 }}
      sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
        gap: { xs: 1, md: 4 },
        '@media (max-width:1600px)': { gridTemplateColumns: 'repeat(3, minmax(0, 1fr))' },
        '@media (max-width:1200px)': { gridTemplateColumns: 'repeat(2, minmax(0, 1fr))' },
        '@media (max-width:800px)': { gridTemplateColumns: '1fr' },
      }}
    >
      {team.map((member, idx) => (
        <TeamMemberCard key={idx} member={member} />
      ))}
    </Box>
  );
};
