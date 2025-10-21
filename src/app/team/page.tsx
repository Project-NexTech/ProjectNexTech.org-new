'use client';
import Image from 'next/image';

// Image paths as constants - Next.js serves files from public directory
const src_1 = '/img/team/src_1.png';
const src_2 = '/img/team/src_2.png';
const src_3 = '/img/team/src_3.png';
const src_4 = '/img/team/src_4.png';
const src_5 = '/img/team/src_5.png';
const d1_1 = '/img/team/d1_1.png';
const d1_2 = '/img/team/d1_2.png';
const d1_3 = '/img/team/d1_3.png';
const d1_4 = '/img/team/d1_4.png';
const d1_5 = '/img/team/d1_5.png';
const d2_1 = '/img/team/d2_1.png';
const d2_2 = '/img/team/d2_2.png';
const d2_3 = '/img/team/d2_3.png';
const d2_4 = '/img/team/d2_4.png';
const d2_5 = '/img/team/d2_5.png';
const d3_1 = '/img/team/d3_1.png';
const d3_2 = '/img/team/d3_2.png';
const d3_3 = '/img/team/d3_3.png';
const d3_4 = '/img/team/d3_4.png';
const d3_5 = '/img/team/d3_5.png';
const d4_1 = '/img/team/d4_1.png';
const d4_2 = '/img/team/d4_2.png';
const d4_3 = '/img/team/d4_3.png';
const d4_4 = '/img/team/d4_4.png';
const d4_5 = '/img/team/d4_5.png';
const d5_1 = '/img/team/d5_1.png';
const d5_2 = '/img/team/d5_2.png';
const d5_3 = '/img/team/d5_3.png';
const d5_4 = '/img/team/d5_4.png';
const d5_5 = '/img/team/d5_5.png';
const d6_1 = '/img/team/d6_1.png';
const d6_2 = '/img/team/d6_2.png';
const d6_3 = '/img/team/d6_3.png';
const d6_4 = '/img/team/d6_4.png';
const d6_5 = '/img/team/d6_5.png';
const d7_1 = '/img/team/d7_1.png';
const d7_2 = '/img/team/d7_2.png';
const d7_3 = '/img/team/d7_3.png';
const d7_4 = '/img/team/d7_4.png';
const d7_5 = '/img/team/d7_5.png';
const d8_1 = '/img/team/d8_1.png';
const d8_2 = '/img/team/d8_2.png';
const d8_3 = '/img/team/d8_3.png';
const d8_4 = '/img/team/d8_4.png';
const d8_5 = '/img/team/d8_5.png';
const kushImg = '/img/team/kush_kharia.png';
const forestImg = '/img/team/forest_liang.png';
const julianImg = '/img/team/julian_garcia.png';
const colinImg = '/img/team/colin_thompson.png';
const danielImg = '/img/team/daniel_eremin.png';
const praemImg = '/img/team/praem_kumar.png';
const pryyaImg = '/img/team/pryya_surarujiroj.png';
const mirabelleImg = '/img/team/mirabelle_egilmez.png';
const kausikImg = '/img/team/kausik_ray_chaudhuri.png';
const jpImg = '/img/team/jp_pierce.png';
const paulImg = '/img/team/nt_leader.png';
const tayyarImg = '/img/team/nt_leader.png';
const jocelynImg = '/img/team/nt_leader.png';
const rimaImg = '/img/team/nt_leader.png';
const jayatiImg = '/img/team/jayati_babla.png';
const aanyaImg = '/img/team/aanya_babla.png';
const ntLeaderImg = '/img/team/nt_leader.png';
const ph_1 = '/img/team/ph_1.png';
const ph_2 = '/img/team/ph_2.png';
const ph_3 = '/img/team/ph_3.png';
const ph_4 = '/img/team/ph_4.png';
const ph_5 = '/img/team/ph_5.png';
const te_1 = '/img/team/te_1.png';
const te_2 = '/img/team/te_2.png';
const te_3 = '/img/team/te_3.png';
const te_4 = '/img/team/te_4.png';
const te_5 = '/img/team/te_5.png';
const js_1 = '/img/team/js_1.png';
const js_2 = '/img/team/js_2.png';
const js_3 = '/img/team/js_3.png';
const js_4 = '/img/team/js_4.png';
const js_5 = '/img/team/js_5.png';
const rc_1 = '/img/team/rc_1.png';
const rc_2 = '/img/team/rc_2.png';
const rc_3 = '/img/team/rc_3.png';
const rc_4 = '/img/team/rc_4.png';
const rc_5 = '/img/team/rc_5.png';
const tbd_1 = '/img/team/tbd_1.png';
const tbd_2 = '/img/team/tbd_2.png';
const tbd_3 = '/img/team/tbd_3.png';
const tbd_4 = '/img/team/tbd_4.png';
const tbd_5 = '/img/team/tbd_5.png';
const shounakImg = '/img/team/shounak_ray_chaudhuri.png';
const matthewImg = '/img/team/matthew_hsu.png';
const peytonImg = '/img/team/peyton_slape.png';
const mh_1 = '/img/team/mh_1.png';
const mh_2 = '/img/team/mh_2.png';
const mh_3 = '/img/team/mh_3.png';
const mh_4 = '/img/team/mh_4.png';
const mh_5 = '/img/team/mh_5.png';
const ps_1 = '/img/team/ps_1.png';
const ps_2 = '/img/team/ps_2.png';
const ps_3 = '/img/team/ps_3.png';
const ps_4 = '/img/team/ps_4.png';
const ps_5 = '/img/team/ps_5.png';
const kk_1 = '/img/team/kk_1.png';
const kk_2 = '/img/team/kk_2.png';
const kk_3 = '/img/team/kk_3.png';
const kk_4 = '/img/team/kk_4.png';
const kk_5 = '/img/team/kk_5.png';
const fl_1 = '/img/team/fl_1.png';
const fl_2 = '/img/team/fl_2.png';
const fl_3 = '/img/team/fl_3.png';
const fl_4 = '/img/team/fl_4.png';
const fl_5 = '/img/team/fl_5.png';
const jg_1 = '/img/team/jg_1.png';
const jg_2 = '/img/team/jg_2.png';
const jg_3 = '/img/team/jg_3.png';
const jg_4 = '/img/team/jg_4.png';
const jg_5 = '/img/team/jg_5.png';
const ct_1 = '/img/team/ct_1.png';
const ct_2 = '/img/team/ct_2.png';
const ct_3 = '/img/team/ct_3.png';
const ct_4 = '/img/team/ct_4.png';
const ct_5 = '/img/team/ct_5.png';
const de_1 = '/img/team/de_1.png';
const de_2 = '/img/team/de_2.png';
const de_3 = '/img/team/de_3.png';
const de_4 = '/img/team/de_4.png';
const de_5 = '/img/team/de_5.png';
const pk_1 = '/img/team/pk_1.png';
const pk_2 = '/img/team/pk_2.png';
const pk_3 = '/img/team/pk_3.png';
const pk_4 = '/img/team/pk_4.png';
const pk_5 = '/img/team/pk_5.png';
const jb_1 = '/img/team/jb_1.png';
const jb_2 = '/img/team/jb_2.png';
const jb_3 = '/img/team/jb_3.png';
const jb_4 = '/img/team/jb_4.png';
const jb_5 = '/img/team/jb_5.png';
const ab_1 = '/img/team/ab_1.png';
const ab_2 = '/img/team/ab_2.png';
const ab_3 = '/img/team/ab_3.png';
const ab_4 = '/img/team/ab_4.png';
const ab_5 = '/img/team/ab_5.png';

