// Team data helper functions - can be used by both server and client components

interface TeamMember {
  name: string;
  role: string;
  images: string[];
}

export const getTeamImages = (name: string): string[] => {
  const imageMap: Record<string, string[]> = {
    'Shounak Ray Chaudhuri': ['/img/team/src_1.png', '/img/team/src_2.png', '/img/team/src_3.png', '/img/team/src_4.png', '/img/team/src_5.png'],
    'Matthew Hsu': ['/img/team/mh_1.png', '/img/team/mh_2.png', '/img/team/mh_3.png', '/img/team/mh_4.png', '/img/team/mh_5.png'],
    'Peyton Slape': ['/img/team/ps_1.png', '/img/team/ps_2.png', '/img/team/ps_3.png', '/img/team/ps_4.png', '/img/team/ps_5.png'],
    'Kush Kharia': ['/img/team/kk_1.png', '/img/team/kk_2.png', '/img/team/kk_3.png', '/img/team/kk_4.png', '/img/team/kk_5.png'],
    'Forest Liang': ['/img/team/fl_1.png', '/img/team/fl_2.png', '/img/team/fl_3.png', '/img/team/fl_4.png', '/img/team/fl_5.png'],
    'Julian Garcia': ['/img/team/jg_1.png', '/img/team/jg_2.png', '/img/team/jg_3.png', '/img/team/jg_4.png', '/img/team/jg_5.png'],
    'Colin Thompson': ['/img/team/ct_1.png', '/img/team/ct_2.png', '/img/team/ct_3.png', '/img/team/ct_4.png', '/img/team/ct_5.png'],
    'Daniel Eremin': ['/img/team/de_1.png', '/img/team/de_2.png', '/img/team/de_3.png', '/img/team/de_4.png', '/img/team/de_5.png'],
    'Jayati Babla': ['/img/team/jb_1.png', '/img/team/jb_2.png', '/img/team/jb_3.png', '/img/team/jb_4.png', '/img/team/jb_5.png'],
    'Praem Kumar': ['/img/team/pk_1.png', '/img/team/pk_2.png', '/img/team/pk_3.png', '/img/team/pk_4.png', '/img/team/pk_5.png'],
    'Pryya Surarujiroj': ['/img/team/js_1.png', '/img/team/js_2.png', '/img/team/js_3.png', '/img/team/js_4.png', '/img/team/js_5.png'],
    'Mirabelle Egilmez': ['/img/team/me_1.png', '/img/team/me_2.png', '/img/team/me_3.png', '/img/team/me_4.png', '/img/team/me_5.png'],
    'Kausik Ray Chaudhuri': ['/img/team/krc_1.png', '/img/team/krc_2.png', '/img/team/krc_3.png', '/img/team/krc_4.png', '/img/team/krc_5.png'],
    'J.P. Pierce': ['/img/team/jp_1.png', '/img/team/jp_2.png', '/img/team/jp_3.png', '/img/team/jp_4.png', '/img/team/jp_5.png'],
    'Aanya Babla': ['/img/team/ab_1.png', '/img/team/ab_2.png', '/img/team/ab_3.png', '/img/team/ab_4.png', '/img/team/ab_5.png'],
    'Paul Hsu': ['/img/team/nt_leader.png'],
    'Tayyar Egilmez': ['/img/team/nt_leader.png'],
    'Jocelyn Slape': ['/img/team/nt_leader.png'],
    'Rima Chatterjee': ['/img/team/nt_leader.png'],
    'Division 1': ['/img/team/d1_1.png', '/img/team/d1_2.png', '/img/team/d1_3.png', '/img/team/d1_4.png', '/img/team/d1_5.png'],
    'Division 2': ['/img/team/d2_1.png', '/img/team/d2_2.png', '/img/team/d2_3.png', '/img/team/d2_4.png', '/img/team/d2_5.png'],
    'Division 3': ['/img/team/d3_1.png', '/img/team/d3_2.png', '/img/team/d3_3.png', '/img/team/d3_4.png', '/img/team/d3_5.png'],
    'Division 4': ['/img/team/d4_1.png', '/img/team/d4_2.png', '/img/team/d4_3.png', '/img/team/d4_4.png', '/img/team/d4_5.png'],
    'Division 5': ['/img/team/d5_1.png', '/img/team/d5_2.png', '/img/team/d5_3.png', '/img/team/d5_4.png', '/img/team/d5_5.png'],
    'Division 6': ['/img/team/d6_1.png', '/img/team/d6_2.png', '/img/team/d6_3.png', '/img/team/d6_4.png', '/img/team/d6_5.png'],
    'Division 7': ['/img/team/d7_1.png', '/img/team/d7_2.png', '/img/team/d7_3.png', '/img/team/d7_4.png', '/img/team/d7_5.png'],
    'Division 8': ['/img/team/d8_1.png', '/img/team/d8_2.png', '/img/team/d8_3.png', '/img/team/d8_4.png', '/img/team/d8_5.png'],
    'TBD': ['/img/team/tbd_1.png', '/img/team/tbd_2.png', '/img/team/tbd_3.png', '/img/team/tbd_4.png', '/img/team/tbd_5.png'],
  };
  
  return imageMap[name] || ['/img/team/nt_leader.png', '/img/team/nt_leader.png', '/img/team/nt_leader.png', '/img/team/nt_leader.png', '/img/team/nt_leader.png'];
};

export const getTeamDescription = (member: TeamMember): string => {
  if (member.name === 'Shounak Ray Chaudhuri') {
    return `Shounak Ray Chaudhuri is the President of Project NexTech. He leads the organization in its mission to inspire and support a global community of students through interactive, accessible, and high-quality STEM education. Shounak has a passion for technology, education, and community building.\n\nAchievements:\n- Founded Project NexTech\n- Led curriculum development for multiple STEM programs\n- Organized outreach events impacting hundreds of students\n\nInterests: AI, Robotics, Physics, Mentoring.`;
  }
  return `${member.name} serves as ${member.role} at Project NexTech. More information about their background and contributions will be added soon.`;
};
