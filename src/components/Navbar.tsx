'use client';

import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Box, Button, IconButton, Drawer, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const navLinks = [
  { label: 'About', path: '/about' },
  { label: 'Programs', path: '/programs' },
  { label: 'Team', path: '/team' },
  { label: 'Contribute', path: '/contribute' },
  { label: 'Join', path: '/join' },
];

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen((prev) => !prev);
  };

  return (
    <AppBar position="static" color="primary" sx={{ background: '#282828', boxShadow: 'none' }}>
      <Toolbar sx={{ justifyContent: 'space-between', minHeight: 72, maxWidth: 1800, mx: 'auto', width: '100%' }}>
        <Box display="flex" alignItems="center">
          <Link href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
            <Image 
              src="/img/Logo.png" 
              alt="Project NexTech Logo" 
              width={38} 
              height={38} 
              quality={100}
              unoptimized
              priority
              style={{ height: 38, width: 'auto', marginRight: 20 }} 
            />
            <Typography variant="h6" sx={{ fontFamily: 'Inter, Arial, sans-serif', fontWeight: 400, color: '#fff', fontSize: '20px !important' }}>
              Project NexTech
            </Typography>
          </Link>
        </Box>
        {/* Desktop Nav */}
        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          {navLinks.map((link) => (
            <Button
              key={link.path}
              component={Link}
              href={link.path}
              color="inherit"
              sx={{
                fontFamily: 'Inter, Arial, sans-serif',
                fontWeight: pathname === link.path ? 700 : 400,
                color: pathname === link.path ? '#f24c02' : '#fff',
                mx: 1,
                textTransform: 'none',
                fontSize: '20px !important',
              }}
            >
              {link.label}
            </Button>
          ))}
        </Box>
        {/* Mobile Nav */}
        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
          <IconButton color="inherit" edge="end" onClick={handleDrawerToggle}>
            <MenuIcon />
          </IconButton>
          <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerToggle} PaperProps={{ sx: { background: '#222', color: '#fff' } }}>
            <Box sx={{ width: 220 }} role="presentation" onClick={handleDrawerToggle}>
              <List>
                {navLinks.map((link) => (
                  <ListItem key={link.path} disablePadding>
                    <ListItemButton component={Link} href={link.path} selected={pathname === link.path} sx={{ color: '#fff' }}>
                      <ListItemText
                        primary={link.label}
                        primaryTypographyProps={{
                          fontFamily: 'Inter, Arial, sans-serif',
                          fontWeight: pathname === link.path ? 700 : 400,
                          color: pathname === link.path ? '#f24c02' : '#fff',
                          fontSize: '18px !important',
                        }}
                      />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Box>
          </Drawer>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
