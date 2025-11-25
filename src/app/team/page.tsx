import React from 'react';
import { Box, Typography } from '@mui/material';
import { TeamGrid } from '../../components/TeamGrid';

const activeExecCommittee = [
  { name: 'Shounak Ray Chaudhuri', role: 'President' },
  { name: 'Matthew Hsu', role: 'Co-President' },
  { name: 'Peyton Slape', role: 'VP of Curriculum' },
  { name: 'Mirabelle Egilmez', role: 'VP of Outreach' },
];

const curriculumManagers = [
  { name: 'Matthew Hsu', role: 'Engineering Manager' },
  { name: 'Kush Kharia', role: 'Engineering Manager' },
  { name: 'Forest Liang', role: 'Mentoring Manager' },
  { name: 'Varshith Vijjapu', role: 'Programming Manager' },
  { name: 'Julian Garcia', role: 'Programming Manager' },
  { name: 'Colin Thompson', role: 'Physics/Math Manager' },
  { name: 'Ishan Jha', role: 'Physics/Math Manager' },
  { name: 'Jayati Babla', role: 'Natural Sciences Manager' },
];

const outreachManagers = [
  { name: 'Aanya Babla', role: 'Marketing Manager' },
  { name: 'Tanvi Gupta', role: 'Logistics Manager' },
  { name: 'Shounak Ray Chaudhuri', role: 'Logistics Manager' },
  { name: 'Mirabelle Egilmez', role: 'Policy/International Manager' },
  { name: 'Daniel Eremin', role: 'Webmaster' },
];

const board = [
  { name: 'Kausik Ray Chaudhuri', role: 'Board Chair' },
  { name: 'J.P. Pierce', role: 'Board Member' },
  { name: 'Paul Hsu', role: 'Board Member' },
  { name: 'Tayyar Egilmez', role: 'Board Member' },
  { name: 'Jocelyn Slape', role: 'Board Member' },
  { name: 'Rima Chatterjee', role: 'Board Member' },
  { name: 'TBD', role: 'Board Member' },
];

const divisionLeads = Array.from({ length: 8 }, (_, i) => ({
  name: `Division ${i + 1}`,
  role: 'Division Lead',
}));

const leadershipStructure = [
  {
    title: 'Executive Committee',
    description: 'Oversees all operations and strategic direction.'
  },
  {
    title: 'Curriculum & Outreach Managers',
    description: 'Lead curriculum development and community engagement.'
  },
  {
    title: 'Division Leads',
    description: 'Coordinate specific program areas and initiatives.'
  }
];

const Team: React.FC = () => (
  <Box px={{ xs: 2, md: 6 }} py={6}>
    <Typography variant="h4" fontWeight={700} mb={{ xs: 1, md: 2 }} fontFamily="Inter, Arial, sans-serif" align="center">
      Active Executive Committee
    </Typography>
    <TeamGrid team={activeExecCommittee} />

    <Typography variant="h4" fontWeight={700} mb={{ xs: 1, md: 2 }} fontFamily="Inter, Arial, sans-serif" align="center">
      Curriculum Managers
    </Typography>
    <TeamGrid team={curriculumManagers} />

    <Typography variant="h4" fontWeight={700} mb={{ xs: 1, md: 2 }} fontFamily="Inter, Arial, sans-serif" align="center">
      Outreach Managers
    </Typography>
    <TeamGrid team={outreachManagers} />

    <Typography variant="h4" fontWeight={700} mb={{ xs: 1, md: 2 }} fontFamily="Inter, Arial, sans-serif" align="center">
      Board of Directors
    </Typography>
    <TeamGrid team={board} />

    <Typography variant="h4" fontWeight={700} mb={{ xs: 1, md: 2 }} fontFamily="Inter, Arial, sans-serif" align="center">
      Division Leads
    </Typography>
    <TeamGrid team={divisionLeads} />

    <Typography variant="h4" fontWeight={700} mb={4} fontFamily="Inter, Arial, sans-serif" align="center">
      Organizational Structure
    </Typography>
    <Box display="grid" gridTemplateColumns={{ xs: '1fr', md: '1fr 1fr 1fr' }} gap={4} mb={6}>
      {leadershipStructure.map((item, idx) => (
        <Box key={idx} p={4} minHeight={180} display="flex" flexDirection="column" justifyContent="center" bgcolor="transparent" textAlign="center">
          <Typography variant="h5" fontWeight={700} fontFamily="Inter, Arial, sans-serif" mb={1} align="center">
            {item.title}
          </Typography>
          <Typography color="text.secondary" fontFamily="Inter, Arial, sans-serif" align="center">
            {item.description}
          </Typography>
        </Box>
      ))}
    </Box>
  </Box>
);

export default Team;