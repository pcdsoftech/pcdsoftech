import React, { useState } from "react";
import {
	Accordion,
	AccordionSummary,
	AccordionDetails,
	Typography,
	Box,
	useMediaQuery,
	Hidden,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { styled } from "@mui/system";

const theme = createTheme({
	palette: {
		background: {
			default: "transparent",
		},
		text: {
			primary: "#ffffff",
		},
	},
	typography: {
		fontFamily: "Arial, sans-serif",
	},
	components: {
		MuiAccordion: {
			styleOverrides: {
				root: {
					"&:before": {
						backgroundColor: "unset", // Remove the separator line
					},
				},
			},
		},
	},
});

const faqs = [
	"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
	"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
	"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
	"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
	"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
];

const StyledAccordion = styled(Accordion)(() => ({
	borderRadius: "24px",
	"&:first-of-type": {
		borderTopLeftRadius: "24px",
		borderTopRightRadius: "24px",
	},
	"&:last-of-type": {
		borderBottomLeftRadius: "24px",
		borderBottomRightRadius: "24px",
	},
}));

const App: React.FC = () => {
	const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
	const [expanded, setExpanded] = useState<string | false>(false);

	const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
		setExpanded(isExpanded ? panel : false);
	};

	return (
		<ThemeProvider theme={theme}>
			<Hidden smDown>
				<Box
					sx={{
						backgroundColor: theme.palette.background.default,
						padding: isMobile ? "16px" : "42px",
					}}
				>
					<Typography
						variant="h5"
						sx={{ textAlign: "center", marginBottom: "32px", marginTop: 2, fontSize: 36 }}
					>
						Frequently Asked Questions
					</Typography>
					{faqs.map((faq, index) => (
						<StyledAccordion
							key={index}
							expanded={expanded === `panel${index}`}
							onChange={handleChange(`panel${index}`)}
							sx={{
								backgroundColor: "rgb(55,30,35)",
								color: theme.palette.text.primary,
								marginBottom: "8px",
							}}
						>
							<AccordionSummary
								expandIcon={
									expanded === `panel${index}` ? (
										<RemoveIcon sx={{ color: "#ffffff", fontSize: 42 }} />
									) : (
										<AddIcon sx={{ color: "#ffffff", fontSize: 42 }} />
									)
								}
								sx={{
									padding: '0 50px',
									".MuiAccordionSummary-content": {
										margin: "10px 0",
									},
								}}
							>
								<Typography sx={{ fontSize: { xs: 16, sm: 24, lg: 32 } }}>{faq}</Typography>
							</AccordionSummary>
							<AccordionDetails>
								<Typography>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
									incididunt ut labore et dolore magna aliqua.
								</Typography>
							</AccordionDetails>
						</StyledAccordion>
					))}
				</Box>
			</Hidden>
		</ThemeProvider>
	);
};

export default App;
