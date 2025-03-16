import { Box, Theme, Typography, useMediaQuery } from "@mui/material";
import React from "react";

// components

interface LogoProps {
  src?: string;
  alt?: string;
  width?: number;
  height?: number;
}

const defaultLogoProps: LogoProps = {
  src: './assets/images/side.png',
  alt: 'Error',
};

const Error: React.FC = () =>{
  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));

  return (
    <Box sx={{ height: isMobile ? '540px' : '700px', my: 4}}>
			<Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',}}>
				<img
					src={defaultLogoProps.src}
					alt={defaultLogoProps.alt}
					style={{ objectFit: 'contain', width: '40%' }}
				/>
				<Typography sx={{ fontSize: isMobile ? '24px' : '48px', fontWeight: 700, color: 'white', textAlign: 'center' }}>
					Please log in to to see this
					feature in LimitlessWAX.
				</Typography>
			</Box>
		</Box>
  );
}

export default Error;