const me_1 = '/img/team/me_1.png';
const me_2 = '/img/team/me_2.png';
const me_3 = '/img/team/me_3.png';
const me_4 = '/img/team/me_4.png';
const me_5 = '/img/team/me_5.png';
const krc_1 = '/img/team/krc_1.png';
const krc_2 = '/img/team/krc_2.png';
const krc_3 = '/img/team/krc_3.png';
const krc_4 = '/img/team/krc_4.png';
const krc_5 = '/img/team/krc_5.png';
const jp_1 = '/img/team/jp_1.png';
const jp_2 = '/img/team/jp_2.png';
const jp_3 = '/img/team/jp_3.png';
const jp_4 = '/img/team/jp_4.png';
const jp_5 = '/img/team/jp_5.png';
import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import TeamMemberDialog from '../../components/TeamMemberDialog';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const makeTeam = (count: number, title: string) =>
  Array.from({ length: count }, (_, i) => ({
    name: `${title} ${i + 1}`,
    role: `${title} Role`,
    images: [
      'https://source.unsplash.com/200x200/?person,portrait',
      'https://source.unsplash.com/200x200/?person,profile',
    ],
  }));

const execCommittee = [
  {
    name: 'Shounak Ray Chaudhuri',
    role: 'President',
    images: [shounakImg],
  },
  {
    name: 'Matthew Hsu',
    role: 'Co-President',
    images: [matthewImg],
  },
  {
    name: 'Peyton Slape',
    role: 'VP of Curriculum',
    images: [peytonImg],
  },
  {
    name: 'Mirabelle Egilmez',
    role: 'VP of Outreach',
    images: [mirabelleImg],
  },
];
const curriculumManagers = [
  { name: 'Matthew Hsu', images: [matthewImg], role: 'Engineering Manager' },
  { name: 'Kush Kharia', images: [kushImg], role: 'Engineering Manager' },
  { name: 'Forest Liang', images: [forestImg], role: 'Mentoring Manager' },
  { name: 'Peyton Slape', images: [peytonImg], role: 'Programming Manager' },
  { name: 'Julian Garcia', images: [julianImg], role: 'Programming Manager' },
  { name: 'Colin Thompson', images: [colinImg], role: 'Physics/Math Manager' },
  { name: 'Peyton Slape', images: [peytonImg], role: 'Natural Sciences Manager' },
  { name: 'Jayati Babla', images: [jayatiImg], role: 'Natural Sciences Manager' },
  { name: 'Daniel Eremin', images: [danielImg], role: 'Webmaster' },
];
const outreachManagers = [
  { name: 'Aanya Babla', images: [aanyaImg], role: 'Marketing Manager' },
  { name: 'Pryya Surarujiroj', images: [pryyaImg], role: 'Logistics Manager' },
  { name: 'Mirabelle Egilmez', images: [mirabelleImg], role: 'Policy/International Manager' },
];
const board = [
  { name: 'Kausik Ray Chaudhuri', images: [kausikImg], role: 'Board Chair' },
  { name: 'J.P. Pierce', images: [jpImg], role: 'Board Member' },
  { name: 'Paul Hsu', images: [paulImg], role: 'Board Member' },
  { name: 'Tayyar Egilmez', images: [tayyarImg], role: 'Board Member' },
  { name: 'Jocelyn Slape', images: [jocelynImg], role: 'Board Member' },
  { name: 'Rima Chatterjee', images: [rimaImg], role: 'Board Member' },
  { name: 'TBD', images: [ntLeaderImg], role: 'Board Member' },
];
const divisionLeads = [
  { name: 'Division 1', images: [ntLeaderImg], role: 'Division Lead' },
  { name: 'Division 2', images: [ntLeaderImg], role: 'Division Lead' },
  { name: 'Division 3', images: [ntLeaderImg], role: 'Division Lead' },
  { name: 'Division 4', images: [ntLeaderImg], role: 'Division Lead' },
  { name: 'Division 5', images: [ntLeaderImg], role: 'Division Lead' },
  { name: 'Division 6', images: [ntLeaderImg], role: 'Division Lead' },
  { name: 'Division 7', images: [ntLeaderImg], role: 'Division Lead' },
  { name: 'Division 8', images: [ntLeaderImg], role: 'Division Lead' },
];

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

