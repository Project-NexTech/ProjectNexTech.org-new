import React from 'react';
import { Box, Typography } from '@mui/material';
import { TeamGrid } from '../../components/TeamGrid';
import { TeamGridCompact } from '../../components/TeamGridCompact';
import { TeamMemberCard } from '../../components/TeamMemberCard';

const execCommittee = [
  { name: 'Matthew Hsu', role: 'Director of Operations'},
  { name: 'Pryya "Sompan" Surarujiroj', role: 'Director of Curriculum'},
  { name: 'Tanvi Gupta', role: 'Director of Outreach'},
  { name: 'Mirabelle Egilmez', role: 'Director of Recruitment'},
  { name: 'Ishan Jha', role: 'Director of Analytics'},
  { name: 'Daniel Eremin', role: 'Director of Software'},
];
const departmentManagers = [
 { name: 'Forest Liang', role: 'Curriculum Manager'},
 { name: 'Jayati Babla', role: 'Curriculum Manager'},
 { name: 'Aanya Babla', role: 'Social Media Manager'},
];
const boardOfDirectors = [
  { name: 'Shounak Ray Chaudhuri', role: 'Chair'},
  { name: 'Peyton Slape', role: 'Senior Member'},
  { name: 'Julian Garcia', role: 'Senior Member'},
  { name: 'Praem Kumar', role: 'Senior Member'},
];
const boardOfAdvisors = [
  { name: 'J.P. Pierce', role: 'Member'},
  { name: 'Paul Hsu', role: 'Member'},
  { name: 'Jocelyn Slape', role: 'Member'},
  { name: 'Rima Chatterjee', role: 'Member'},
  { name: 'Moumita Chatterjee', role: 'Member'},
  { name: 'Sumit Anand', role: 'Member'},
  { name: 'Sam Jha', role: 'Member'},
];

const advisorsChair = { name: 'Kausik Ray Chaudhuri', role: 'Chair' };
const advisorsMembers = boardOfAdvisors;

const Team: React.FC = () => (
  <Box px={{ xs: 2, md: 6 }} py={6}>
    <Typography variant="h4" fontWeight={700} mb={{ xs: 1, md: 2 }} fontFamily="Inter, Arial, sans-serif" align="center">
      Executive Committee
    </Typography>
    <TeamGrid team={execCommittee} />

    <Typography variant="h4" fontWeight={700} mb={{ xs: 1, md: 2 }} fontFamily="Inter, Arial, sans-serif" align="center">
      Department Managers
    </Typography>
    <TeamGrid team={departmentManagers} />

    <Typography variant="h4" fontWeight={700} mb={{ xs: 1, md: 2 }} fontFamily="Inter, Arial, sans-serif" align="center">
      Board of Directors
    </Typography>
    <TeamGrid team={boardOfDirectors} />

    <Typography variant="h4" fontWeight={700} mb={{ xs: 1, md: 2 }} fontFamily="Inter, Arial, sans-serif" align="center">
      Board of Advisors
    </Typography>
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: { xs: 1, md: 4 },
        alignItems: 'flex-start',
        mb: { xs: 1, md: 4 },
      }}
    >
      <Box
        sx={{
          width: '100%',
          flexShrink: 0,
          '@media (min-width:1200px)': { width: '33.333%' },
          '@media (min-width:1600px)': { width: '25%' },
        }}
      >
        <TeamMemberCard member={advisorsChair} />
      </Box>
      <Box sx={{ flex: 1, minWidth: 'min-content', width: '100%', overflowX: 'auto' }}>
        <TeamGridCompact team={advisorsMembers} />
      </Box>
    </Box>
  </Box>
);

export default Team;
