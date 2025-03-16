import React, { useState } from 'react';
import { Button, Box, Typography, styled, useMediaQuery } from '@mui/material';
import SelectionPart from './SelectionPart';
import ActionPart from './ActionPart';


function MainContent() {
	const [pageNumber, setPageNumber] = useState<number>(0);

	const isMobile = useMediaQuery('(max-width: 600px)');

	const handlePageChange = (newPageNumber: number) => {
		setPageNumber(newPageNumber);	
	};

	const MainContentContainer = styled(Box)({
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: isMobile ? '8px' : '2rem',
		backgroundColor: '#4A1E2A',
		borderRadius: '4px',
		marginBottom: '2rem', // Add some spacing before the "plus buttons"
		marginTop: '2rem',
	});
  return (
    <MainContentContainer>
			{pageNumber === 0 ?
				<SelectionPart handlePageChange={handlePageChange} />
				:
				<ActionPart handlePageChange={handlePageChange} />
			}
    </MainContentContainer>
  );
}

export default MainContent;