const TeamGrid = ({ team }: { team: { name: string; role: string; images: string[] }[] }) => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogMember, setDialogMember] = useState<{ name: string; images: string[]; description: string } | null>(null);

  // Default description generator
  const getDescription = (member: any) => {
    if (member.name === 'Shounak Ray Chaudhuri') {
      return `Shounak Ray Chaudhuri is the President of Project NexTech. He leads the organization in its mission to inspire and support a global community of students through interactive, accessible, and high-quality STEM education. Shounak has a passion for technology, education, and community building.\n\nAchievements:\n- Founded Project NexTech\n- Led curriculum development for multiple STEM programs\n- Organized outreach events impacting hundreds of students\n\nInterests: AI, Robotics, Physics, Mentoring.`;
    }
    // Add more custom descriptions here if desired
    return `${member.name} serves as ${member.role} at Project NexTech. More information about their background and contributions will be added soon.`;
  };

  // Default images generator
  const getImages = (member: any) => {
    switch (member.name) {
      case 'Shounak Ray Chaudhuri':
        return [src_1, src_2, src_3, src_4, src_5];
      case 'Matthew Hsu':
        return [mh_1, mh_2, mh_3, mh_4, mh_5];
      case 'Peyton Slape':
        return [ps_1, ps_2, ps_3, ps_4, ps_5];
      case 'Kush Kharia':
        return [kk_1, kk_2, kk_3, kk_4, kk_5];
      case 'Forest Liang':
        return [fl_1, fl_2, fl_3, fl_4, fl_5];
      case 'Julian Garcia':
        return [jg_1, jg_2, jg_3, jg_4, jg_5];
      case 'Colin Thompson':
        return [ct_1, ct_2, ct_3, ct_4, ct_5];
      case 'Daniel Eremin':
        return [de_1, de_2, de_3, de_4, de_5];
      case 'Jayati Babla':
        return [jb_1, jb_2, jb_3, jb_4, jb_5];
      case 'Praem Kumar':
        return [pk_1, pk_2, pk_3, pk_4, pk_5];
      case 'Pryya Surarujiroj':
        return [js_1, js_2, js_3, js_4, js_5];
      case 'Mirabelle Egilmez':
        return [me_1, me_2, me_3, me_4, me_5];
      case 'Kausik Ray Chaudhuri':
        return [krc_1, krc_2, krc_3, krc_4, krc_5];
      case 'J.P. Pierce':
        return [jp_1, jp_2, jp_3, jp_4, jp_5];
      case 'Paul Hsu':
        return [paulImg];
      case 'Tayyar Egilmez':
        return [tayyarImg];
      case 'Jocelyn Slape':
        return [jocelynImg];
      case 'Rima Chatterjee':
        return [rimaImg];
      case 'Division 1':
        return [d1_1, d1_2, d1_3, d1_4, d1_5];
      case 'Division 2':
        return [d2_1, d2_2, d2_3, d2_4, d2_5];
      case 'Division 3':
        return [d3_1, d3_2, d3_3, d3_4, d3_5];
      case 'Division 4':
        return [d4_1, d4_2, d4_3, d4_4, d4_5];
      case 'Division 5':
        return [d5_1, d5_2, d5_3, d5_4, d5_5];
      case 'Division 6':
        return [d6_1, d6_2, d6_3, d6_4, d6_5];
      case 'Division 7':
        return [d7_1, d7_2, d7_3, d7_4, d7_5];
      case 'Division 8':
        return [d8_1, d8_2, d8_3, d8_4, d8_5];
      case 'TBD':
        return [tbd_1, tbd_2, tbd_3, tbd_4, tbd_5];
      default:
        return [ntLeaderImg, ntLeaderImg, ntLeaderImg, ntLeaderImg, ntLeaderImg];
    }
  };

  const handleLearnMore = (member: any) => {
    setDialogMember({
      name: member.name,
      images: getImages(member),
      description: getDescription(member)
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

const BoardGrid = ({ team }: { team: { name: string; role: string; images: string[] }[] }) => (
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
      <Box key={idx} bgcolor="#303947" color="#fff" borderRadius={2} p={0} display="flex" flexDirection="row" alignItems="center" minHeight="150px">
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
        <Box flex={1} display="flex" flexDirection="column" alignItems="flex-start" justifyContent="center" pl={0} pr={2} py={2}>
          <Typography variant="h6" fontWeight={700} fontFamily="Inter, Arial, sans-serif" mb={0.5}>
            {member.name}
          </Typography>
          <Typography color="text.secondary" fontFamily="Inter, Arial, sans-serif" mb={1}>
            {member.role}
          </Typography>
          <Box mt={1}>
            <button style={{
              background: '#f24c02',
              color: '#fff',
              border: 'none',
              borderRadius: 6,
              padding: '6px 16px',
              fontWeight: 600,
              cursor: 'pointer',
              fontFamily: 'Inter, Arial, sans-serif',
              fontSize: 14
            }}>Learn more</button>
          </Box>
        </Box>
      </Box>
    ))}
  </Box>
);

