'use client';

import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import TeamMemberDialog from './TeamMemberDialog';
import { getTeamImages, getTeamDescription } from '../lib/teamData';

interface TeamMember {
  name: string;
  role: string;
  images: string[];
}

interface TeamGridProps {
  team: TeamMember[];
}

export const TeamGrid: React.FC<TeamGridProps> = ({ team }) => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogMember, setDialogMember] = useState<{ name: string; images: string[]; description: string } | null>(null);

  const handleLearnMore = (member: TeamMember) => {
    setDialogMember({
      name: member.name,
      images: getTeamImages(member.name),
      description: getTeamDescription(member)
    });
    setDialogOpen(true);
  };

  return (
    <>
      <Box
        mb={4}
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
          gap: { xs: 2, md: 4 },
          '@media (max-width:1600px)': { gridTemplateColumns: 'repeat(3, minmax(0, 1fr))' },
          '@media (max-width:1200px)': { gridTemplateColumns: 'repeat(2, minmax(0, 1fr))' },
          '@media (max-width:800px)': { gridTemplateColumns: '1fr' },
        }}
      >
        {team.map((member, idx) => (
          <Box key={idx} bgcolor="#303947" color="#fff" borderRadius={2} p={0} display="flex" flexDirection="row" alignItems="center" maxHeight="175px">
            <Box display="flex" flexDirection="column" justifyContent="center" height="100%" pl={0} pr={0} py={2}>
              <img
                src={member.images[0]}
                alt={member.name}
                style={{
                  borderRadius: 12,
                  height: '100%',
                  width: '175px',
                  objectFit: 'contain',
                  display: 'block',
                  maxWidth: '100%',
                }}
                srcSet={`${member.images[0]} 175w`}
                sizes="(max-width: 1200px) 150px, 175px"
              />
            </Box>
            <Box flex={1} display="flex" flexDirection="column" alignItems="flex-start" justifyContent="center" pl={2} pr={2} py={2}>
              <Typography
                variant="h6"
                fontWeight={700}
                fontFamily="Inter, Arial, sans-serif"
                mb={0.5}
                sx={{
                  fontSize: {
                    xs: '1.1rem',
                    sm: '1.2rem',
                    md: '1.25rem',
                  },
                  '@media (max-width:1600px)': {
                    fontSize: 'calc(1.25rem - ((1600px - 100vw) / 800 * 0.15rem))',
                  },
                  '@media (max-width:1200px)': {
                    fontSize: '1.1rem',
                  },
                }}
              >
                {member.name}
              </Typography>
              <Typography
                color="text.secondary"
                fontFamily="Inter, Arial, sans-serif"
                mb={1}
                sx={{
                  fontSize: {
                    xs: '0.95rem',
                    sm: '1rem',
                    md: '1.05rem',
                  },
                  '@media (max-width:1600px)': {
                    fontSize: 'calc(1.05rem - ((1600px - 100vw) / 800 * 0.1rem))',
                  },
                  '@media (max-width:1200px)': {
                    fontSize: '0.95rem',
                  },
                }}
              >
                {member.role}
              </Typography>
              <Box mt={1}>
                <button
                  style={{
                    background: '#f24c02',
                    color: '#fff',
                    border: 'none',
                    borderRadius: 6,
                    padding: '6px 16px',
                    fontWeight: 600,
                    cursor: 'pointer',
                    fontFamily: 'Inter, Arial, sans-serif',
                    fontSize: 14
                  }}
                  onClick={() => handleLearnMore(member)}
                >Learn more</button>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
      {dialogMember && (
        <TeamMemberDialog
          open={dialogOpen}
          onClose={() => setDialogOpen(false)}
          name={dialogMember.name}
          images={dialogMember.images}
          description={dialogMember.description}
        />
      )}
    </>
  );
};
