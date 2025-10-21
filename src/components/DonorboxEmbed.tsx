'use client';

import React from 'react';
import { Box } from '@mui/material';

const DonorboxEmbed: React.FC = () => {
  React.useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://donorbox.org/widget.js';
    script.async = true;
    script.setAttribute('paypalExpress', 'false');
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <Box sx={{ display: 'flex', borderRadius: 2, overflow: 'hidden', boxShadow: 2, width: '100%' }}>
      <iframe
        title="Donorbox"
        src="https://donorbox.org/embed/donate-to-project-nextech?default_interval=m&designation=General+donation+that+our+student+leaders+may+allocate+as+needed&amount=100"
        name="donorbox"
        seamless
        frameBorder="0"
        scrolling="no"
        height="900px"
        width="100%"
        style={{ maxWidth: 500, minWidth: 250, maxHeight: 'none', border: 'none', borderRadius: 8, marginLeft: 'auto', marginRight: 'auto', filter: 'invert(85%) hue-rotate(180.0deg)' }}
        allow="payment"
      ></iframe>
    </Box>
  );
};

export default DonorboxEmbed;
