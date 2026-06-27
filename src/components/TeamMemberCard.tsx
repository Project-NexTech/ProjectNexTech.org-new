'use client';

import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import TeamMemberDialog from './TeamMemberDialog';
import { getTeamImages, getTeamDescription, getTeamData } from '../data/teamData';

interface TeamMember {
  name: string;
  role: string;
}

interface TeamMemberCardProps {
  member: TeamMember;
  hideLearnMore?: boolean;
}

export const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member, hideLearnMore }) => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const memberImage = getTeamImages(member.name)[0];
  const memberData = getTeamData(member.name);

  const allImages = getTeamImages(member.name);
  const carouselImages = allImages.length === 1 ? allImages : allImages.slice(1);

  return (
    <>
      <Box bgcolor="#303947" color="#fff" borderRadius={2} p={0} display="flex" flexDirection="row" alignItems="stretch" maxHeight="175px">
        <Box display="flex" flexDirection="column" justifyContent="flex-end" height="100%" pl={1} pr={1} pt={2.5} pb={0} flexShrink={0}>
          <img
            src={memberImage}
            alt={member.name}
            style={{
              borderRadius: 12,
              height: '100%',
              width: '143px',
              objectFit: 'cover',
              display: 'block',
              maxWidth: '100%',
            }}
            srcSet={`${memberImage} 175w`}
            sizes="(max-width: 1200px) 150px, 143px"
          />
        </Box>
        <Box flex={1} display="flex" flexDirection="column" alignItems="flex-start" justifyContent={hideLearnMore ? "flex-start" : "center"} pl={4} pr={2} pt={hideLearnMore ? 3 : 2} pb={1}>
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
          {!hideLearnMore && (
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
                  fontSize: 14,
                }}
                onClick={() => setDialogOpen(true)}
              >Learn more</button>
            </Box>
          )}
        </Box>
      </Box>
      <TeamMemberDialog
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
        name={member.name}
        images={carouselImages}
        description={getTeamDescription(member)}
      />
    </>
  );
};
