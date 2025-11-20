// Team data helper functions - can be used by both server and client components

interface TeamMember {
  name: string;
  role: string;
}

export interface TeamMemberData {
  isEC: boolean;
}

const teamDataMap: Record<string, TeamMemberData> = {
  'Shounak Ray Chaudhuri': { isEC: true },
  'Matthew Hsu': { isEC: true },
  'Peyton Slape': { isEC: true },
  'Mirabelle Egilmez': { isEC: true },
  'Tanvi Gupta': { isEC: true },
  'Ishan Jha': { isEC: true},
};

export const getTeamData = (name: string): TeamMemberData => {
  return teamDataMap[name] || { isEC: false };
};

export const getTeamImages = (name: string): string[] => {
  const imageMap: Record<string, string[]> = {
    'Shounak Ray Chaudhuri': ['/img/team/shounak_ray_chaudhuri.png', '/img/team/src_1.png', '/img/team/src_2.png', '/img/team/src_3.png', '/img/team/src_4.png', '/img/team/src_5.png'],
    'Matthew Hsu': ['/img/team/matthew_hsu.png', '/img/team/mh_1.png', '/img/team/mh_2.png', '/img/team/mh_3.png', '/img/team/mh_4.png', '/img/team/mh_5.png'],
    'Peyton Slape': ['/img/team/peyton_slape.png', '/img/team/ps_1.png', '/img/team/ps_2.png', '/img/team/ps_3.png', '/img/team/ps_4.png', '/img/team/ps_5.png'],
    'Mirabelle Egilmez': ['/img/team/mirabelle_egilmez.png', '/img/team/me_1.png', '/img/team/me_2.png', '/img/team/me_3.png', '/img/team/me_4.png', '/img/team/me_5.png'],
    'Kush Kharia': ['/img/team/kush_kharia.png', '/img/team/kk_1.png', '/img/team/kk_2.png', '/img/team/kk_3.png', '/img/team/kk_4.png', '/img/team/kk_5.png'],
    'Forest Liang': ['/img/team/forest_liang.png', '/img/team/fl_1.png', '/img/team/fl_2.png', '/img/team/fl_3.png', '/img/team/fl_4.png', '/img/team/fl_5.png'],
    'Julian Garcia': ['/img/team/julian_garcia.png', '/img/team/jg_1.png', '/img/team/jg_2.png', '/img/team/jg_3.png', '/img/team/jg_4.png', '/img/team/jg_5.png'],
    'Colin Thompson': ['/img/team/colin_thompson.png', '/img/team/ct_1.png', '/img/team/ct_2.png', '/img/team/ct_3.png', '/img/team/ct_4.png', '/img/team/ct_5.png'],
    'Jayati Babla': ['/img/team/jayati_babla.png', '/img/team/jb_1.png', '/img/team/jb_2.png', '/img/team/jb_3.png', '/img/team/jb_4.png', '/img/team/jb_5.png'],
    'Aanya Babla': ['/img/team/aanya_babla.png', '/img/team/ab_1.png', '/img/team/ab_2.png', '/img/team/ab_3.png', '/img/team/ab_4.png', '/img/team/ab_5.png'],
    'Pryya Surarujiroj': ['/img/team/pryya_surarujiroj.png', '/img/team/js_1.png', '/img/team/js_2.png', '/img/team/js_3.png', '/img/team/js_4.png', '/img/team/js_5.png'],
    'Daniel Eremin': ['/img/team/daniel_eremin.png', '/img/team/de_1.png', '/img/team/de_2.png', '/img/team/de_3.png', '/img/team/de_4.png', '/img/team/de_5.png'],
    'Kausik Ray Chaudhuri': ['/img/team/kausik_ray_chaudhuri.png', '/img/team/krc_1.png', '/img/team/krc_2.png', '/img/team/krc_3.png', '/img/team/krc_4.png', '/img/team/krc_5.png'],
    'J.P. Pierce': ['/img/team/jp_pierce.png', '/img/team/jp_1.png', '/img/team/jp_2.png', '/img/team/jp_3.png', '/img/team/jp_4.png', '/img/team/jp_5.png'],
    'Ishan Jha': ['/img/team/ishan_jha.png', '/img/team/ij_1.png', '/img/team/ij_2.png', '/img/team/ij_3.png', '/img/team/ij_4.png', '/img/team/ij_5.png'],
    'Tanvi Gupta': ['/img/team/tanvi_gupta.png', '/img/team/tg_1.png', '/img/team/tg_2.png', '/img/team/tg_3.png', '/img/team/tg_4.png', '/img/team/tg_5.png'],
    'Paul Hsu': ['/img/team/nt_leader.png'],
    'Tayyar Egilmez': ['/img/team/nt_leader.png'],
    'Jocelyn Slape': ['/img/team/nt_leader.png'],
    'Rima Chatterjee': ['/img/team/nt_leader.png'],
    'Division 1': ['/img/team/nt_leader.png', '/img/team/d1_1.png', '/img/team/d1_2.png', '/img/team/d1_3.png', '/img/team/d1_4.png', '/img/team/d1_5.png'],
    'Division 2': ['/img/team/nt_leader.png', '/img/team/d2_1.png', '/img/team/d2_2.png', '/img/team/d2_3.png', '/img/team/d2_4.png', '/img/team/d2_5.png'],
    'Division 3': ['/img/team/nt_leader.png', '/img/team/d3_1.png', '/img/team/d3_2.png', '/img/team/d3_3.png', '/img/team/d3_4.png', '/img/team/d3_5.png'],
    'Division 4': ['/img/team/nt_leader.png', '/img/team/d4_1.png', '/img/team/d4_2.png', '/img/team/d4_3.png', '/img/team/d4_4.png', '/img/team/d4_5.png'],
    'Division 5': ['/img/team/nt_leader.png', '/img/team/d5_1.png', '/img/team/d5_2.png', '/img/team/d5_3.png', '/img/team/d5_4.png', '/img/team/d5_5.png'],
    'Division 6': ['/img/team/nt_leader.png', '/img/team/d6_1.png', '/img/team/d6_2.png', '/img/team/d6_3.png', '/img/team/d6_4.png', '/img/team/d6_5.png'],
    'Division 7': ['/img/team/nt_leader.png', '/img/team/d7_1.png', '/img/team/d7_2.png', '/img/team/d7_3.png', '/img/team/d7_4.png', '/img/team/d7_5.png'],
    'Division 8': ['/img/team/nt_leader.png', '/img/team/d8_1.png', '/img/team/d8_2.png', '/img/team/d8_3.png', '/img/team/d8_4.png', '/img/team/d8_5.png'],
    'TBD': ['/img/team/nt_leader.png'],
  };
  
  return imageMap[name] || ['/img/team/nt_leader.png'];
};