const Team: React.FC = () => (
    <Box px={{ xs: 2, md: 6 }} py={6}>
      {/* Executive Committee */}
      <Typography variant="h4" fontWeight={700} mb={2} fontFamily="Inter, Arial, sans-serif" align="center">
        Active Executive Committee
      </Typography>
      <TeamGrid team={execCommittee} />

      {/* Curriculum Managers */}
      <Typography variant="h4" fontWeight={700} mb={2} fontFamily="Inter, Arial, sans-serif" align="center">
        Curriculum Managers
      </Typography>
      <TeamGrid team={curriculumManagers} />

      {/* Outreach Managers */}
      <Typography variant="h4" fontWeight={700} mb={2} fontFamily="Inter, Arial, sans-serif" align="center">
        Outreach Managers
      </Typography>
      <TeamGrid team={outreachManagers} />

      {/* Board of Directors */}
      <Typography variant="h4" fontWeight={700} mb={2} fontFamily="Inter, Arial, sans-serif" align="center">
        Board of Directors
      </Typography>
      <TeamGrid team={board} />

      {/* Division Leads */}
      <Typography variant="h4" fontWeight={700} mb={2} fontFamily="Inter, Arial, sans-serif" align="center">
        Division Leads
      </Typography>
      <TeamGrid team={divisionLeads} />

      {/* Organizational Structure Section Header */}
      <Typography variant="h4" fontWeight={700} mb={4} fontFamily="Inter, Arial, sans-serif" align="center">
        Organizational Structure
      </Typography>
      {/* Three Column Section Like About Top, No Cards */}
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