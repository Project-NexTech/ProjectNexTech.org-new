import React from 'react';
import { Box, Typography } from '@mui/material';
import { TeamGrid } from '../../components/TeamGrid';

// Define team data as constants
const execCommittee = [
  { name: 'Shounak Ray Chaudhuri', role: 'President', images: ['/img/team/shounak_ray_chaudhuri.png'] },
  { name: 'Matthew Hsu', role: 'Co-President', images: ['/img/team/matthew_hsu.png'] },
  { name: 'Peyton Slape', role: 'VP of Curriculum', images: ['/img/team/peyton_slape.png'] },
  { name: 'Mirabelle Egilmez', role: 'VP of Outreach', images: ['/img/team/mirabelle_egilmez.png'] },
];

const curriculumManagers = [
  { name: 'Matthew Hsu', images: ['/img/team/matthew_hsu.png'], role: 'Engineering Manager' },
  { name: 'Kush Kharia', images: ['/img/team/kush_kharia.png'], role: 'Engineering Manager' },
  { name: 'Forest Liang', images: ['/img/team/forest_liang.png'], role: 'Mentoring Manager' },
  { name: 'Peyton Slape', images: ['/img/team/peyton_slape.png'], role: 'Programming Manager' },
  { name: 'Julian Garcia', images: ['/img/team/julian_garcia.png'], role: 'Programming Manager' },
  { name: 'Colin Thompson', images: ['/img/team/colin_thompson.png'], role: 'Physics/Math Manager' },
  { name: 'Jayati Babla', images: ['/img/team/jayati_babla.png'], role: 'Natural Sciences Manager' },
  { name: 'Daniel Eremin', images: ['/img/team/daniel_eremin.png'], role: 'Webmaster' },
];

const outreachManagers = [
  { name: 'Aanya Babla', images: ['/img/team/aanya_babla.png'], role: 'Marketing Manager' },
  { name: 'Pryya Surarujiroj', images: ['/img/team/pryya_surarujiroj.png'], role: 'Logistics Manager' },
  { name: 'Mirabelle Egilmez', images: ['/img/team/mirabelle_egilmez.png'], role: 'Policy/International Manager' },
];

const board = [
  { name: 'Kausik Ray Chaudhuri', images: ['/img/team/kausik_ray_chaudhuri.png'], role: 'Board Chair' },
  { name: 'J.P. Pierce', images: ['/img/team/jp_pierce.png'], role: 'Board Member' },
  { name: 'Paul Hsu', images: ['/img/team/nt_leader.png'], role: 'Board Member' },
  { name: 'Tayyar Egilmez', images: ['/img/team/nt_leader.png'], role: 'Board Member' },
  { name: 'Jocelyn Slape', images: ['/img/team/nt_leader.png'], role: 'Board Member' },
  { name: 'Rima Chatterjee', images: ['/img/team/nt_leader.png'], role: 'Board Member' },
  { name: 'TBD', images: ['/img/team/nt_leader.png'], role: 'Board Member' },
];

const divisionLeads = Array.from({ length: 8 }, (_, i) => ({
  name: `Division ${i + 1}`,
  images: ['/img/team/nt_leader.png'],
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
    <Typography variant="h4" fontWeight={700} mb={2} fontFamily="Inter, Arial, sans-serif" align="center">
      Active Executive Committee
    </Typography>
    <TeamGrid team={execCommittee} />

    <Typography variant="h4" fontWeight={700} mb={2} fontFamily="Inter, Arial, sans-serif" align="center">
      Curriculum Managers
    </Typography>
    <TeamGrid team={curriculumManagers} />

    <Typography variant="h4" fontWeight={700} mb={2} fontFamily="Inter, Arial, sans-serif" align="center">
      Outreach Managers
    </Typography>
    <TeamGrid team={outreachManagers} />

    <Typography variant="h4" fontWeight={700} mb={2} fontFamily="Inter, Arial, sans-serif" align="center">
      Board of Directors
    </Typography>
    <TeamGrid team={board} />

    <Typography variant="h4" fontWeight={700} mb={2} fontFamily="Inter, Arial, sans-serif" align="center">
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