export const getTeamDescription = (member: TeamMember): string => {
  if (member.name === 'Aanya Babla') {
    return `Joined Mar 31, 2025 • 10th grade • Francis Parker School • San Diego, CA\n\nAanya leads Project NexTech's social media presence and informs the community about Project NexTech's work. She also teaches programs in San Diego. Aanya volunteers with Project NexTech to make learning about STEM accessible and enjoyable to all.\n\nOutside of Project NexTech, Aanya loves to help her community through`;
  }
  else if(member.name === 'Colin Thompson') {
    return `Joined May 10, 2024 • 11th grade • Francis Parker School • San Diego, CA\n\nColin leads the Physics/Math department in making and teaching curriculum. He also teaches programs in San Diego. Colin volunteers with Project NexTech to put knowledge he's learned in school to good use, and to benefit the community.\n\nOutside of Project NexTech, Colin plays soccer and tennis, volunteers with Teen Volunteers in Action (TVIA), and participates in the Wharton Investment Program.\n\nOther extracurriculars: Soccer, Tennis, TVIA, Speech and Debate, Wharton Investment Program\n\nInterests: Economics, Physics, Sports, Politics, Nature`;
  }
  else if(member.name === 'Daniel Eremin') {
    return `Joined Apr 21, 2024 • 11th grade • Francis Parker School • San Diego, CA • <a href="https://www.linkedin.com/in/daniel-eremin-269a45355/" target="_blank">LinkedIn</a>\n\nDaniel manages the website, Discord server, and Google Workspace, and updates internal databases. He also sometimes creates Programming curriculum and teaches programs in San Diego. Daniel volunteers with Project NexTech because he enjoys helping people, and education is a good way to help others.\n\nOutside of Project NexTech, Daniel is an avid technology enthusiast, programmer, and electrical engineer, coding and wiring in his school's robotics team. He also plays soccer and tennis, and sails.\n\nOther extracurriculars: Robotics, Sailing, Tennis, Soccer, Hackathons\n\nInterests: Robotics, Science, Frontend Website Design, Control Systems, Programming, Math, Engineering, Sailing\n\n\n\n\n\n`;
  }
  else if(member.name === 'Forest Liang') {
    return `Joined Aug 22, 2024 • 10th grade • Francis Parker School • San Diego, CA\n\nForest leads programs and curricula in the Mentoring department, teaching programs in San Diego and helping robotics teams around the world. He volunteers with Project NexTech because he recognizes the importance of STEM education for students, and wants others to have the opportunities he had.\n\nOutside of Project NexTech, Forest leads manufacturing and assembly in his school's robotics team, and is also part of the programming and wiring teams. He also runs for Cross Country and Track and Field at school.\n\nOther extracurriculars: Robotics, FIRST Volunteering, FIRST Mentoring, Cross Country, Track\n\nInterests: Machining, Programming, Science, Running, History, Engineering`;
  }
  else if(member.name === 'Ishan Jha') {
    return `Joined Sep 24, 2025 • 9th grade • Del Norte High School • San Diego, CA • Executive Committee\n\nIshan leads the creation and teaching of Physics/Math curriculum in Project NexTech. He also teaches programs in San Diego, and is a member of the Executive Committee. Ishan volunteers with Project NexTech to give to students who are less fortunate, because he believes everyone deserves equal access to quality education.\n\nOutside of Project NexTech, Ishan enjoys building software applications and competing in cybersecurity and programming competitions.\n\nOther extracurriculars: CyberPatriot, Software Development, Tennis\n\nInterests: Tennis, Programming, Math, Science, Cricket`;
  }
  else if(member.name === 'Jayati Babla') {
    return `Joined Mar 13, 2025 • 10th grade • Francis Parker School • San Diego, CA\n\nJayati leads Natural Sciences curricula and programs at Project NexTech. She also teaches programs in San Diego and helps with social media advertising and outreach. She volunteers with Project NexTech because she wants to aid the education of students who might otherwise receive little exposure to science and technology.\n\nOutside of Project NexTech, Jayati is an involved member of her school's Model United Nations team, researching for and attending conferences. She also volunteers with Girl Scouts and Key Club, and makes ceramic art.\n\nOther extracurriculars: Model United Nations, Key Club, Ceramics\n\nInterests: Politics, History, Art, Biology, Basketball`;
  }
  else if(member.name === 'Julian Garcia') {
    return `Joined Sep 16, 2024 • 12th grade • Mira Mesa High School • San Diego, CA • <a href="https://www.linkedin.com/in/julian-angelo-garcia-2451b62a8/" target="_blank">LinkedIn</a>\n\nJulian leads the creation and teaching of Programming curriculum at Project NexTech, helping new volunteers. They also teach programs in San Diego. Julian volunteers with Project NexTech to help share their passion for programming and computer science with uninitiated students, and to make a difference in their community.\n\nOutside of Project NexTech, Julian is the president of their school's robotics team, MarauderTech, and competes in Speech and Debate. In their free time, Julian works on programming projects and loves to watch movies.\n\nOther extracurriculars: Robotics, Speech and Debate, Software Development\n\nInterests: Computer Science, Mathematics, Psychology, Philosophy, Comedy\n\n\n\n\n\n`;
  }
  else if(member.name === 'Kush Kharia') {
    return `Joined May 29, 2025 • 11th grade • Del Norte High School • San Diego, CA • <a href="https://www.linkedin.com/in/kush-kharia/" target="_blank">LinkedIn</a>\n\nKush leads programs and curricula for Project NexTech's Engineering department, leading meetings and helping new volunteers. He also teaches programs in San Diego. Kush volunteers with Project NexTech because he loves to teach and help younger generations. He hopes that positively influencing the younger generation will change the world for the better.\n\nOutside of Project NexTech, Kush helps with electrical wiring for his school's robotics team. In his free time, he plays soccer and basketball competitively, and hikes mountains.\n\nOther extracurriculars: Robotics, Soccer, Neuroscience Research\n\nInterests: Engineering, Physics, Athletics, Mathematics, Boba, Music`;
  }
  else if(member.name === 'Matthew Hsu') {
    return `Joined May 29, 2024 • 11th grade • Homeschool • San Diego, CA • Executive Committee • <a href="https://www.linkedin.com/in/matthew-hsu-a00a48362/" target="_blank">LinkedIn</a>\n\nMatthew manages the Project NexTech leadership team, coordinates volunteers, and leads the development and teaching of Engineering curriculum. He also teaches programs in San Diego and is a member of the Executive Committee.  Matthew volunteers with Project NexTech because he loves to help younger students discover STEM through interactive projects. He wants to meaningfully expand STEM access across underserved communities.\n\nOutside of Project NexTech, Matthew is the captain of his robotics team, NOMAD. He also builds engineering projects; competes in math, computer science, and physics contests; coaches science olympiad; and volunteers to help students through faith.\n\nOther extracurriculars: Robotics, Competitive Math, Competitive Physics\n\nInterests: Engineering, Robotics, Physics, Computer-Aided Design, Programming`;
  }
  else if(member.name === 'Mirabelle Egilmez') {
    return `Joined Oct 4, 2024 • 10th grade • Francis Parker School • San Diego, CA • Executive Committee\n\nMirabelle leads Project NexTech's outreach efforts, coordinating the outreach departments, and leads communications and volunteer onboarding for Project NexTech's international programs. She also teaches programs in San Diego and is a member of the Executive Committee. Mirabelle volunteers with Project NexTech because she wants students to be able to expand on their interests, acknowledging that they may not have many other places to do so.\n\nOutside of Project NexTech, Mirabelle is an active competitor in Model United Nations, plays the drumset, plays tennis, and volunteers through other activities.\n\nOther extracurriculars: Model United Nations, Music, Tennis, National Honor Society\n\nInterests: Languages, Music, Reading, Volunteering, Politics`;
  }
  else if(member.name === 'Peyton Slape') {
    return `Joined Jul 8, 2024 • 1st year • San Diego Miramar College • San Diego, CA • Executive Committee • <a href="https://www.linkedin.com/in/peyton-slape-5b4756303/" target="_blank">LinkedIn</a>\n\nPeyton leads Project NexTech's curriculum efforts, coordinating the curriculum departments and creating curriculum materials. He also mentors robotics teams and teaches programs in San Diego and is a member of the Executive Committee. Peyton volunteers with Project NexTech because he wants to give back, using his skills and experience to expand access to curriculum he had less exposure to growing up.\n\nOutside of Project NexTech, Peyton mentors robotics teams, conducts computational biology research, and works on projects involving computational modeling, control theory, and more.\n\nOther extracurriculars: STEM Research, Robotics Mentoring, AUV Competitions\n\nInterests: Mechanobiology, Biomechanics, Control Theory, Robot Localization, Bioengineering`;
  }
  else if(member.name === 'Shounak Ray Chaudhuri') {
    return `Joined May 19, 2023 • 12th grade • Francis Parker School • San Diego, CA • Executive Committee • <a href="https://www.linkedin.com/in/shounakrc/" target="_blank">LinkedIn</a>\n\nShounak leads Project NexTech, running backend logistics, coordinating the Executive Committee, and leadership team, filling in wherever help is needed. He also mentors robotics teams and teaches programs in San Diego. Shounak founded Project NexTech in 2023 because he has benefitted from high-quality STEM education growing up, and sees Project NexTech as the best way to pass that along to students around the world.\n\nOutside of Project NexTech, Shounak engineers robots, builds software systems, conducts academic research, presents at science fairs, competes in Speech and Debate, leads multiple school clubs, and develops advanced autonomous vehicle projects.\n\nOther extracurriculars: STEM Research, Science Fair, Robotics, Speech and Debate, Sailing\n\nInterests: Autonomous Vehicles, Mechanical Design, Computer Vision, Mechatronics, Machine Learning, Mathematics, Geopolitics, Music`;
  }
  else if(member.name === 'Tanvi Gupta') {
    return `Joined Jul 15, 2025 • 11th grade • Lawrence E. Elkins High School • Houston, TX • Executive Committee\n\nTanvi leads Project NexTech's Logistics team, reaching out to new locations and organizing programs. She is also a member of the Executive Committee and teaches programs in Houston. Tanvi volunteers with Project NexTech because she wants to provide others with access to STEM education that she had growing up.\n\nOutside of Project NexTech, Tanvi is very involved with marketing and business for a local company, her school's choir, and conducts faith-driven volunteering for fun.\n\nOther extracurriculars: Research, Engineering, Choir, Reading\n\nInterests: Music, Chemistry, Engineering, Math, Volunteering`;
  }

  else if(member.name === 'TBD') {
    return 'Position to be filled. More information will be added soon.';
  }
  
  return `${member.name} serves as ${member.role} at Project NexTech. More information about their background and contributions will be added soon.`;
};
