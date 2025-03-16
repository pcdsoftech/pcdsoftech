import React from 'react';
import { Box, Typography, Button, Grid, styled, useTheme, useMediaQuery } from '@mui/material';

// Types and Interfaces
interface HeroProps {
	githubUrl?: string;
}

interface ContentSectionProps {
	children: React.ReactNode;
}

interface GradientBackgroundProps {
	children: React.ReactNode;
}

// Theme Constants
const THEME = {
	colors: {
		primary: 'rgb(136,33,64)',
		secondary: 'rgba(133,32,63,1)',
		background: {
			dark: 'rgba(36,31,32,1)',
			gradient: 'linear-gradient(90deg, rgba(36,31,32,1) 0%, rgba(133,32,63,1) 100%)'
		},
		text: {
			primary: '#fff',
			secondary: '#bbb',
			link: '#ccc'
		}
	},
	spacing: {
		section: '16px',
		button: {
			horizontal: 20,
			width: 240
		}
	}
};

// Styled Components
const StyledButton = styled(Button)(({ theme }) => ({
	borderRadius: theme.shape.borderRadius,
	outline: `1px solid ${THEME.colors.text.primary}`,
	backgroundColor: THEME.colors.primary,
	fontSize: 18,
	marginLeft: THEME.spacing.button.horizontal,
	marginRight: THEME.spacing.button.horizontal,
	width: THEME.spacing.button.width,
	transition: 'transform 0.2s ease-in-out, background-color 0.2s ease-in-out',
	[theme.breakpoints.down('md')]: {
		fontSize: 14,
		width: 180
	},
	[theme.breakpoints.down('sm')]: {
		fontSize: 12,
		width: 140
	},
	'&:hover': {
		backgroundColor: THEME.colors.secondary,
		transform: 'scale(1.02)'
	}
}));

const GradientBackground: React.FC<GradientBackgroundProps> = ({ children }) => (
	<Grid
		container
		spacing={2}
		mt={4}
		justifyContent="center"
		sx={{
			p: { xs: 4, md: 8 },
			background: THEME.colors.background.gradient,
			borderRadius: 10,
			boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)'
		}}
	>
		{children}
	</Grid>
);

const ContentSection: React.FC<ContentSectionProps> = ({ children }) => (
	<Box
		sx={{
			textAlign: 'left',
			'& > *:not(:last-child)': {
				mb: 2
			}
		}}
	>
		{children}
	</Box>
);

// Main Component
const Hero: React.FC<HeroProps> = ({ githubUrl = "https://github.com/cpu4youu/cpu4youu.github.io" }) => {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('md'));

	return (
		<Box
			component="section"
			sx={{
				padding: THEME.spacing.section,
				paddingBottom: '30px',
				textAlign: 'center',
				backgroundImage: 'url(/hero-background.svg)',
				backgroundSize: 'cover',
				backgroundPosition: 'center',
				position: 'relative'
			}}
		>
			<Typography
				variant="h3"
				component="h1"
				gutterBottom
				sx={{
					fontSize: { xs: '1.5rem', sm: '2rem', md: '3rem' },
					fontWeight: 'bold',
					mb: 3
				}}
			>
				A new CPU renting system on the <br /> WAX blockchain
			</Typography>

			<Typography
				variant="h6"
				paragraph
				sx={{
					color: THEME.colors.text.secondary,
					fontSize: { xs: 14, sm: 16, md: 22 },
					mb: 4
				}}
			>
				Created with help from the WAX development team and community <br /> members Vaaaan & deraXyna.
			</Typography>

			<Box
				sx={{
					display: 'flex',
					justifyContent: 'center',
					gap: 2,
					mt: 3,
					flexDirection: { xs: 'column', sm: 'row' },
					alignItems: 'center'
				}}
			>
				<StyledButton variant="contained">CPU4SALE</StyledButton>
				<StyledButton variant="contained">LIMITLESSWAX</StyledButton>
			</Box>

			<GradientBackground>
				<Grid item xs={12} md={5}>
					<ContentSection>
						<Typography
							variant="h4"
							gutterBottom
							sx={{
								fontSize: { xs: '1.25rem', sm: '1.75rem', md: '2.25rem' },
								fontWeight: 'medium'
							}}
						>
							Allowing anyone to rent cpu or deposit wax and earn from renting to others.
						</Typography>
						<Typography sx={{ fontSize: { xs: 16, sm: 18, md: 20, wordBreak: 'break-word' }, color: THEME.colors.text.secondary }}>
							The price is dynamically set between a 1% and 10% fee and it changes everytime someone
							deposits/withdraws/rents/returns wax.
						</Typography>
						<Typography sx={{ fontSize: { xs: 16, sm: 18, md: 20 }, color: THEME.colors.text.secondary }}>
							Users are limited to how much they can rent in a single
							transaction but can make multiple requests as long as there is wax available. There is also a free
							system implemented but it has limits too.
						</Typography>
					</ContentSection>
				</Grid>
				<Grid item xs={12} md={7}>
					<Box
						component="img"
						src="/images/cpu-image.png"
						alt="CPU Illustration"
						loading="lazy"
						sx={{
							width: '100%',
							maxWidth: { xs: '200px', sm: '250px', md: '350px' },
							mx: 'auto',
							display: 'block',
							height: 'auto',
							objectFit: 'contain',
							transition: 'transform 0.3s ease-in-out',
							'&:hover': {
								transform: 'scale(1.05)'
							}
						}}
					/>
				</Grid>
			</GradientBackground>

			<Typography
				component="div"
				sx={{
					mt: 2,
					ml: { xs: 2, sm: 5 },
					textAlign: 'left',
					fontSize: { xs: 16, sm: 18 },
					color: THEME.colors.text.link
				}}
			>
				Public code:{' '}
				<a
					href={githubUrl}
					target="_blank"
					rel="noopener noreferrer"
					style={{
						color: THEME.colors.text.link,
						textDecoration: 'none',
						borderBottom: `1px solid ${THEME.colors.text.link}`,
						transition: 'opacity 0.2s ease-in-out',
						wordBreak: 'break-word'
					}}
				>
					github.com/cpu4youu/cpu4youu.github.io
				</a>
			</Typography>
		</Box>
	);
};

export default React.memo(Hero);
