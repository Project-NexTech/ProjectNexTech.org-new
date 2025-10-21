'use client';

import React from 'react';
import { Box, Typography } from '@mui/material';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

interface CourseCardProps {
  images: string[];
  title: string;
  description: string;
  altPrefix: string;
}

const CourseCard: React.FC<CourseCardProps> = ({ images, title, description, altPrefix }) => {
  return (
    <Box 
      bgcolor="#473024" 
      color="#fff" 
      borderRadius={2} 
      p={2} 
      display="flex" 
      flexDirection="column" 
      alignItems="flex-start" 
      justifyContent="flex-start" 
      sx={{ width: { xs: '100%' }, boxSizing: { xs: 'border-box' } }}
    >
      <Carousel showThumbs={false} showStatus={false} infiniteLoop autoPlay={false} width="100%" dynamicHeight={false}>
        {images.map((img, idx) => (
          <img 
            key={idx}
            src={img} 
            alt={`${altPrefix} ${idx + 1}`} 
            style={{ borderRadius: 8, width: '100%', aspectRatio: '16/9', objectFit: 'cover' }} 
          />
        ))}
      </Carousel>
      <Typography 
        fontWeight={700} 
        mt={2} 
        fontFamily="Inter, Arial, sans-serif" 
        sx={{ fontSize: { xs: 18, md: 20 } }}
      >
        {title}
      </Typography>
      <Typography 
        color="text.secondary" 
        fontFamily="Inter, Arial, sans-serif" 
        sx={{ whiteSpace: 'pre-line' }}
      >
        {description}
      </Typography>
    </Box>
  );
};

export default CourseCard;
