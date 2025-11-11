'use client';

import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import TeamMemberDialog from './TeamMemberDialog';
import { getTeamImages, getTeamDescription, getTeamData } from '../data/teamData';

interface TeamMember {
  name: string;
  role: string;
}

interface TeamGridProps {
  team: TeamMember[];
}

export const TeamGrid: React.FC<TeamGridProps> = ({ team }) => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogMember, setDialogMember] = useState<{ name: string; images: string[]; description: string } | null>(null);

  const handleLearnMore = (member: TeamMember) => {
    const allImages = getTeamImages(member.name);
    // If there's only one image, use it. Otherwise, skip the first (thumbnail) image
    const carouselImages = allImages.length === 1 ? allImages : allImages.slice(1);
    
    setDialogMember({
      name: member.name,
      images: carouselImages,
      description: getTeamDescription(member)
    });
    setDialogOpen(true);
  };

  return (
    <>
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
        {team.map((member, idx) => {
          const memberImage = getTeamImages(member.name)[0];
          const memberData = getTeamData(member.name);
          return (
          <Box key={idx} bgcolor="#303947" color="#fff" borderRadius={2} p={0} display="flex" flexDirection="row" alignItems="center" maxHeight="175px">
            <Box display="flex" flexDirection="column" justifyContent="center" height="100%" pl={0} pr={0} py={2}>
              <img
                src={memberImage}
                alt={member.name}
                style={{
                  borderRadius: 12,
                  height: '100%',
                  width: '175px',
                  objectFit: 'contain',
                  display: 'block',
                  maxWidth: '100%',
                }}
                srcSet={`${memberImage} 175w`}
                sizes="(max-width: 1200px) 150px, 175px"
              />
            </Box>
            <Box flex={1} display="flex" flexDirection="column" alignItems="flex-start" justifyContent="center" pl={2} pr={2} py={2}>
              <Box display="flex" alignItems="center" justifyContent="space-between" width="100%" mb={0.5}>
                <Typography
                  variant="h6"
                  fontWeight={700}
                  fontFamily="Inter, Arial, sans-serif"
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
                {memberData.isEC && (
                  <Box
                    component="span"
                    title="Executive Committee Member"
                    sx={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      bgcolor: '#f24c02',
                      color: '#fff',
                      borderRadius: 1,
                      px: 0.75,
                      py: 0.25,
                      fontSize: '0.7rem',
                      fontWeight: 700,
                      fontFamily: 'Inter, Arial, sans-serif',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                      flexShrink: 0,
                      ml: 1,
                    }}
                  >
                    EC
                  </Box>
                )}
              </Box>
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
          );
        })}
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
