'use client';

import React from 'react';
import { Dialog, DialogContent, DialogTitle, IconButton, Box, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Image from '@/components/NexImage';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

interface TeamMemberDialogProps {
  open: boolean;
  onClose: () => void;
  name: string;
  images: string[];
  description: string;
}

const TeamMemberDialog: React.FC<TeamMemberDialogProps> = ({ open, onClose, name, images, description }) => (
  <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
    <DialogTitle sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', pb: 0 }}>
      <Typography component="span" variant="h5" fontWeight={700} fontFamily="Inter, Arial, sans-serif">{name}</Typography>
      <IconButton onClick={onClose}>
        <CloseIcon />
      </IconButton>
    </DialogTitle>
  <DialogContent sx={{ maxHeight: { xs: '80vh', sm: '85vh', md: '85vh' }, overflowY: 'auto', pt: { xs: 1, md: 2 }, pb: { xs: 2, md: 3 } }}>
      <Box mb={{ xs: 0.5, md: 3 }}>
        <Carousel showThumbs={false} showStatus={false} infiniteLoop dynamicHeight={false}>
          {images.map((img, idx) => (
            <Box 
              key={idx} 
              sx={{ 
                position: 'relative', 
                height: { xs: 300, sm: 400, md: 600 }, 
                width: '100%' 
              }}
            >
              <Image src={img} alt={`${name} ${idx + 1}`} fill style={{ objectFit: 'contain' }} sizes="(max-width: 768px) 90vw, 800px" />
            </Box>
          ))}
        </Carousel>
      </Box>
      <Typography
        variant="body1"
        fontFamily="Inter, Arial, sans-serif"
        sx={{
          whiteSpace: 'pre-line',
          fontSize: {
            xs: '0.95rem',
            sm: '1rem',
          },
          '@media (max-width:800px)': {
            fontSize: '0.9rem',
          },
          '@media (max-width:600px)': {
            fontSize: '0.8rem',
          },
          '& a': {
            color: 'primary.main',
            textDecoration: 'underline',
            '&:hover': {
              textDecoration: 'none',
            },
          },
        }}
        dangerouslySetInnerHTML={{ __html: description }}
      />
    </DialogContent>
  </Dialog>
);

export default TeamMemberDialog;
