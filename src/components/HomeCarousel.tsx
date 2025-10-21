'use client';

import React from 'react';
import { Box } from '@mui/material';
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

interface HomeCarouselProps {
  images: string[];
}

const HomeCarousel: React.FC<HomeCarouselProps> = ({ images }) => {
  return (
    <Box sx={{ width: '100%', aspectRatio: '16/9', maxHeight: '80vh' }}>
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        interval={4000}
        width="100%"
        dynamicHeight={false}
      >
        {images.map((img, idx) => (
          <div key={idx} style={{ width: '100%', aspectRatio: '16/9', position: 'relative' }}>
            <Image 
              src={img} 
              alt={`STEM Carousel ${idx + 1}`} 
              fill 
              unoptimized 
              style={{ borderRadius: 16, objectFit: 'cover' }} 
              sizes="(max-width: 1200px) 85vw, 50vw" 
            />
          </div>
        ))}
      </Carousel>
    </Box>
  );
};

export default HomeCarousel;
