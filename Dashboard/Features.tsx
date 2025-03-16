import { Box, Typography, Grid, Card, CardContent, createTheme, useMediaQuery, Hidden } from '@mui/material';

const theme = createTheme({
	palette: {
		background: {
			default: "transparent", // Background color similar to the image
		},
		text: {
			primary: "#ffffff", // White text color
		},
	},
	typography: {
		fontFamily: "Arial, sans-serif",
	},
});

const style = {
	backgroundColor: "#6a004f",
	color: theme.palette.text.primary,
	height: "100%",
	alignItems: "center",
	display: "flex",
	justifyContent: "center",
	textAlign: "center",
	borderRadius: 7,
	border: '2px solid #bbb'
};

const Features = () => {
	const isMobile = useMediaQuery('(max-width: 600px)');

	const features = [
		{
			title: "Request CPU for Self",
			description:
				"The system dynamically creates a price for the staked wax given the current supply, total loaned out,\
				 number of days, and amount user requests. Then that wax is sent to a minion account and staked to the \
				 user for the given time.",
		},
		{
			title: "Request Free CPU",
			description:
				"As long as this account has wax it will send in a specified amount to the main contract requesting CPU \
				as if it was a regular user.",
		},
		{
			title: "Deposit to Earn",
			description:
				"Users can also deposit wax to earn 70% of the total fees collected.",
		},
		{
			title: "Request CPU for Others",
			description:
				"Similar to requesting for yourself, this does the first few steps but then directly stakes to the user\
				 specified. This can be sent from anyone for anyone else.",
		},
		{
			title: "Update Collected Fees",
			description:
				"This method is not required but will immediately update the table entry with how much wax the user has.\
				 This function will update the fees in the contract table and show you how much you could withdraw in total.",
		},
		{
			title: "Withdraw Deposited Wax",
			description:
				"At any time a user can request to withdraw deposited wax. A user can make as many withdrawal requests\
				 as they want up to the total wax they have deposited. If there is not enough liquid wax, as more gets \
				 unstaked it will be sent in order to users in line to withdraw.",
		},
	];

	return (
		<Box sx={{ py: 3, px: 2 }}>
			<Hidden smDown>
				<Typography sx={{ fontSize: { xs: 22, sm: 28, md: 36 } }} align="center" gutterBottom>
					Users can interact with the smart contract in a <br /> number of ways
				</Typography>
				<Typography align="center" paragraph sx={{ fontSize: { xs: 12, sm: 16, md: 22 }, color: '#ccc' }}>
					The system will be open for 1 week before allowing users to deposit their own wax to earn. If <br /> users find
					bugs there is a bug bounty program on discord.
				</Typography>
				<Grid
					container
					spacing={2}
					sx={{
						padding: isMobile ? 2 : 4,
						backgroundColor: theme.palette.background.default,
					}}
				>
					{/* First Row */}
					<Grid item sm={12} md={6} sx={{ width: '100%' }}>
						<Card sx={{ ...style, backgroundColor: 'rgb(45,25,30)' }}>
							<CardContent>
								<Typography variant="h4" gutterBottom sx={{ fontSize: 30 }}>
									{features[0].title}
								</Typography>
								<Typography variant="body2" sx={{ fontSize: 15, color: '#bbb' }}>{features[0].description}</Typography>
							</CardContent>
						</Card>
					</Grid>
					<Grid item sm={12} md={3} sx={{ width: '100%' }}>
						<Card sx={{ ...style, backgroundColor: 'rgb(45,25,30)' }}>
							<CardContent>
								<Typography variant="h4" gutterBottom sx={{ fontSize: 30 }}>
									{features[1].title}
								</Typography>
								<Typography variant="body2" sx={{ fontSize: 15, color: '#bbb' }}>{features[1].description}</Typography>
							</CardContent>
						</Card>
					</Grid>
					<Grid item sm={12} md={3} sx={{ width: '100%' }}>
						<Card sx={{ ...style, backgroundColor: 'rgb(45,25,30)' }}>
							<CardContent>
								<Typography variant="h4" gutterBottom sx={{ fontSize: 30 }}>
									{features[2].title}
								</Typography>
								<Typography variant="body2" sx={{ fontSize: 15, color: '#bbb' }}>{features[2].description}</Typography>
							</CardContent>
						</Card>
					</Grid>

					{/* Second Row */}
					<Grid item sm={12} md={3} sx={{ width: '100%' }}>
						<Card sx={{ ...style, backgroundColor: 'rgb(74,30,42)' }}>
							<CardContent>
								<Typography variant="h4" gutterBottom sx={{ fontSize: 30 }}>
									{features[3].title}
								</Typography>
								<Typography variant="body2" sx={{ fontSize: 15, color: '#bbb' }}>{features[3].description}</Typography>
							</CardContent>
						</Card>
					</Grid>
					<Grid item sm={12} md={3} sx={{ width: '100%' }}>
						<Card sx={{ ...style, backgroundColor: 'rgb(74,30,42)' }}>
							<CardContent>
								<Typography variant="h4" gutterBottom sx={{ fontSize: 30 }}>
									{features[4].title}
								</Typography>
								<Typography variant="body2" sx={{ fontSize: 15, color: '#bbb' }}>{features[4].description}</Typography>
							</CardContent>
						</Card>
					</Grid>
					<Grid item sm={12} md={6} sx={{ width: '100%' }}>
						<Card sx={{ ...style, backgroundColor: 'rgb(74,30,42)' }}>
							<CardContent>
								<Typography variant="h4" gutterBottom sx={{ fontSize: 30 }}>
									{features[5].title}
								</Typography>
								<Typography variant="body2" sx={{ fontSize: 15, color: '#bbb' }}>{features[5].description}</Typography>
							</CardContent>
						</Card>
					</Grid>
				</Grid>
			</Hidden>
		</Box>
	);
};

export default Features;
