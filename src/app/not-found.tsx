'use client';

import React from 'react';
import { Box, Typography, Link as MuiLink } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';

export default function NotFound() {
  return (
    <>
      <Head>
        <title>Page Not Found | Project NexTech</title>
        <meta name="description" content="The page you are looking for could not be found." />
        <meta name="robots" content="noindex" />
      </Head>
      <Box
      display="flex"
      flexDirection={{ xs: 'column', md: 'row' }}
      alignItems="center"
      justifyContent="center"
      minHeight="70vh"
      width="100%"
      px={{ xs: 2, md: 8 }}
      py={8}
      boxSizing="border-box"
      gap={{ xs: 4, md: 8 }}
      maxWidth={1400}
      mx="auto"
    >
      <Box display="flex" flexDirection="column" alignItems={{ xs: 'center', md: 'flex-start' }} justifyContent="center">
        <Typography
          variant="h1"
          sx={{ fontFamily: 'Inter, Arial, sans-serif', fontWeight: 700, color: '#f24c02', mb: 1, fontSize: { xs: 64, md: 96 }, textAlign: { xs: 'center', md: 'left' } }}
        >
          404
        </Typography>
        <Typography
          variant="h2"
          sx={{ fontFamily: 'Inter, Arial, sans-serif', fontWeight: 400, color: '#ffffff', mb: 2, fontSize: { xs: 32, md: 48 }, textAlign: { xs: 'center', md: 'left' } }}
        >
          Page not found
        </Typography>
        <Link href="/" style={{ textDecoration: 'none' }}>
          <MuiLink
            component="span"
            underline="none"
            sx={{ color: '#4083cc', fontSize: { xs: 20, md: 28 }, mt: 2, textAlign: { xs: 'center', md: 'left' }, fontWeight: 500, cursor: 'pointer' }}
          >
            Return home
          </MuiLink>
        </Link>
      </Box>
      <Box display="flex" alignItems="center" justifyContent="center">
        <Image
          src="/img/404.png"
          alt="404 Not Found"
          width={600}
          height={600}
          unoptimized
          style={{ maxWidth: '100%', minHeight: 300, maxHeight: 600, width: 'auto', height: 'auto', borderRadius: 24, boxShadow: '0 8px 32px rgba(0,0,0,0.16)' }}
        />
      </Box>
    </Box>
    </>
  );
}
